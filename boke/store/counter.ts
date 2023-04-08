import { defineStore } from 'pinia'
 
interface CounterState {
  times: number
  name: string
}
 
export const useCounter = defineStore('counter', {
  state: (): CounterState => ({
    times: 5,
    name: 'jjww'
  }),
 
  actions: {
    increment() {
      this.times++
    }
  },
 
  persist: process.client && {
    storage: localStorage,
    paths: ['times']
  }
})