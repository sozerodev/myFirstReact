import React, { Component } from "react";
import TOC from "./components/TOC";
import Content from "./components/Content";
import "./index.css";

// function App(){
//   return(
//     <div className = "App">
//       <h1>Hello React!! </h1>
//        <p>Start editing to see some magic happen :)</p>
//     </div>
//   );
// }

// JS 최신버젼에서는 class안에 소속되는 함수는 앞에 function을 생략한다.
// 그래서 function render() 가 아니라 그냥 render()인 것.
class Subject extends Component {
  render() {
    // render라는 함수
    return (
      // 주의** 하나의 최상위 태그만 사용 가능하다.
      // 여기서 하나의 최상위 태그는 header 태그이다.

      // JSX
      // JSX로 코드를 작성하면 create-react-app이 알아서
      // JS코드로 converting해주는 것.
      <header>
        <h1>{this.props.title}</h1>
        {this.props.sub}
      </header>
    );
  }
}

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
