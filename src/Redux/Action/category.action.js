
import * as ActionTypes from "../ActionType";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "../../firebase";
import { ref, getDownloadURL, uploadBytes, deleteObject } from "firebase/storage";


// get category--------------------------------------------------------------
export const categorydata = (data) => async (dispatch) => {
  dispatch(loadingcategory());
  try {
    let data = [];
    const getref = await getDocs(collection(db, "category"));
    getref.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });
    dispatch({ type: ActionTypes.GET_CATEGORY, payload: data });
  } catch (error) {
    console.log(error);
  }
};



//post category-------------------------------------------
export const postcategory = (data) => async (dispatch) => {
  console.log(data);
  // dispatch(loadingcategory())
  try {
    let rendomStr = Math.floor(Math.random() * 1000000).toString();
    const categoryRef = ref(storage, "category/" + rendomStr);
    uploadBytes(categoryRef, data.file).then((snapshot) => {
      getDownloadURL(snapshot.ref).then(async (url) => {
        const docRef = await addDoc(collection(db, "category"), {
          category_name: data.category_name,
          url: url,
          fileName: rendomStr
        });
        console.log("Document written with ID: ", docRef.id);
        dispatch({
          type: ActionTypes.POST_CATEGORY,
          payload: {
            id: docRef.id,
            category_name: data.category_name,
            url: url,
            fileName: rendomStr
          },
        });
      });

    });
  } catch (error) {
    dispatch(errordoctor(error.message));
    console.error("Error adding document: ", error);
  }
};


// update category---------------------------------
export const updatecategory = (data) => async (dispatch) => {
  // dispatch(loadingcategory())
  try {
    const washingtonRef = doc(db, "category", data.id);
    if (typeof data.file === "string") {
      await updateDoc(washingtonRef, {
        category_name: data.category_name,
        category: data.category,
        company_name: data.company_name,
        price: data.price,
        model_no: data.model_no,
        description: data.description,
        url: data.url
      });

      dispatch({ type: ActionTypes.UPDATE_CATEGORY, payload: data });
    } else {

      const categoryRefdel = ref(storage, 'category/' + data.fileName);

      deleteObject(categoryRefdel).then(async () => {
        let rendomStr = Math.floor(Math.random() * 1000000).toString();
        const categoryRef = ref(storage, 'category/' + rendomStr);

        uploadBytes(categoryRef, data.file)
          .then((snapshot) => {
            getDownloadURL(snapshot.ref)
              .then(async (url) => {
                // console.log("Document written with ID: ", docRef.id);
                await updateDoc(washingtonRef, {
                  category_name: data.category_name,
                  category: data.category,
                  company_name: data.company_name,
                  price: data.price,
                  model_no: data.model_no,
                  description: data.description,
                  url: url,
                  fileName: rendomStr
                });
                dispatch({ type: ActionTypes.UPDATE_CATEGORY, payload: { ...data, fileName: rendomStr, url: url, } })
              })
          }
          )
      })
    }
  } catch (error) {
    dispatch(errordoctor(error.message));
  }
}




//delete category----------------------------------------------------
export const deletecategory = (data) => async (dispatch) => {
  // dispatch(loadingcategory())
  try {
    const desertRef = ref(storage, 'category/' + data.fileName);
    deleteObject(desertRef).then(async () => {
      dispatch(loadingcategory())
      await deleteDoc(doc(db, "category", data.id));
      dispatch({ type: ActionTypes.DELETE_CATEGORY, payload: data.id });
    }).catch((error) => {
      dispatch(errordoctor(error.message))
    });
  }
  catch (error) {
    dispatch(errordoctor(error.message))
  }
}


export const loadingcategory = () => (dispatch) => {
  dispatch({ type: ActionTypes.LOADING_CATEGORY });
};

export const errordoctor = (error) => (dispatch) => {
  dispatch({ type: ActionTypes.ERROE_CATEGORY, payload: error });
};
