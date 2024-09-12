import Link from 'next/link'
import React from 'react'
import { Button, buttonVariants } from '@/components/ui/button';
import { getProducts } from './products/products.api'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const dynamic = "force-dynamic"

async function page() {

  const products = await getProducts();
  console.log(products)

  return (
    <>
      <div className='flex justify-between'>
      <h1 className='text-4xl font-bold'>
        NextNestApp
      </h1>
      <Link
        href="/products/new"
        className={buttonVariants()}>
        Create Product
      </Link>
      </div>
      
      <div className='grid grid-cols-4 gap-3'>
        {products.map((product:any) => (
          <Card>
            <CardHeader>
              <CardTitle className='flex justify-between'>
                {product.name}
                <span className='text-sm font-bold text-gray-500'>
                  ${product.price}
                </span>
              </CardTitle>
            </CardHeader>
            <img src={product.image} alt="" />
            <CardContent>
              <p>{product.description}</p>
              <Button className='mt-5'>Comprar</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  )
}

export default page
