
export const getObjHandleForm=(e)=>{
    e.preventDefault()
    const formData=new FormData( e.target)
    const formObj= Object.fromEntries(formData)
    return formObj
}
export const isObjectEmpty=(obj)=> {
    return Object.keys(obj).length === 0;
}

export const formatDate=(timestamp) =>{
    const date = new Date(timestamp);
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  }

