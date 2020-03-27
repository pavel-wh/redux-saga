import {CREATE_POST, FETCH_POSTS, SHOW_LOADER, HIDE_LOADER, SHOW_ALERT, HIDE_ALERT} from './types'

export function createPost(post) {
    return {
        type: CREATE_POST,
        payload: post
    }
}

export function fetchPosts() {
    return async dispatch => {
        try {
            dispatch(showLoader())
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const json = await response.json()
            dispatch({
                type: FETCH_POSTS,
                payload: json
            })
            dispatch(hideLoader())
        } catch (error) {
            dispatch(showAlert('Что-то пошло не так, попробуйте снова'))
            dispatch(hideLoader())
        }
    }
}

export function showLoader() {
    return {
        type: SHOW_LOADER
    }
}

export function hideLoader() {
	return {
		type: HIDE_LOADER
	}
}

export function showAlert(message) {
    return dispatch => {
        dispatch({
            type: SHOW_ALERT,
            payload: message
        })

        setTimeout(() => {
            dispatch(hideAlert())
        }, 3000);
    }
}

export function hideAlert() {
	return {
		type: HIDE_ALERT
	}
}