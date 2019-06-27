import { getNews, searchNews} from '../../services/newsApi'
import { call, takeEvery } from 'redux-saga/effects'
import { SagaActionNews } from '../../actions-type/news-action-type'

function* getNewsData(action){
  try{
    let data = yield call(getNews )
  }catch(err){

  }
}

export function* watchNews(){
  yield takeEvery(SagaActionNews, getNewsData)
}