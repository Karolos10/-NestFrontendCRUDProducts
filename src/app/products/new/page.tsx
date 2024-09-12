import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Productform } from './product-form';
import { getProduct } from '../products.api';

interface Props {
  params: {
    id: string
  }
}

async function ProductsNewPages({ params }: Props) {
  const product = await getProduct(params.id);
  return (
    <div className='h-screen flex justify-center items-center'>
      <Card>
        <CardHeader>
          <CardTitle>
            {
              params.id ? 'Edit Product' : 'Create Product'
            }
        </CardTitle>
        </CardHeader>
      <CardContent>
          <Productform product={ product} />
      </CardContent>
    </Card>
    </div>
  )
}

export default ProductsNewPages