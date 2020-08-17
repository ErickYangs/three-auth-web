import AccountLay from '../view/AccountLay/index'
import HomeLay from '../view/HomeLay/index'
import ErrorPage from '../view/ErrorPage/index'


interface routerConfigModel {
    path: string,
    component?: any,
    auth?: boolean
}

export const routerConfig: routerConfigModel[] = [
    {
        path: '/',
        component: HomeLay,
        auth: true
    },
    {
        path: '/login',
        component: AccountLay,
        auth: false
    },
    {
        path: '/404',
        component: ErrorPage,
        auth: false
    }
]