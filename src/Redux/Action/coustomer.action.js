import * as ActionTypes from "../ActionType";
import {
  collection,
  addDoc,
  getDocs,

} from "firebase/firestore";
import { db } from "../../firebase";

export const coustomerdata = (data) => async (dispatch) => {
  dispatch(loadingcoustomer())
  try {
    let data = [];
    const getref = await getDocs(collection(db, "coustomer"));
    getref.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });
    dispatch({ type: ActionTypes.GET_COUSTOMER, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const postcoustomer = (data) => async (dispatch) => {
  // dispatch(loadingcoustomer())
  console.log(data);
  try {
    const docRef = await addDoc(collection(db, "coustomer"), data);
    dispatch({
      type: ActionTypes.POST_COUSTOMER,
      payload: { id: docRef.id, ...data },
    });
  } catch (error) {
    console.log(error);
    dispatch(errorcoustomer(error.message));
  }
};



export const loadingcoustomer = () => (dispatch) => {
  dispatch({ type: ActionTypes.LOADING_COUSTOMER})
}

export const errorcoustomer = (error) => (dispatch) => {
  dispatch({ type: ActionTypes.ERROE_COUSTOMER, payload: error })
} 