import { combineReducers } from 'redux';
import reducerPost from './reducer_post'
import { reducer as reducerForm } from 'redux-form'

const rootReducer = combineReducers({
  dataPost : reducerPost,
  form: reducerForm
});

export default rootReducer
