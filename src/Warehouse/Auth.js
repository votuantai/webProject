import axios from "axios"
/* import router from "../../../server/routes/api/users" */
import router from '../router/index'

const HOST = 'https://web-project-nhom13.herokuapp.com';

const state = {
    token: localStorage.getItem('token') || '',
    userObj: localStorage.getItem('userObj') || '',
    user: {},
    Notices: {},
    listStatus: {},
    listEditStatus: {},
    status: ''
}

const getters = {
    /* isLoggedIn: function(state) {
        if (state.token != '') {
            return true
        } else {
            return false
        }
    } */
    isLoggedIn: state => !!state.token,
    authState: state => state.status,
    user: state => state.user,
    Notices: state => state.Notices,
    listStatus: state => state.listStatus,
    listEditStatus: state => state.listEditStatus
}

const actions = {
    //Register Department
    async register({
        commit
    }, userData) {
        commit('register_request')
        let res = await axios.post(`${HOST}api/users/register`, userData)
        if (res.data.success !== undefined) {
            commit('register_success')
        }
        return res
    },

    //Login action
    async login({
        commit
    }, user) {
        commit('auth_success')
        let res = await axios.post(`${HOST}api/users/login`, user)
        if (res.data.success) {
            const userObj = JSON.stringify(res.data)

            localStorage.setItem('userObj', userObj)
            axios.defaults.headers.common['Authorization'] = userObj.token
            commit('auth_success', userObj)
        }
        return res
    },

    async loginGoogle({
        commit
    }, googleUser) {
        commit('auth_loginGoogle')
        let res = await axios.post(`${HOST}api/users/loginGoogle`, googleUser)
        if (res.data.success) {
            const userObj = JSON.stringify(res.data)

            localStorage.setItem('userObj', userObj)
            axios.defaults.headers.common['Authorization'] = userObj.token
            commit('auth_loginGoogle', userObj)
        }
        return res
    },

    //Logout user
    async logout({
        commit
    }) {
        await localStorage.removeItem('userObj')
        await localStorage.removeItem('token')
        commit('logout')
        delete axios.defaults.headers.common['Authorization']
        router.push('/login')
        return
    },

    async createNotices({
        commit
    }, notify) {
        commit('notices_request')
        let res = await axios.post(`${HOST}api/notification/postCreateNotices`, notify)
        if (res.data.success !== undefined) {
            commit('notices_success')
        }
        return res
    },

    async getNotices({
        commit
    }) {
        commit('notices_request')
        let res = await axios.get(`${HOST}api/notification/getCreateNotices`)
        commit('notices_create', res.data.Notices)
        return res
    },

    async deleteNotices({
        commit
    }, id) {
        commit('notices_request')
        let res = await axios.delete(`${HOST}api/notification/deleteNotices/${id}`)
        commit('notices_remove', id)
        return res
    },

    async editNotices({
        commit
    }) {
        commit('notices_request')
        let id = window.location.pathname.split('/')[3]
        let res = await axios.get(`${HOST}api/notification/editNotices/${id}`)
        commit('notices_create', res.data.Notices)
        return res
    },

    async updateNotices({
        commit
    }, Notices) {
        commit('notices_request')
        let id = window.location.pathname.split('/')[3]
        let res = await axios.post(`${HOST}api/notification/updateNotices/${id}`, Notices)
        commit('notices_create', res.data.Notices)
        return res
    },

    async createStatus({
        commit
    }, createPost) {
        commit('listStatus_request')
        let res = await axios.post(`${HOST}api/poststatus/createStatus`, createPost)
        if (res.data.success !== undefined) {
            commit('listStatus_success')
            commit('listStatus_render', res.data.listStatus)
        }
        return res
    },

    async getStatus({
        commit
    }) {
        commit('listStatus_request')
        let res = await axios.get(`${HOST}api/poststatus/getCreateStatus`)
        commit('listStatus_create', res.data.listStatus)
        return res
    },

    async deleteStatus({
        commit
    }, id) {
        commit('listStatus_request')
        let res = await axios.delete(`${HOST}api/poststatus/deleteStatus/${id}`)
        commit('listStatus_remove', id)
        return res
    },

    async editStatus({
        commit
    }, id) {
        commit('listStatus_request')
        let res = await axios.get(`${HOST}api/poststatus/editStatus/${id}`)
        commit('listEditStatus_create', res.data.listEditStatus)
        return res
    },

    async updateStatus({
        commit
    }, listEditStatus) {
        let id = listEditStatus._id
        commit('listStatus_request')
        let res = await axios.post(`${HOST}api/poststatus/updateStatus/${id}`, listEditStatus)
        let src = await axios.get(`${HOST}api/poststatus/getCreateStatus`)
        commit('listStatus_create', res.data.listStatus)
        commit('listStatus_create', src.data.listStatus)
        return src
    },
}

const mutations = {
    auth_request(state) {
        state.status = 'loading'
    },
    auth_loginGoogle(state, userObj) {
        state.userObj = userObj
        state.status = 'success'
    },
    auth_success(state, userObj, user) {
        state.userObj = userObj
        state.user = user
        state.status = 'success'
    },
    logout(state) {
        state.token = ''
        state.status = ''
        state.userObj = ''
        state.user = ''
    },
    register_request(state) {
        state.status = 'loading'
    },
    register_success(state) {
        state.status = 'success'
    },
    notices_request(state) {
        state.status = 'loading'
    },
    notices_success(state) {
        state.status = 'success'
    },
    notices_create(state, Notices) {
        state.Notices = Notices
    },
    notices_remove(state, id) {
        state.Notices = state.Notices.filter((item) => item._id !== id)
    },
    listStatus_request(state) {
        state.status = 'loading'
    },
    listStatus_success(state) {
        state.status = 'success'
    },
    listStatus_create(state, listStatus) {
        state.listStatus = listStatus
    },
    listStatus_render(state, listStatus) {
        state.listStatus = [listStatus, ...state.listStatus]
    },
    listStatus_remove(state, id) {
        state.listStatus = state.listStatus.filter((item) => item._id !== id)
    },
    listEditStatus_create(state, listEditStatus) {
        state.listEditStatus = listEditStatus
    },

}
export default {
    state,
    actions,
    mutations,
    getters
}