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
            <h1>Demo</h1>
            {!name?(<p>NoData</p>):(<div><p>Name : {name}</p><br></br>
            <p>Age : {age}</p></div>)}
        </div>
    )
}

export default Demo