import {API} from '../backend'

// export const getData=(flag=1,type=null)=>{
//     if(type=="launch_success"){
//         var target=`${API}&launch_success=${flag}`
//     }else{
//         var target=`${API}`
//     }
//     return fetch(target,
//     {method:"GET"}
//     ).then(res=>res.json()).catch(err=>console.log(err))
// }

export const getProducts = (url = API) => {
    return fetch(url)
}

export const getLaunch=flag=>{
    return fetch(
        `${API}&launch_success=${flag}`,
        {
            method:"GET"
        }
    )
    .then(response=>{
        return response.json()
    })
    .catch(err=>console.log(err))
}