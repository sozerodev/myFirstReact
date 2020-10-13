import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

// App 이라는 컴포넌트를 실행하는 코드.
// 여기에서는 이 App.js에 내부적으로 state값이 subject가 있는지 없는지 알 수가 없다.
// 이를 모른다는 것이 중요하며, 외부에서 알 필요가 없는 정보를 '은닉화' 가능하다.
// 은닉화 된다는게 좋은 사용성을 보여준다고 함.
// 이 App이 내부적으로 사용할 상태는 state라는 형태를 통해서 사용한다.
// 상위 컴포넌트의 state값을 하위 컴포넌트의 props의 값으로 전달하는 것이 가능하다는 것.
ReactDOM.render(<App />, document.getElementById("root"));
