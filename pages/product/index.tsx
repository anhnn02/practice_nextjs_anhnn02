import { GetStaticProps, GetStaticPropsContext } from 'next'
import Link from 'next/link'
import React from 'react'
import useSWR from 'swr'
import useProducts from '../../hooks/use-product'

type ProductProps = {
  products: any[]
}

const Product = () => {
  const { data: products, error, create, remove } = useProducts()
  if (error) return <div className="">Fail to load</div>
  if (!products) return <div className="">Loading...</div>
  return (
    <div>
      <div className="tw-bg-green-500">
        {products.map((item: { id: number, name: string }) => <div key={item.id}><Link href={`/product/${item.id}`}>{item.name}</Link></div>)}
      </div>
      <button onClick={() => create({ id: 10, name: "Product 10" })}>Create</button>
    </div>
  )
}

// export const getStaticProps: GetStaticProps<ProductProps> = async (context: GetStaticPropsContext) => {
//   const data = await (await fetch("http://localhost:3001/products")).json()
//   if(!data) return {
//     notFound: true
//   }
//   return {
//     props: {
//       products: data
//     }
//   }
// }

export default Product