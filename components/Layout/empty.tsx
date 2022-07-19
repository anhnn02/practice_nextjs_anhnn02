import React from 'react'
import { LayoutProps } from '../models/layout'

const EmptyLayout = ({ children }: LayoutProps) => {
  return (
    <div className="">
      {children}
    </div>
  )
}

export default EmptyLayout