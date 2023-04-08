// const dbconfig=require('../util/index')
import dbconfig from '../util/index'
const config=dbconfig.config
var sql = `select * from student `
var sqlarr=[]
export default defineEventHandler(async(event) => {
var list= await dbconfig.sqlConnet(sql,sqlarr)
 return list
}
)
