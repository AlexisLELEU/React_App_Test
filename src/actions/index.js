import { API_URL, LIMIT, METHODS, REDUCER_CASE } from '../constant';

export const fetchPost = (data) => {
  return {
    type: REDUCER_CASE.fetchPost,
    payload: data
  }
}

export const getPost = () => {
  return (dispatch) => {
    fetch(`${API_URL}/posts${LIMIT}`)
      .then(response => response.json())
      .then(json => dispatch(fetchPost(json)))
  }
}

export const deletePost = (id) => {
  return (dispatch) => {
      fetch(`${API_URL}/posts/${id}` , {
        method: METHODS.delete
      }).then(
        dispatch({
          type: REDUCER_CASE.deletePost,
          id: id
      })
    )
  }
}

export const setPost = (data) => {
  return {
    type: REDUCER_CASE.addPost,
    newPayload: data
  }
}

export const addPost = (data) => {
  return (dispatch, getState) => {
    const id = getState().dataPost.showPost.length + 1
    const newData = {...data, id}
    fetch(`${API_URL}/posts`, {
      method: METHODS.post,
      body: newData
    })
      .then(response => response.json())
      .then(() => dispatch(setPost(newData)))
  }
}

export const updatePost = (data) => {
  return (dispatch) => {
    fetch(`${API_URL}/posts/${data.id}`, {
      method: METHODS.put,
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(() => dispatch(updateListPost(data)))
  }
}

export const setIsEdit = (data) => {
  return {
    type: REDUCER_CASE.editeState,
    payload: data
  }
}

export const setClearIsEdit = () => {
  return {
    type: REDUCER_CASE.clearEditState
  }
}

export const updateListPost = (data) => {
  return {
    type: REDUCER_CASE.updateListPost,
    payload: data
  };
};