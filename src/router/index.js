import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
/* import store from '../store' */

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/admin',
        name: 'Admin',
        component: () =>
            import ('../views/Admin.vue'),
        meta: {
            requiresGuest: true
        }
    },
    {
        path: '/all-department',
        name: 'allDepartment',
        component: () =>
            import ('../views/Alldepartment.vue'),
        meta: {
            requiresGuest: true
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: () =>
            import ('../views/Signin.vue'),
        meta: {
            requiresGuest: true
        }
    },
    {
        path: '/department',
        name: 'Department',
        component: () =>
            import ('../views/Department.vue')
    },
    {
        path: '/all-notification',
        name: 'Allnotification',
        component: () =>
            import ('../views/Allnotifi.vue')
    },
    {
        path: '/all-department/language-center',
        name: 'FE',
        component: () =>
            import ('../views/TDTCenterE.vue')
    },
    {
        path: '/all-department/cthhsv',
        name: 'CTHHSV',
        component: () =>
            import ('../views/Cthssv.vue')
    },
    {
        path: '/all-department/sdh',
        name: 'SDH',
        component: () =>
            import ('../views/SDH.vue')
    },
    {
        path: '/all-department/kdcl',
        name: 'KDCL',
        component: () =>
            import ('../views/KDCL.vue')
    },
    {
        path: '/all-department/sdtc',
        name: 'SDTC',
        component: () =>
            import ('../views/SDTC.vue')
    },
    {
        path: '/all-department/kl',
        name: 'KL',
        component: () =>
            import ('../views/KL.vue')
    },
    {
        path: '/all-department/mtcn',
        name: 'MTCN',
        component: () =>
            import ('../views/MTCN.vue')
    },
    {
        path: '/all-department/cntt',
        name: 'IT',
        component: () =>
            import ('../views/CNTT.vue')
    },
    {
        path: '/all-department/mtld',
        name: 'MTLD',
        component: () =>
            import ('../views/MTLD.vue')
    },
    {
        path: '/all-department/tcnh',
        name: 'TCNH',
        component: () =>
            import ('../views/TCNH.vue')
    },
    {
        path: '/all-department/pdh',
        name: 'PDH',
        component: () =>
            import ('../views/PDH.vue')
    },
    {
        path: '/all-department/dtmt',
        name: 'DTMT',
        component: () =>
            import ('../views/DTMT.vue')
    },
    {
        path: '/all-department/pth',
        name: 'PTH',
        component: () =>
            import ('../views/PTH.vue')
    },
    {
        path: '/all-department/ttth',
        name: 'TTTH',
        component: () =>
            import ('../views/TTTH.vue')
    },
    {
        path: '/all-department/atem',
        name: 'ATEM',
        component: () =>
            import ('../views/ATEM.vue')
    },
    {
        path: '/all-department/nnthbdvh',
        name: 'NNTHBDVH',
        component: () =>
            import ('../views/NNTHBDVH.vue')
    },
    {
        path: '/all-department/gdqt',
        name: 'GDQT',
        component: () =>
            import ('../views/GDQT.vue')
    },
    {
        path: '/all-department/ddt',
        name: 'DDT',
        component: () =>
            import ('../views/DDT.vue')
    },
    {
        path: '/all-department/qtkd',
        name: 'QTKD',
        component: () =>
            import ('../views/QTKD.vue')
    },
    {
        path: '/all-department/ldcd',
        name: 'LDCD',
        component: () =>
            import ('../views/LDCD.vue')
    },
    {
        path: '/all-notification/edit/:id',
        name: 'Edit',
        component: () =>
            import ('../views/Edits.vue')
    },
    {
        path: '/all-notification/details/:id',
        name: 'Detail',
        component: () =>
            import ('../views/Detail.vue')
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

/* router.beforeEach((to, record, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!store.getters.isLoggedIn) {
            next('/login')
        } else {
            next()
        }
    } else if (to.matched.some(record => record.meta.requiresGuest)) {
        if (store.getters.isLoggedIn) {
            next('/')
        } else {
            next()
        }
    } else {
        next()
    }
}) */

export default router