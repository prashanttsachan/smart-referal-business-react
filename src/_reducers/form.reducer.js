import { formConstants } from '../_constants';

export function form(state = {}, action) {
    switch (action.type) {
        case formConstants.FORM_REQUEST:
            return { submitting: true };
        case formConstants.FORM_SUCCESS:
            return {};
        case formConstants.FORM_FAILURE:
            return {};
        default:
            return state
    }
}