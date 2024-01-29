export const getObjHandleForm=(e)=>{
    e.preventDefault()
    const formData=new FormData( e.target)
    const formObj= Object.fromEntries(formData)
    return formObj
}