import { useEffect, useState } from "react";

import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Card from "./Components/Card/Card";

const GlobalStyle = createGlobalStyle`
  ${reset}
  h1 {
    font-size: 1.8em;
  };
  h3 {
    font-size: 1.2em;
    line-height: 1.4em;
  };
  span {
    line-height: 1.2em;
  }
  button {
    background-color: initial;
    border: 0;
  }
`

function App() {
  const [imageList, setImageList] = useState([])
  const [changeCate, setChangeCate] = useState(false)
  
  function changeCateBtn() {
      setChangeCate(true)
  }

  useEffect(() => {
      fetchImages()
  }, [])  
  async function fetchImages() {

      try {
      const response = await fetch('https://picsum.photos/v2/list?page=1&limit=5')
      if(!response.ok) {
          throw new Error('네트워크에 문제가 있습니다.')
      }
      const data = await response.json()
      setImageList(data)
      } catch(error) {
          console.error('데이터를 가져오는 데 문제가 발생했습니다.' + error)
      }
  }

  return (
    <div>
      <GlobalStyle />
      <Card 
        changeCate = { changeCate }
        changeCateBtn = { changeCateBtn } 
        imageList = { imageList }/>
    </div>
  );
}
export default App;
