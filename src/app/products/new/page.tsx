import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Productform } from './product-form';

function ProductsNewPages() {
  return (
    <div className='h-screen flex justify-center items-center'>
      <Card>
        <CardHeader>
          <CardTitle>
           Create Product
        </CardTitle>
        </CardHeader>
      <CardContent>
        <Productform />
      </CardContent>
    </Card>
    </div>
  )
}

export default ProductsNewPages