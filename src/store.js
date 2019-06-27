import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import reducer from './reducers/root-reducer'
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './sagas/index.js'


/*const store = createStore(
                reducer, 
                applyMiddleware(thunk, logger)
                )*/
export default () => {
  const sagaMiddleware = createSagaMiddleware();

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(reducer,  composeEnhancers(applyMiddleware(sagaMiddleware, logger)));


  sagaMiddleware.run(rootSaga);

  return store;

}



//export default store;