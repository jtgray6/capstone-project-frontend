import { userService } from '../services';
import router from '../router';

const user = JSON.parse(localStorage.getItem('user'));
const initialState = user
    ? { status: { loggedIn: true }, user }
    : { status: {}, user: null };

export const authentication = {
    namespaced: true,
    state: initialState,
    actions: {
        signup({dispatch, commit}, {email, username, password}) {
            commit('signupRequest');

            userService.d(email, username, password)
                .then(
                    user => {
                        commit('signupSuccess', user);
                    },
                    error => {
                        commit('signupFailure');
                        dispatch('alert/error', error)
                    }
                )
        },
        login({ dispatch, commit }, { username, password }) {
            commit('loginRequest', { username });

            userService.login(username, password)
                .then(
                    user => {
                        commit('loginSuccess', user);
                        router.push('/home');
                    },
                    error => {
                        commit('loginFailure', error);
                        dispatch('alert/error', error, { root: true });
                    }
                );
        },
        logout({ commit }) {
            userService.logout();
            commit('logout');
        }
    },
    mutations: {
        signupRequest(state) {
            state.status = { signingUp: true };
        },
        signupSuccess(state) {
            state.status = {signedUp: true};
        },
        signupFailure(state) {
            state.status = {}
        },
        loginRequest(state, user) {
            state.status = { loggingIn: true };
            state.user = user;
        },
        loginSuccess(state, user) {
            state.status = { loggedIn: true };
            state.user = user;
        },
        loginFailure(state) {
            state.status = {};
            state.user = null;
        },
        logout(state) {
            state.status = {};
            state.user = null;
        }
    }
}