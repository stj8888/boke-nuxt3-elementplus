import multer from 'multer'
import { callNodeListener } from 'h3'
import dbconfig from '../util/index'
export default defineEventHandler(async (event) => {
  // const budy=await readBody(event)
  try {
    const upload = multer({ dest: 'public/image1/' })
    await callNodeListener(upload.single('file'), event.node.req, event.node.res)
    const { title, text, editTime, id } =await event.req.body
    const text1=await text.replace(/'/g,'"')
    //等会要判断有没有filename
    if (!id) {
      const avatar = `/image1/${event.req.file.filename}`
      var sql = `insert into uploadtext (title,text,avatar,editTime) values ('${title}','${text1}','${avatar}','${editTime}')`
    } else {
      if (event.req.file) {
        const avatar = `/image1/${event.req.file.filename}`
        var sql = `update uploadtext set title='${title}',text='${text1}',avatar='${avatar}',editTime='${editTime}' where id=${Number(id)}`
      } else {
        var sql = `update uploadtext set title='${title}',text='${text1}',editTime='${editTime}' where id=${Number(id)}`
      }
    }
    dbconfig.sqlConnet(sql)
    return { success: true }
  } catch (e) {
    return createError({
      message: e.message,
      statusCode: 422,
      statusMessage: 'Unprocessable Entity'
    })
  }
})