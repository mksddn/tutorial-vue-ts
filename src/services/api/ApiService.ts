import instance from '@/services/api/instance'
import type { getAllProductsResponse, getAllTodosResponse } from './types'

// https://dummyjson.com/docs/products
export const getAllProducts = (): Promise<getAllProductsResponse> => {
  return instance.get('/products')
}

// https://dummyjson.com/docs/todos
export const getAllTodos = (limit: number, skip: number): Promise<getAllTodosResponse> => {
  return instance.get(`/todos?limit=${limit}&skip=${skip}`)
}
