//input 상자 접근
let id = document.querySelector('#user-id'); //아이디에 접근
let pw = document.querySelector('#user-pw1'); //비밀번호에 접근
let pwc = document.querySelector('#user-pw2'); //비밀번호확인에 접근

//입력상자에 값이 바뀌는 이벤트 발생하면 이벤트 핸들러 연결
id.onchange = checkId; //아이디값이 바뀌면 checkId 이벤트 지정
pw.onchange = checkPw; //비밀번호값이 바뀌면 checkPw 이벤트 지정
pwc.onchange = compPw; //비밀번호 확인 이벤트 지정

// id 길이 체크
function checkId(){
    let idL = id.value.length;
    if(idL < 3 || idL > 10){
        alert('아이디는 3~10글자 사이입니다.');
        id.select(); //아이디란에 다시 블록 커서
    }
}

//비밀번호 길이 체크
function checkPw(){
    let pwL = pw.value.length;
    if(pwL < 4){
        alert('비밀번호는 4자리 이상입니다.');
        pw.value = ''; //입력값 초기화
        pw.focus(); //비밀번호란에 다시 커서
    }
}

// 비밀번호가 맞는지 확인
function compPw(){
    if(pw != pwc){
        alert('비밀번호가 같지 않습니다.');
        pwc.value = ''; //입력값 초기화
        pwc.focus(); //비밀번호확인란에 다시 커서
    }
}

// 1. 입력값에 대한 접근
// 2. 입력란에 대한 이벤트 연결
// 3. 아이디 입력란 이벤트 함수로 정의
// 4. 비밀번호 입력란 이벤트 함수로 정의
// 5. 비밀번호 확인란 이벤트 함수로 정의
// 기타. 재입력을 위한 커서 이동 / 재입력은 위한 입력란 초기화 / 변수명.value 값