import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Main/Main';
import Cardfilp from './Square/Cardflip';
import Square from './Square/Square';
 import axios from 'axios';
import Fileform from "./Square/Fileform";
import Comment from "./Square/Comment";


function App() {

  // axios로 데이터 가져오기
let [realData, setRealData] = useState([]);

useEffect(()=>{
  axios.get("http://192.168.0.23:8080/api/dish/get") 
  // axios.get("https://jsonplaceholder.typicode.com/posts") 더미데이터
  .then((response)=>{
    // console.log(response.data)
    setRealData(response.data)
  })
  .catch(()=>{
    console.log('실패')
  })
},[])
console.log(realData)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main realData={realData} />} />
        <Route path="/square" element={<Square realData={realData}/>} />
        <Route path="/fileform" element={<Fileform realData={realData}/>} />
        {/* <Route path="/square/:id" element={ <Detail realData={realData} />}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
