import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {getProduct} from '../products.api'
import { Product } from '../../../../../backend/src/products/entities/product.entity';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link'

interface Props {
  params: {
    id: string
  }
}

export default async function ProductDetailPage({ params }: Props) {
  //console.log(params)
  const product = await getProduct(params.id)
  console.log(product)
  return (
    <div className='flex justify-center items-center h-screen'>
      <Card>
        <CardHeader>
          <CardTitle className='flex justify-between'>
            Product Detail: {product.id}
            <Link className={buttonVariants()}
              href='/'>
              Go Back
            </Link>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <h1>{product.name}</h1>
          <p>{ product.description}</p>
          <p>{product.price}</p>
          <img src={ product.image} alt='product' className='w-full h-64 object-cover'/>
        </CardContent>
      </Card>
    </div>
  )
}
