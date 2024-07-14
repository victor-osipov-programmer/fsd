import { http } from '@/shared/api'

export async function fetchProducts() {
    return (await http.get('/products')).data.products
}
