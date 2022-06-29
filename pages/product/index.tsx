import { GetStaticProps, GetStaticPropsContext } from 'next'
import React from 'react'

type ProductProps = {
  products: any[]
}

const Product = ({products}: ProductProps) => {
  console.log("Client");
  console.log("first", products)
  if(!products) return null
  return (
    <div className="tw-bg-green-500">
      {products.map((item) => <span key={item.id}>{item.name}</span>)}
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