import dbconfig from '../util/index'
export default defineEventHandler(async(event)=>{
    const body=await readBody(event)
    const {name,contact,message,list}=body
     var sql=`insert into guestbook (name,contact,message,list) values ('${name}','${contact}','${message}','${list}') `
 await dbconfig.sqlConnet(sql)
 return {
    success:'ok'
 }
})