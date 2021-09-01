import React, { useEffect, useState } from 'react';

const Demo=()=>{
    const [name,setN]=useState(null)
    const [age,setAAAg]=useState(null)

    useEffect(()=>{

        const fetchAPI=async ()=>{
            const requestOptions = {
                method: 'POST',
                mode:'no-cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: 'learntothrive' })
            };
            const url='http://localhost:5000/';
            const res=await fetch(url,requestOptions);
            console.log(await res)
            if(!res){
                const resJson=await  res.json()
            console.log(resJson)
            }
            
            //console.log(resJson)
            //setAAAg(resJson.age)
            //setN(resJson.name)
        }
        fetchAPI();

    })
    return (
        <div>
            
        </div>
    )
}

export default Demo