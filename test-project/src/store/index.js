import { createStore } from "vuex"
import createPersistedState from 'vuex-persistedstate'
// import SecureLS from "secure-ls"
// const ls  = new SecureLS({isCompression: false})
import * as Cookies from 'js-cookie'
import { Date } from "core-js"

const store = createStore({
    state: {
        isCodeRequested: false
    },
    getters: {},
    mutations: {
        changeCodeRequestStatus: (state, value) => state.isCodeRequested = value
    },
    actions: {},

    plugins: [
        createPersistedState({
            storage: {
                // getItem: key => ls.get(key),
                // setItem: (key, value) => ls.set(key, value, {expires: 3, secure: true}),
                // removeItem: key => ls.remove(key)

                getItem: key => Cookies.get(key),
                setItem: (key, value) => Cookies.set(key, value, {expires: new Date(new Date().getTime() + 1 * 60000), secure: false}),
                removeItem: key => Cookies.remove(key)
            }
                // getState: (isCodeRequested) => Cookies.get(isCodeRequested),
                // setState: (isCodeRequested, state) => Cookies.set(isCodeRequested, state, { expires: 3, secure: true })
            
        })
    ]
})

export default store