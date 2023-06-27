import { defineStore } from 'pinia'
import { getAllTodos } from '@/services/api/ApiService'
import type { ITodo } from "@/services/api/types";

export const useTodoStore = defineStore('todo', {
  state: () => {
    return {
      todos: [] as ITodo[]
    }
  },
  actions: {
    async getTodos(limit: number, skip: number): Promise<void> {
      const { todos } = await getAllTodos(limit, skip).then((res) => res.data)
      this.todos = todos
    }
  }
})
