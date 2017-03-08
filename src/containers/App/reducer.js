import {handleActions} from 'redux-actions';
import {actionNames} from './action';

const initialState = {
  number:1,
};

const appReaducer = handleActions({
  [actionNames.ADD_ONE]: (state, action) =>{
    const info = action.payload;
    return Object.assign({}, state, {
      number:info
    })
  }

}, initialState);

export default appReaducer;
