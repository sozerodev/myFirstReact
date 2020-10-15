import React, { Component } from 'react';
import TOC from './components/TOC';
import Content from './components/Content';
import Subject from './components/Subject';
import './index.css';

// App이라는 상위 컴포넌트 안에 Subject라는 하위 컴포넌트가 존재한다.
// 이 하위 컴포넌트의 props의 값들이 하드코딩되어있으니 보기 싫다...
// 그래서 이 값들을 state로 만들고 그 state값을 Subject에 props로 전달하는 것을 통해 코드를 개선해보자.
class App extends Component {
  // component가 있을 때 constructor()라는 함수가 있다면 얘가 제일 먼저 실행되어 초기화를 담당한다.
  constructor(props) {
    // state의 값을 초기화시키고자 함.
    // 어떤 컴포넌트가 실행될 때 render()라는 함수보다 먼저 실행되면서
    // 그 컴포넌트를 초기화시켜주고싶은 코드는 constructor 안에다가 코드를 작성한다.
    super(props);
    // 초기화가 끝나면 아래의 코드를 통해 state값을 초기화 시킨다.
    this.state = {
      mode: 'read',

      // 이때 Subject의 값을 state화 시킬 것이기 때문에 state의 subject property 값으로 다시 객체를 주는데
      // 그 객체의 타이틀은 WEB, sub는 World Wide Web
      subject: { title: 'WEB', sub: 'World Wide Web~!' },

      // mode가 welcome일 때
      welcome: { title: 'Welcome', desc: 'Hello, React!!' },

      // contents라는 property를 state에 추가.
      contents: [
        { id: 1, title: 'HTML', desc: 'HTML is HyperText ... ' },
        { id: 2, title: 'CSS', desc: 'CSS is for design.' },
        { id: 3, title: 'JavaScript', desc: 'JavaScript is for interactive.' }
      ]
    };
  }
  render() {
    // props나 state가 바뀌면 화면은 다시 그려진다.
    // 만들어지는 렌더링 결과가 달라지도록 조건문을 걸어보자.
    console.log('App render');

    let _title,
      _desc = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === 'read') {
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    console.log('render', this); // this는 component 자신을 가리킨다.
    return (
      <div className="App">
        {/* <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
        ></Subject> */}
        <header>
          <h1>
            <a
              href="/"
              // JSX에선 onclick을 다음과 같이 작성한다.
              onClick={function (e) {
                console.log(e);
                e.preventDefault();
                // this.state.mode = 'welcome';
                this.setState({
                  mode: 'welcome'
                });
              }.bind(this)}>
              {this.state.subject.title}
            </a>
          </h1>
          {this.state.subject.sub}
        </header>
        {/* contents에 담겨 있는 배열을 TOC에 주입시키려면..? */}
        <TOC data={this.state.contents}></TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}
export default App;

// 컴포넌트의 이름에만 집중하게 함으로써
// 복잡도를 획기적으로 낮춰준다.
// 다시 더 많은 복잡도에 도전할 수 있는 여지가 생긴다.
