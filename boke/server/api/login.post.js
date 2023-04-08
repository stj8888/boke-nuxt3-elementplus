import dbconfig from '../util/index'
import JWT from '../util/jwt'
export default defineEventHandler(async(event)=>{
    const body=await readBody(event)
    var sql=`select * from manager where user='${body.user}' and password=${Number(body.password)}`
    var sqlarr=[]
   const list=await dbconfig.sqlConnet(sql,sqlarr)
   if(list.length!==0){
     //生成token
     const token=JWT.Sin({
        user:list.user
     },'10s')
        // setHeader(token)
        // getHeader(event,'Authorization')
        setResponseHeader(event,'Authorization',token),
        setResponseStatus(event, 200)
        return{
            message:'操作成功！',
            ok:true,
            token
        }
   }else{
   setResponseStatus(event, 404)
   return {
   message:'操作失败！',
   ok:false,
   status:404
   }
   }
})