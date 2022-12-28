function Notice(props){
    //반드시 태그의 짝을 맞출 것
    //부모태그가 하나 
    //컴포넌트의 첫번째 인자 props의 기능은 실행의 옵션에 접근 
    return(
      <>
      <h2>{props.title}</h2>
      <p>{props.contents.length}건의 게시글이 있습니다</p>
        {/* ul>li*5{공지사항제목} */}
        <ul className={`${props.cls[0]} ${props.cls[1]}`}>
          {
            props.contents.map((item,index)=>{
              // console.log(item,index);
              //map에서도는 정렬객체 (prop.contents)를 선택자로 한다.
              return (
                      <li>
                      <p>{item.subject}</p>
                      <div>{item.contents}</div>
                      </li>
                      );
            })
          }
        </ul>
      </>
    )
    
  }

  export default Notice;