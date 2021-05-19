import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';
import { changeState } from './changeState';
import { form } from './form.reducer';

const rootReducer = combineReducers({
    authentication,
    registration,
    users,
    alert,
    changeState,
    form
});

export default rootReducer;