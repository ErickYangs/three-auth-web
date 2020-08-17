import React from "react";
import { Switch } from "react-router-dom";
import FrontendAuth from '../FrontendAuth/index'
import { routerConfig } from '../../router'

type Props = {
    ont?: string
}
const Layout: React.FC<Props> = ({ ont }) => {
    return (
        <Switch>
            <FrontendAuth config={routerConfig}></FrontendAuth>
        </Switch>
    )
}

export default Layout