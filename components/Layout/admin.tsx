import React from 'react'
import { LayoutProps } from '../../models/layout'

const LayoutAdmin = ({ children }: LayoutProps) => {
    return (
        <div>
            <div className="">Sidebar</div>
            <div className="">
                {children}
            </div>
        </div>
    )
}

export default LayoutAdmin