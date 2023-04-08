import JWT from '../util/jwt';
import dbconfig from '../util/index'
export default defineEventHandler(async(Event)=>{
const token= getHeaders(Event,'authorization').authorization
const i = getQuery(Event)
    var sql=`delete from guestbook where id=${i.id}`
    const list =await dbconfig.sqlConnet(sql)
    return {
        sucess:'ok'
    }
})