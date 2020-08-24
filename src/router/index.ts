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
    icon?: any
}

export const routerConfig: routerConfigModel[] = [
    {
        path: '/',
        name: 'Home',
        icon: HomeOutlined
    },
    {
        path: '/market',
        name: 'Market',
        icon: ShopOutlined
    },
    {
        path: '/setting',
        name: 'Setting',
        icon: SettingFilled
    },
]
//