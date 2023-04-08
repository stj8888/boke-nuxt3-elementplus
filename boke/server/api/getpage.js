import dbconfig from '../util/index'
export default defineEventHandler(async(Event)=>{
  const token= getHeaders(Event,'authorization').authorization
 const i = getQuery(Event)
  if(i.id){
    //数据库分页是从0开始
    var sql=`select * from uploadtext LIMIT ${(Number(i.id)*3-3)},${3}`
    var sqlcount='select COUNT(*) id from uploadtext'
    const list =await dbconfig.sqlConnet(sql)
    const count=await dbconfig.sqlConnet(sqlcount)
    return {list,
      count:count[0].id
     }
  }else{
    var sql=`select * from uploadtext`
    const list =await dbconfig.sqlConnet(sql)
    return list
  }

  // return Mock.mock( {
  //   'list|1-10': [{
  //     'id|+1': 1,
  //     'value': Random.title(),
  //     'image' : Random.image('200x100')
  //   }]
  // }) 
})