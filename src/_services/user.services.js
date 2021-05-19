import config from '../_config';
import { authHeader } from '../_helpers';
import { authService } from './';

export const userService = {
    changePassword,
};

// prefixed function name with underscore because delete is a reserved word in javascript
function changePassword(currentPassword, newPassword) {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': authHeader()
        },
        body: JSON.stringify({
            password: currentPassword,
            newPassword
        })
    };
    return fetch(`${config.apiUrl}/user/change-password`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (response.status === 401) {
            // auto logout if 401 response returned from api
            authService.logout();
            window.location.reload()
        }
        return data;
    });
}