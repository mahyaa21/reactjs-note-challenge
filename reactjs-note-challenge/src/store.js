import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './redux/Sagas';
import rootReducer from './redux/Reducers';
const initialState = {

}

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)

export default store;