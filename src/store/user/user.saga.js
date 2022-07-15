import {takeLatest, put, all, call} from "redux-saga/effects";
import {USER_ACTION_TYPES} from "./user.types";
import {createUserDocumentFromAuth, getCurrentUser} from "../../utils/firebase/firebase.utils";
import {signInFailed, signInSuccess} from "./user.action";


export function* getSnapshotFromUserAuth(userAuth, additionalData) {
    try {
        const userSnapshot = yield call(createUserDocumentFromAuth, userAuth, additionalData);
        yield put(signInSuccess({id: userSnapshot.id, ...userSnapshot.data()}));
    } catch (error) {
        yield put(signInFailed(error));
    }
}

export function* isUserAuthenticated() {
    try {
        const userAuth = yield call(getCurrentUser);
        if (!userAuth) return;
        yield call(getSnapshotFromUserAuth, userAuth);
    } catch (error) {
        yield put(signInFailed(error));
    }
}

export function* onCheckUserSession() {
    yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* userSagas() {
    yield all([onCheckUserSession()]);
}