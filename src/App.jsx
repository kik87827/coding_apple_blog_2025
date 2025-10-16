import { useState } from "react";
import "./App.css";

function App() {
  let post = "강남 우동 맛집";
  let [article, setArticle] = useState([
    {
      title: "남자 코트 추천",
      date: "2월 17일",
    },
    {
      title: "강남 우동맛집",
      date: "2월 17일",
    },
    {
      title: "파이썬독학",
      date: "2월 17일",
    },
  ]);
  return (
    <div className="App">
      <div className="black-nav">
        <h2>블로그임</h2>
      </div>
      <div className="list-wrap">
        {article.map((item, idx) => {
          return (
            <div className="list-item" key={item.title}>
              <h4>{item.title}</h4>
              <p>{item.date} 발행</p>
            </div>
          );
        })}
      </div>
      <h4>{post}</h4>
    </div>
  );
}

export default App;
