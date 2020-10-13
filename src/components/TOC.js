// React라는 라이브러리에서 Component라고 하는 클래스를 로딩한 것.
import React, { Component } from "react";

class TOC extends Component {
  render() {
    console.log("TOC render");
    let lists = [];
    let data = this.props.data;
    let i = 0;
    while (i < data.length) {
      // 이렇게 여러개의 엘리먼트를 자동으로 생성하는 경우에는 에러가 발생한다.
      // Warning: Each child in a list should have a unique "key" prop.
      // 각각의 리스트의 항목들은 key라는 props를 가지고 있어야 한다는 것.
      lists.push(
        <li key={data[i].id}>
          <a href={"/content/" + data[i].id}>{data[i].title}</a>
        </li>
      );
      i = i + 1;
    }
    return (
      <nav>
        <ul>{lists}</ul>
      </nav>
    );
  }
}

// TOC.js 를 가져다 쓰는 쪽에서 TOC라는 클래스를 가져다 사용할 수 있게 된다.
export default TOC;
