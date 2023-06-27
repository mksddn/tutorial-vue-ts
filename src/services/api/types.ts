export interface IProduct {
  id: number,
  title: string,
  description: string,
  price: number,
  discountPercentage: number,
  rating: number,
  stock: number,
  brand: string,
  category: string,
  thumbnail: string,
  images: string[]
}

export interface ITodo {
  id: number,
  todo: string,
  completed: boolean,
  userId: number
}

export interface getAllProductsResponse {
  data: {
    products: IProduct[],
    total: number,
    skip: number,
    limit: number
  }
  [X: string]: any
}

export interface getAllTodosResponse {
  data: {
    todos: ITodo[],
    total: number,
    skip: number,
    limit: number
  }
  [X: string]: any
}
