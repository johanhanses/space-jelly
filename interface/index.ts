export interface IProduct {
  id: string
  title: string
  description: string
  image: string
  price: number
}

export interface IProducts {
  products: IProduct[]
}
