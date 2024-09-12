export async function getProducts() {
    const res = await fetch('http://localhost:4000/api/products', {
        cache: "no-store",
    })
    const data = await res.json()
    return data
}

export async function getProduct(id: string) {
    const res = await fetch(`http://localhost:4000/api/products/${id}`, {
        cache: "no-store",
    })
    const data = await res.json()
    return data
}


export async function createProduct(productData: any) {
    const res = await fetch('http://localhost:4000/api/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(productData),
    })
    const data = await res.json()
    console.log(data)
}

export async function deleteProduct(id: string) {
    const res = await fetch(`http://localhost:4000/api/products/${id}`, {
        method: 'DELETE',
    })
    const data = await res.json()
    console.log(data)
}

export async function updateProduct(id: string, productData: any) {
    const res = await fetch(`http://localhost:4000/api/products/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(productData),
        cache: "no-store",
    })
    const data = await res.json()
    return data
}