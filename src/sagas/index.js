import { userSaga } from './user-saga/index'
import { all } from 'redux-saga/effects'
import { watchNews } from './news-saga/index'

export function* rootSaga () {
  yield all [
    userSaga(),
    watchNews()
  ]
}