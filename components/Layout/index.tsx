import React from 'react'
import { LayoutProps } from '../../models/layout'
import Header from '../Header'

const LayoutAdmin = ({children}: LayoutProps) => {
  return (
    <div>
        <Header />
        <div className="">
            {children}
        </div>
    </div>
  )
}

export default LayoutAdmin