import firebase from 'firebase';
import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER } from './types';

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = (password) => {
    return {
        type: PASSWORD_CHANGED,
        payload: password
    };
}

export const loginUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({type: LOGIN_USER});
        
        firebase.auth().signInAndRetrieveDataWithEmailAndPassword(email, password)
            .then(user => loginUserSucess(dispatch, user))
            .catch((error) => {
                console.log(error);
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(user => loginUserSucess(dispatch, user))
                    .catch(() => loginUserFail(dispatch));
            });
    };
};

const loginUserFail = (dispatch) => {
    dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSucess = (dispatch, user) => {
    dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
}