import { combineReducers } from 'redux';

import auth from './auth/reducer';
import cart from './cart/reducer';

export default combineReducers({
    cart,
    auth,
});