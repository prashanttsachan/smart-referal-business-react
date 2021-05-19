import { authConstants } from '../_constants';
import { authService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

export const authActions = {
    login,
    logout,
    register,
    getAll,
    delete: _delete
};

function login(username, password, from) {
    return dispatch => {
        dispatch(request({ username }));
        authService.login(username, password)
            .then(
                user => { 
                    if (user.code === 200) {
                        dispatch(success(user));
                        history.push('/dashboard#/dashboard');
                    } else {
                        dispatch(failure(user.message));
                        dispatch(alertActions.error(user.message));
                    }
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: authConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: authConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: authConstants.LOGIN_FAILURE, error } }
}

function logout() {
    authService.logout();
    return { type: authConstants.LOGOUT };
}

function register(user) {
    return dispatch => {
        dispatch(request(user));
        authService.register(user)
            .then(
                user => { 
                    if (user.code === 201) {
                        dispatch(success());
                        history.push('/dashboard#/login');
                        dispatch(alertActions.success(user.message));
                    }
                    else {
                        dispatch(failure())
                        dispatch(alertActions.error(user.message));
                    }
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: authConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: authConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: authConstants.REGISTER_FAILURE, error } }
}

function getAll() {
    return dispatch => {
        dispatch(request());

        authService.getAll()
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: authConstants.GETALL_REQUEST } }
    function success(users) { return { type: authConstants.GETALL_SUCCESS, users } }
    function failure(error) { return { type: authConstants.GETALL_FAILURE, error } }
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    return dispatch => {
        dispatch(request(id));

        authService.delete(id)
            .then(
                user => dispatch(success(id)),
                error => dispatch(failure(id, error.toString()))
            );
    };

    function request(id) { return { type: authConstants.DELETE_REQUEST, id } }
    function success(id) { return { type: authConstants.DELETE_SUCCESS, id } }
    function failure(id, error) { return { type: authConstants.DELETE_FAILURE, id, error } }
}