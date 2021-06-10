import { response } from "express"

const putMovie = async (url)=>{
    let result = [];
    await fetch(url,{
        method:"POST",
    })
    .then(response =>response.json())
    .then(data => result=data)
    .catch(err=>console.log(err));
    return result;
}