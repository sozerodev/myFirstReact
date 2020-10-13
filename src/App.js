import React, { Component } from "react";
import TOC from "./components/TOC";
import Content from "./components/Content";
import Subject from "./components/Subject";
import "./index.css";

// function App(){
//   return(
//     <div className = "App">
//       <h1>Hello React!! </h1>
//        <p>Start editing to see some magic happen :)</p>
//     </div>
//   );
// }

class App extends Component {
  render() {
    return (
      <div className="App">
        <Subject
          title="WEB"
          sub="oooh my god!!! refactoring a-wesome."
        ></Subject>
        <Subject title="React" sub="For UI"></Subject>
        <TOC></TOC>
        <Content
          title="HTML"
          desc="HTML is HyperText Markup Language."
        ></Content>
      </div>
    );
  }
}

export default App;

// 컴포넌트의 이름에만 집중하게 함으로써
// 복잡도를 획기적으로 낮춰준다.
// 다시 더 많은 복잡도에 도전할 수 있는 여지가 생긴다.
