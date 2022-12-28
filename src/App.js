import Notice from './component/Notice';
import noticedb from './data/notice.json'

function App() {
  const noticejs=noticedb;
  return (
    <div className="App">
      {/* 컴포넌트 자바스크립트  */}
      <Notice title={noticejs.title} 
              cls = {noticejs.cls}
              contents={noticejs.contents}></Notice>
     </div>
  );
}

export default App;
