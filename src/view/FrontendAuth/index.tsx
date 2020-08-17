import React from 'react';
import { Route, Redirect } from "react-router-dom";

interface propsModel {
    config: any[]
}

export default class FrontendAuth extends React.Component<any, propsModel> {
    render() {
        const { location, config } = this.props
        const token = localStorage.getItem('token')
        console.log(token)
        const { pathname } = location
        const targetRouterConfig = config.find((v: any) => v.path === pathname)
        console.log(targetRouterConfig)

        if (targetRouterConfig && !targetRouterConfig.auth && !token) {
            const { component } = targetRouterConfig
            return <Route exact path={pathname} component={component}></Route>
        }
        if (token) {
            if (targetRouterConfig) {
                return <Route path={pathname} component={targetRouterConfig.component}></Route>
            } else {
                return <Redirect to='/404'></Redirect>
            }
        } else {
            if (targetRouterConfig && targetRouterConfig.auth) {
                return <Redirect to='/login'></Redirect>
            } else {
                return <Redirect to='/404'></Redirect>
            }
        }

    }
}
