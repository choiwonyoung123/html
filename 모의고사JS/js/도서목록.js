// 입력상자와 버튼에 접근
let book = document.querySelector('#book');
let addBtn = document.querySelector('#add');

// 도서 목록 저장 배열 생성
let books = []; //빈 배열 생성

// 추가 버튼에 클릭 이벤트 연결
addBtn.onclick = addbook; //추가버튼을 누르면 실행할 함수 정의

// 배열에 도서 목록 추가
function addbook(){
    if(book.value == ''){ //book 입력 란이 공백이면
        alert('책 제목을 입력하세요.');
        book.focus(); //book에 다시 커서
    }
    else if(books.indexOf(book.value) != -1){ //배열에 값이 있는지 확인
        alert('이미 있는 첵입니다.');
        book.value = ''; //book 입력란 초기화
        book.focus(); //book에 다시 커서
    }
    else{
        books.push(book.value);
        book.value = ''; //book 입력란 초기화
        book.focus(); //book에 다시 커서
        show(); //출력 함수 호출
    }
}

// 문서에 도서목록 출력(<ul><li>)
function show(){
    let blist = '<ul>'; //<ul>태그 생성
    for(let i in books){ //books 배열 반복문
        blist += `<li>${books[i]}<span class='del' id='${i}'>삭제</span></li>` //배열을 반복해서 <li>태그로 넣기
    }
    blist += `</ul>`; //</ul>태그 닫기
    document.querySelector('#bookList').innerHTML = blist; //배열이 들어갈 곳에 넣기

    let delLists = document.querySelectorAll('.del'); //삭제될 리스트 생성
    // console.log(delLists);
    for(let ele of delLists){ //delList 배열 반복문
        ele.onclick = delf; //목록 삭제 함수 실행
    }
}    

// 문서에 도서 목록 삭제
function delf(){ //목록 삭제 함수
    let delIndex = this.getAttribute('id'); //속성이 id인 것 
    books.splice(delIndex, 1); //현재 index번호에서 1개 요소 삭제
    show(); //목록 출력 함수 실행
}