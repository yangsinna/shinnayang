import "./Card.css";
import './../App.css';
import {useNavigate} from 'react-router-dom';
import { Nav, Button, Navbar,Card } from 'react-bootstrap'
import LikeButton from './LikeButton'
import Fileform from "./Fileform";
import Comment from './Comment'
import {useState} from 'react';




function Cardfilp({realData}) {
  const [Simple, Search] = useState('');
  const handleInput = (event) => {
    const input = event.target.value
    Search(input) // 입력한 글자를 inputState에 넣어줌
    console.log(Search)  // 위에서 넣어준 걸 콘솔에 출력해보기
    const filtered = realData.filter((itemList) => {
          return itemList.cookery.toUpperCase().includes(input.toUpperCase());
    });
    if (input === '') {
      Simple()
    } else {
      Simple(filtered);
    }
  }
  let navigate = useNavigate();
  // const [reversed, setReversed] = useState(false);
console.log(realData)
  return <>{realData && 
    realData.map((a, i) => {
      return (
        <div>
          <Card className="border" style={{ width: '15rem' }}>
      <Card.Img variant="top" src={a.mainIMG} className='gridImg'/>
      <Card.Body>
        <Card.Title>당근수삼정과</Card.Title>
        <Card.Text>
         맛있다
        </Card.Text>
        <Button onClick={()=>{navigate('/Fileform')}}variant="primary">먹음</Button><LikeButton/>
        <Comment/>
      
       
      </Card.Body>
    </Card>
        {/* <Button onClick={()=>{navigate('/fileform')}}variant="primary">먹음</Button>
        <img src={a.mainIMG} className='gridImg'/> */}
        
          </div>  
      );
    })
  }</>
}

export default Cardfilp;