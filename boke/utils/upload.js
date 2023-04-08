const upload=(path,ruleForm)=>{
    const fd=new FormData()
    for(var i in ruleForm){
        fd.append(i,ruleForm[i])
    }
    //不能再headers加Content-Type=multipart/form-data,因为post会自动识别否则会报错
    const res=$fetch(path,{
        method:'post',
        body:fd,
    })
    return res
    }
    export default upload