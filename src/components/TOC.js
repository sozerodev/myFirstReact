// React라는 라이브러리에서 Component라고 하는 클래스를 로딩한 것.
import React, { Component } from "react";

class TOC extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <a href="1.html">HTML</a>
          </li>
          <li>
            <a href="2.html">CSS</a>
          </li>
          <li>
            <a href="3.html">JavaScript</a>
          </li>
        </ul>
      </nav>
    );
  }
}

// TOC.js 를 가져다 쓰는 쪽에서 TOC라는 클래스를 가져다 사용할 수 있게 된다.
export default TOC;
