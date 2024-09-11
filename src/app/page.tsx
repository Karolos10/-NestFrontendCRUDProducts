import Link from 'next/link'
import React from 'react'
import { buttonVariants } from '@/components/ui/button';

export default function page() {
  return (
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
  )
}
