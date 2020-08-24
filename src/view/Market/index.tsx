import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from 'antd'

import styles from './Market.module.scss'
const MarketLay: React.FC = () => {
  return (
    <div>
      <Button type="primary">
        <Link className={styles.item} to="/market/product">
          click to product
        </Link>
      </Button>
      <br />
      <Button>
        <Link className={styles.item} to="/market/detail">
          click to detail
        </Link>
      </Button>
    </div>
  )
}

export default MarketLay
