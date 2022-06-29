import { GetStaticProps, GetStaticPropsContext } from 'next'
import Link from 'next/link'
import React from 'react'

type ProductProps = {
  products: any[]
}

const Product = ({products}: ProductProps) => {
  console.log("first", products)
  if(!products) return null
  return (
    <div className="tw-bg-green-500">
      {products.map((item) => <div key={item.id}><Link href={`/product/${item.id}`}>{item.name}</Link></div>)}
    </div>
  )
}

export const getStaticProps: GetStaticProps<ProductProps> = async (context: GetStaticPropsContext) => {
  const data = await (await fetch("http://localhost:3001/products")).json()
  console.log(data)
  if(!data) return {
    notFound: true
  }
  return {
    props: {
      products: data
    }
  }
}

export default Product