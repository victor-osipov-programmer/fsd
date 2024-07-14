import { http } from "@/shared/api";

export async function getProductsCount() {
    return (await http.get('/products')).data.products.length;
}