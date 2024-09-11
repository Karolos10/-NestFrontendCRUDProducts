import React from 'react'
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

function ProductsNewPages() {
  return (
    <div><Card>
      <CardContent>
        <form>
          <Label>
            Product Name
          </Label>
          <Input/>
          <Label>
            Description
          </Label>
          <Input/>
          <Label>
            Price
          </Label>
          <Input/>
          <Label>
            Image
          </Label>
          <Input />
          <Button>
            Create Product
          </Button>
        </form>
      </CardContent>
    </Card>
    </div>
  )
}

export default ProductsNewPages