import { callNodeListener } from 'h3'
import multer from 'multer'
export default defineEventHandler(async(Event)=>{
   const upload=  multer({dest:'public/image2'})
    await callNodeListener(upload.single('wangeditor-uploaded-image'), Event.node.req, Event.node.res)
    return {     
    "errno": 0, // 注意：值是数字，不能是字符串
    "data": {
        "url":`http://localhost:3000/image2/${Event.req.file.filename}`, // 图片 src ，必须
        "alt": "图片", // 图片描述文字，非必须
    }
    }
})