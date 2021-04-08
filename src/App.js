import React, {useState} from 'react';
import main_logo from './flower_main.png';
import './App.css';


function App() {

  let posts = "ㅇㅇㅇ";
  let date = "2021-04-07";

  //state : 변수 대신 쓰는 데이터 저장공간, 변경시 새로고침 없이 html 재렌더링, webapp처럼 동작
  let [글제목, 글제목변경] = useState(['폰트', '템플릿', '그림']);  
   
  function funct(){
    return 200;
  }

  return (
    <div className="App"> 
       <div className="black-nav">
         <div>개발 Blog</div>
       </div>
       <img className="main_logo" src={main_logo}></img>

       <div className="list">
          <h3>{글제목[0]}</h3>
          <p>{date}</p>
          <hr/>
       </div>
    </div>
  );
}



export default App;
