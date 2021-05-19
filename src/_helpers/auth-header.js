export function authHeader() {
    // return authorization header with jwt token
    let user = JSON.parse(localStorage.getItem('user'))
    let token = JSON.parse(localStorage.getItem('access_token'))
    if (token) {
        return 'Bearer ' + token;
    } else {
        return '';
    }
}