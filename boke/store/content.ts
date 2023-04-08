import { defineStore } from "pinia"
export const textcontent=defineStore('content',{
    state : ()=>{
        return {
        list:[]
        }
    },
    actions:{
        store(data:any){
        this.list=data
        }
    },
    persist:process.client&&{
        storage:localStorage,
        paths:['list']
    }
})