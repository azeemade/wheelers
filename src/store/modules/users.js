let email = JSON.parse(localStorage.getItem('email'));
const state = () => ({
    email: email ? email : null
})

const mutations = {
    setEmail(state, payload) {
        localStorage.setItem('email', JSON.stringify(payload.email));
        state.email = payload.email
    },
}


export default {
    namespaced: true,
    state,
    mutations
}