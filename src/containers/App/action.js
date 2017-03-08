import {createAction} from 'redux-actions';



export const actionNames = {
  ADD_ONE : 'ADD_ONE', // 内容+1
}

export const numberAddOne = createAction(actionNames.ADD_ONE);



