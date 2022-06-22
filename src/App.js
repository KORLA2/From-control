import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Users from "./Users";
import Form from "./Form";

function App() {
  let [data, setData] = useState([]);
  let [clicked, setclicked] = useState([]);

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
let arr=[];
for(let i=0;i<data.length;++i){

  let func=async()=>{
let res = await fetch(
  `https://api.openweathermap.org/data/2.5/weather?lat=${data[i].loc[0]}&lon=${data[i].loc[1]}&appid=b29c7e45e5dfdc04785de3c37977762f`
);
  
  let dat=await res.json();
arr.push({...data[i],['address']:dat.timezone});

}
func();
setData(arr);
}


},[data])



  return (
    <Main>
      <Users data={data} setclicked={setclicked} />
      <Form setData={setData} clicked={clicked} setclicked={setclicked} />
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
