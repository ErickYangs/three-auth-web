import React from 'react'
import { routerConfig } from '../../router/index'
import { Link, useLocation, useHistory } from 'react-router-dom'
import styles from './Nav.module.scss'
import { HomeOutlined } from '@ant-design/icons'

const NavLay: React.FC = (props: any) => {
  const { pathname } = useLocation()
  console.log(useLocation())
  console.log(useHistory())
  return (
    <ul>
      {routerConfig.map((item) => (
        <li key={item.name}>
          <Link
            key={item.name}
            to={item.path}
            className={`${styles.itemLink} ${
              pathname === item.path ? styles.active : ''
            }`}
          >
            <HomeOutlined />
            <span>{item.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default NavLay
