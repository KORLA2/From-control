import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Users from "./Users";
import Form from "./Form";

function App() {
  let [data, setData] = useState([]);
  let [clicked, setclicked] = useState([]);
let [array,setarr]=useState([]);
  useEffect( () => {
let users=async()=>{
let res= await fetch("https://jsonplaceholder.typicode.com/users")
   let dat= await res.json();
 setData(dat.map((elem)=>(
{

         name: elem.name,
         id: elem.id,
         loc: [elem.address.geo.lat, elem.address.geo.lng],
         address: "bangkok",
}

 )));

  
}
 
 
   users();

  }, []);

  useEffect(()=>{
let  arr=[];
data.map((e)=>(


 fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${e.loc[0]},${e.loc[1]}?key=3S5GEJ6FLKLCS2823ATECF7XA`).then(res=>res.json()).then(data=>arr.push( (data.timezone))).catch(()=>console.log('failed'))

))
setarr(arr);
} , [data])



  return (
    <Main>
      <Users data={data} setclicked={setclicked} arr={array} />
      <Form setData={setData} clicked={clicked} />
    </Main>
  );
}

export default App;
let Main = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 3fr 4fr;
`;
