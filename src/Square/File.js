import React, { createRef } from 'react';
import ReactDOM from 'react-dom';

import { useRef, useState } from 'react';
import './../App.css';
import Board from './Board';

export default function File() {
  const fileLoc = useRef();
  const [show, setShow] = useState(false);
  const [img, setImg] = useState(undefined);
  function handleChange() {
    console.log(fileLoc.current.files[0]);
  }
  function handleSubmit() {
    setShow(!show);
    let tmp = URL.createObjectURL(fileLoc.current.files[0]);
    console.log(fileLoc.current.files[0]);
    console.log(tmp);

    setImg(tmp);
  }

  return (
    <div className="App">
      <h2 className="my1">레시피 자랑해주세요(가제)</h2>
      <div className="leftF">
        <Board />
        <div>
          <input type="file" ref={fileLoc} onChange={handleChange} />
          <input type="submit" onClick={handleSubmit} />
        </div>
        <br />
        <div>
          {show && (
            <img
              style={{ width: '350px' }}
              src={img}
              alt={fileLoc.current.files[0].name}
            />
          )}
        </div>
      </div>
    </div>
  );
}
