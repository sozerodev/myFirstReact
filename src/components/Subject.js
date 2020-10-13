import React, { Component } from "react";

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

export default Subject;
