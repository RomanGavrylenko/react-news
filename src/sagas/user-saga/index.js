import {  put, take, takeEvery, all, call, fork, takeLatest } from 'redux-saga/effects' 
import { getUser } from '../../services/profileApi'
import {
  beginUserLoadAction
} from '../../actions-type/user-action-types'

function* getUserdata(action){
  try {
    console.log('data before')
      
    let { user } = yield call(getUser);
    console.log(user)
    yield put({ type: "FETCH_SUCCESS_USER", payload:user })
  } catch (e) {
    yield put({ type: "FETCH_ERROR_USER", e})
  }
}


export function* userSaga(){
  yield takeEvery("FETCH_LOADING_USER", getUserdata)
} 