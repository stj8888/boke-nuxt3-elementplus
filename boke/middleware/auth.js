export default defineNuxtRouteMiddleware((to, from) => {
    // isAuthenticated() is an example method verifying if a user is authenticated
    const auth=false
        const isAuthenticated=()=>{
            if(process.client){
            if(localStorage.getItem('token')){
             const auth=  $fetch('/api/auth',{
                headers:{'Authorization':localStorage.getItem('token')}}).then(res=>{
                    if(res.auth=='ok'){
                        return true
                    }else{
                        return false
                    }
                })
                return auth
            }else{
                return false
            }  }
         }  
        if (isAuthenticated() === false) {
            return navigateTo('/login')
          }
    })
    
