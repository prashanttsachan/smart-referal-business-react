import { formConstants } from '../_constants';
import { userService } from '../_services';
import { alertActions } from './';

export const userActions = {
    changePassword,
};

function changePassword(currentPassword, newPassword) {
    return dispatch => {
        dispatch(request(currentPassword));
        userService.changePassword(currentPassword, newPassword)
            .then(
                user => {
                    dispatch(success(user.message))
                    dispatch(alertActions.success(user.message));
                },
                error => {
                    dispatch(failure(error.toString()))
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(message) { return { type: formConstants.FORM_REQUEST, message } }
    function success(message) { return { type: formConstants.FORM_SUCCESS, message } }
    function failure(error) { return { type: formConstants.FORM_FAILURE, error } }
}
