import * as ActionTypes from "../ActionType";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
  getDoc,
} from "firebase/firestore";
import { db, storage } from "../../firebase";
import { ref, getDownloadURL, uploadBytes, deleteObject } from "firebase/storage";


// get product--------------------------------------------------------------
export const productdata = (data) => async (dispatch) => {
  dispatch(loadingproduct());
  try {
    let data = [];
    const getref = await getDocs(collection(db, "product"));
    getref.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });
    dispatch({ type: ActionTypes.GET_PRODUCT, payload: data });
  } catch (error) {
    console.log(error);
  }
};



//post product-------------------------------------------
export const postproduct = (data) => async (dispatch) => {
  console.log(data);
  // dispatch(loadingproduct())
  try {
    let rendomStr = Math.floor(Math.random() * 1000000).toString();
    const productRef = ref(storage, "product/" + rendomStr);
    uploadBytes(productRef, data.file).then((snapshot) => {
      getDownloadURL(snapshot.ref).then(async (url) => {
        const docRef = await addDoc(collection(db, "product"), {
          product_name: data.product_name,
          category: data.category,
          company_name: data.company_name,
          price: data.price,
          qnty: data.qnty,
          model_no: data.model_no,
          description: data.description,
          url: url,
          fileName: rendomStr
        });
        console.log("Document written with ID: ", docRef.id);
        dispatch({
          type: ActionTypes.POST_PRODUCT,
          payload: {
            id: docRef.id,
            product_name: data.product_name,
            category: data.category,
            company_name: data.company_name,
            price: data.price,
            qnty: data.qnty,
            model_no: data.model_no,
            description: data.description,
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


// update product---------------------------------
export const updateproduct = (data) => async (dispatch) => {
  // dispatch(loadingproduct())
  try {
    const washingtonRef = doc(db, "product", data.id);
    if (typeof data.file === "string") {
      await updateDoc(washingtonRef, {
        product_name: data.product_name,
        category: data.category,
        company_name: data.company_name,
        price: data.price,
        model_no: data.model_no,
        description: data.description,
        url: data.url
      });

      dispatch({ type: ActionTypes.UPDATE_PRODUCT, payload: data });
    } else {

      const productRefdel = ref(storage, 'product/' + data.fileName);

      deleteObject(productRefdel).then(async () => {
        let rendomStr = Math.floor(Math.random() * 1000000).toString();
        const productRef = ref(storage, 'product/' + rendomStr);

        uploadBytes(productRef, data.file)
          .then((snapshot) => {
            getDownloadURL(snapshot.ref)
              .then(async (url) => {
                // console.log("Document written with ID: ", docRef.id);
                await updateDoc(washingtonRef, {
                  product_name: data.product_name,
                  category: data.category,
                  company_name: data.company_name,
                  price: data.price,
                  model_no: data.model_no,
                  description: data.description,
                  url: url,
                  fileName: rendomStr
                });
                dispatch({ type: ActionTypes.UPDATE_PRODUCT, payload: { ...data, fileName: rendomStr, url: url, } })
              })
          }
          )
      })
    }
  } catch (error) {
    dispatch(errordoctor(error.message));
  }
}




//delete product----------------------------------------------------
export const deleteproduct = (data) => async (dispatch) => {
  // dispatch(loadingproduct())
  try {
    const desertRef = ref(storage, 'product/' + data.fileName);
    deleteObject(desertRef).then(async () => {
      dispatch(loadingproduct())
      await deleteDoc(doc(db, "product", data.id));
      dispatch({ type: ActionTypes.DELETE_PRODUCT, payload: data.id });
    }).catch((error) => {
      dispatch(errordoctor(error.message))
    });
  }
  catch (error) {
    dispatch(errordoctor(error.message))
  }
}



export const singleproductdata = (data,id) => async (dispatch) => {
  console.log('id', data)
  // dispatch(loadingproduct());
  try {
    let data1 = [];
    const docRef = doc(db, "product",`${id}`);
    const docSnap = await getDoc(docRef);
    console.log("qqqqqqqqqqqqqqqqqqqq",docRef,docSnap);
    
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      data1.push(docSnap.data());
      console.log('res data', data1)
    } 
    dispatch({ type: ActionTypes.GET_SINGLE_PRODUCT, payload: data });
  } catch (error) {
    // console.log(error);
  }
};







// export const singleproductdata = (data) => async (dispatch) => {
//   console.log('id', data)
//   // dispatch(loadingproduct());
//   try {
//     let data1 = [];
//     const docRef = doc(db, "product", data);
//     const docSnap = await getDoc(docRef);
//     console.log("qqqqqqqqqqqqqqqqqqqq",docRef,docSnap);
    
//     if (docSnap.exists()) {
//       console.log("Document data:", docSnap.data());
//       data1.push(docSnap.data());
//       console.log('res data', data1)
//     } else {
//       // doc.data() will be undefined in this case
//       console.log("No such document!");
//     }
//     dispatch({ type: ActionTypes.GET_SINGLE_PRODUCT, payload: data });
//   } catch (error) {
//     // console.log(error);
//   }
// };





export const loadingproduct = () => (dispatch) => {
  dispatch({ type: ActionTypes.LOADING_PRODUCT });
};

export const errordoctor = (error) => (dispatch) => {
  dispatch({ type: ActionTypes.ERROE_PRODUCT, payload: error });
};
