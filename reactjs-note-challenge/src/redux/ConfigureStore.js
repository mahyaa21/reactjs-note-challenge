// import { createStore, applyMiddleware, combineReducers, compose } from "redux";
// import createSagaMiddleware from "redux-saga";

// import createRootReducer from "./Reducers";

// import RootSaga from "./Sagas";

// const sagaMiddleware = createSagaMiddleware();

// export default function configureStore(preloadedState = {}) {
//   const enhancers = [];

//   const isDevelopment = process.env.NODE_ENV === "development";

//   if (typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION__) {
//     enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__());
//   }

//   const store = createStore(
//     createRootReducer(),
//     preloadedState,
//     compose(applyMiddleware(sagaMiddleware), ...enhancers)
//   );

//   sagaMiddleware.run(RootSaga);

//   return store;
// }
