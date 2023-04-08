import dbconfig from '../util/index'
export default defineEventHandler(async(Event)=>{
    var sql=`select * from guestbook`
    const list =await dbconfig.sqlConnet(sql)
    return list
})