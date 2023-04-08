import mysql2 from 'mysql2'
export default{
 config : {
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: '123456',
    database: 'boke',
},
async sqlConnet(sql, sqlarr, callback) {
    const promisePool =mysql2.createPool(this.config).promise()
    var list=await promisePool.query(sql,sqlarr)
    return list[0]
    // promisePool.getConnection(async(err, conn) => {
    //     conn.query(sql, sqlarr, callback)
    //     conn.release()
    // })
}}