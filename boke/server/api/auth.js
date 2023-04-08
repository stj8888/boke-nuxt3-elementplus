import JWT from '../util/jwt';
export default defineEventHandler((event)=>{
const token=getHeader(event,'authorization').authorization
if(JWT.verify(token)){
    return {
        auth:'ok'
    }
}else{
    return{
        auth:'false'
    }
}
})