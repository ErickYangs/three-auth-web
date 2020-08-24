import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Routes from '../../type/routes'
import styles from './layout.module.scss'

import NavLay from '../../compoments/Nav/index'
import HomeLay from '../HomeLay/index'

import ErrorPage from '../ErrorPage/index'
import MarketLay from '../Market/index'
import Product from '../Market/Product/index'

type Props = {
  ont?: string
}
const Layout: React.FC<Props> = ({ ont }) => {
  return (
    <div className={styles.homeLayout}>
      <div className={styles.leftNavLay}>
        <NavLay></NavLay>
      </div>
      <div className={styles.rightContentLay}>
        <Switch>
          <Route
            path={Routes.Home}
            component={HomeLay}
            key={Routes.Home}
            exact
          ></Route>
          <Route
            exact
            path={Routes.Market}
            component={MarketLay}
            key={Routes.Market}
          ></Route>
          <Route
            exact
            path={Routes.MarketProduct}
            component={Product}
            key={Routes.MarketProduct}
          ></Route>
          <Route
            path={Routes.Setting}
            component={ErrorPage}
            key={Routes.Setting}
            exact
          ></Route>
          {/* MarketProduct */}
          <Redirect from="/" to={Routes.Home} />
        </Switch>
      </div>
    </div>
  )
}

export default Layout
