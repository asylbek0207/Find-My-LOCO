import store from "./store";

let nextTodoId = store.getState().locos.length;

export const addNewLoco = (locoInfo) => {
    store.dispatch({
        type: 'ADD_LOCO',
        locoInfo: {
            id: ++nextTodoId,
            ...locoInfo
        }
    })
}

export const editLoco = (locoInfo) => {
    store.dispatch({
        type: 'EDIT_LOCO',
        locoInfo
    })
}

export const setCurrentLoco = (id) => {
    store.dispatch({type: 'SET_CURRENT_LOCO', id})
}

export const removeLoco = (id) => {
    store.dispatch({type: 'REMOVE_LOCO', id})
}

export const setLoading = (isLoading) => {
    store.dispatch({
        type: 'SET_LOADING',
        loading: isLoading
    })
}

export const getLocos = () => store.getState().locos