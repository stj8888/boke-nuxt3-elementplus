import JWT from '../util/jwt';
import dbconfig from '../util/index'
export default defineEventHandler(async(Event)=>{
  const token= getHeaders(Event,'authorization').authorization
 const i = getQuery(Event)
    //数据库分页是从0开始
    // var sql=`select * from uploadtext LIMIT ${(Number(i.id)*3-3)},${3}`
    var sql=`select * from uploadtext where id=${i.id}`
    const list =await dbconfig.sqlConnet(sql)
    return list
})