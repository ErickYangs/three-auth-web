/*
 * @Description: Onchain Project
 * @Version: 1.0.0
 * @Author: EricYangc
 */

import {
    HomeOutlined,
    SettingFilled,
    ShopOutlined
} from '@ant-design/icons';

interface routerConfigModel {
    path: string,
    name: string,
    icon?: any,
    state?: Object
}

export const routerConfig: routerConfigModel[] = [
    {
        path: '/',
        name: 'Home',
        icon: HomeOutlined,
        state: {
            currentTab: 'Home'
        }
    },
    {
        path: '/market',
        name: 'Market',
        icon: ShopOutlined,
        state: {
            currentTab: 'Market'
        }
    },
    {
        path: '/setting',
        name: 'Setting',
        icon: SettingFilled,
        state: {
            currentTab: 'Setting'
        }
    },
]
//