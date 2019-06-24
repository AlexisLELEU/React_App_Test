import {REDUCER_CASE} from '../constant'

const initialValue = {
  isEdit: false,
  editPost: {},
  showPost: []
}

export default function reducerPost (state = initialValue, action = null) {
  switch (action.type){
    case REDUCER_CASE.fetchPost :
      const { payload } = action;
      return {
        ...state,
        showPost: payload
      }
    case REDUCER_CASE.deletePost: 
      const { id } = action 
      const data = state.showPost
      const filterdata = data.filter((post) => {  
        if(post.id == id){
            return false
        }
        return true
      })
      return {
        ...state,
        showPost: filterdata
      }
    case REDUCER_CASE.addPost:
      const { newPayload } = action
      const newState = [...state.showPost, newPayload];
      return {
        ...state,
        showPost: newState
      }
    case REDUCER_CASE.editeState: {
      const { payload } = action;
      return {
        ...state,
        isEdit: true,
        editPost: payload

      }
    }
    case REDUCER_CASE.clearEditState: {
      return {
        ...state,
        isEdit: false,
        editPost: {}
      }
    }
    case REDUCER_CASE.updateListPost: {
      const { payload } = action;
      const filterEditList = state.showPost.filter(item => item.id !== payload.id)

      return {
        ...state,
        showPost: [...filterEditList, payload]
      }
    }
  }
  return state
}