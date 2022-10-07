import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga } from './auth';
import loading from './loading';
import user, { userSaga } from './user';
import write, { writeSaga } from './write';
import post, { postSaga } from './post';
import posts, { postsSaga } from './posts';
import productWrite, { productwriteSaga } from './productwrite';
import products, { ProductsSaga } from './products';
import product, { productSaga } from './product';
import cart, { CartSaga } from './cart';

const rootReducer = combineReducers({
    auth,
    loading,
    user,
    write,
    post,
    posts,
    productWrite,
    products,
    product,
    cart,
});

export function* rootSaga() {
    yield all([authSaga(), userSaga(), writeSaga(), postSaga(),postsSaga(),
         productwriteSaga(), ProductsSaga(), productSaga(), CartSaga()]);
}

export default rootReducer;