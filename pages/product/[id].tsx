import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import React from 'react'

type ProductProps = {
  product: any
}
const ProductDetail = ({ product }: ProductProps) => {
  if (!product) return null
  return (
    // de product la bi loi
    <div>ProductDetail: {product.name}</div>
  )
}

// get params from api
export const getStaticPaths: GetStaticPaths = async () => {
  const data = await (await fetch(`http://localhost:3001/products`)).json();
  const paths = data.map((item: { id: string }) => {
    return { params: { id: String(item.id) } }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<ProductProps> = async (context: GetStaticPropsContext) => {
  const data = await (await fetch(`http://localhost:3001/products/` + context.params?.id)).json()
  if(!data) return {
    notFound: true
  }
  return {
    props: {
      product: data
    }
  }
}

//call api
export default ProductDetail