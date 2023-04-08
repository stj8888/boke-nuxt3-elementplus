import jwt from 'jsonwebtoken'
const secret='stj'
const JWT={
    Sin(value,expiresIn){
      return  jwt.sign(value,secret,{expiresIn:expiresIn})
    },
    verify(token){
        try{
            return  jwt.verify(token,secret)
        }catch(e){
            return false
        }
    }
}
export default JWT