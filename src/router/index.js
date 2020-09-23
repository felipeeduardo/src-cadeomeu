import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/public/home'
import HomePrivate from '@/components/pages/private/home'
import CustomerOrder from '@/components/pages/private/customerOrder'
import Carte from '@/components/pages/public/carte'
import Demand from '@/components/pages/public/demand'
import Login from '@/components/pages/public/login'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/",
            name: 'Home',
            component: Home
        },
        {
            path: "/login",
            name: 'Login',
            component: Login
        },
        {
            path: '/:Rid/carte/:Mid',
            name: 'Carte',
            component: Carte
        },
        {
            path: '/:Rid/demand/:Mid',
            name: 'Demand',
            component: Demand
        },
        //routers privates
        {
            path: "/:Rid/home",
            name: 'HomePrivate',
            component: HomePrivate
        },
        {
            path: "/:Rid/customerorder",
            name: 'CustomerOrder',
            component: CustomerOrder
        },
    ]
})