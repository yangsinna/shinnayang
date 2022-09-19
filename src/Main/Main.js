import React from 'react';
import App from './../App.css';
import Nav from 'react-bootstrap/Nav';
import Playground from './Playground';
import ImageSlider from './imageSlider';
import Calendar from './Calendar';

function Main({realData}) {
  return (
    <>
      <div className='my'>
        <h4>냉장고Go 파먹Go</h4>
      </div>

      <div className='main1'>
        <div className="b1">
         <Calendar/> 
          <Nav className="bar">
            <Nav.Link className="src1" href="/Square">
              광장✌
            </Nav.Link>
            <br></br>

            <Nav.Link className="src2" href="/recipe">
              레시피🍝
            </Nav.Link>
            <br></br>

            <Nav.Link className="src3" href="/rangking">
              랭킹🎊
            </Nav.Link>
            <br></br>

            <Nav.Link className="src4" href="/my">
              마이페이지🥂
            </Nav.Link>
            <br></br>
          </Nav>
        </div>
        <div className="b2">
          <ImageSlider realData={realData} />
        </div>
        <div className="b3">
          <Playground realData={realData} /> 
        </div>
        </div>
      
    </>
  );
}

export default Main;
