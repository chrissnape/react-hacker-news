import { combineReducers, createStore } from 'redux'
import posts from './reducers'

const rootReducer = combineReducers({
  posts,
});

export type AppState = ReturnType<typeof rootReducer>;

export default createStore(rootReducer);
