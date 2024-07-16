export function getOldPrice(price: number, discountPercentage: number): number {
    return (100 * price) / (100 - discountPercentage)
}
