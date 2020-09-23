module.exports = [
    {
        path: '/login',
        name: 'login',
        component: require('../pages/auth/Login.vue').default,
        meta: {
            title: 'Sig In', // the title name
            auth: false, // set true if need authentication to open this page
        }
    }
]