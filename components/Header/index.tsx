import Link from 'next/link'
import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
    <div>
        <ul>
        <li><Link href="/"><a className="tw-text-red-500">Home</a></Link></li>
            <li><Link href="/blog/detail">Blog</Link></li>
            <li><Link href="/product">Product</Link></li>
        </ul>
    </div>
  )
}

export default Header