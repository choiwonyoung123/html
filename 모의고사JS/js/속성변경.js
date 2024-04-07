//아이디에 접근할수 있도록 변수로 선언
let head = document.querySelector('#heading');
//아이디에 접근할수 있도록 변수로 선언
let imgh = document.querySelector('#redh');
//head에 텍스트 변경
// head.innerHTML = '레드향';
//head에 배경 색상 변경
head.style.backgroundColor = 'pink';
//head에 테두리 변경
head.style.border = '3px solid black';
//head에 이벤트 연결
head.addEventListener('click', function(){
    alert('부모이벤트');
})
document.querySelector('#c').addEventListener('click', function(){
    alert('자식이벤트');
    event.stopPropagation();
})
//이미지에 이벤트 연결
// imgh.onmouseover = swap;
// imgh.onmouseout = swapb;
imgh.addEventListener('mouseover', swap);
imgh.addEventListener('mouseout', swapb);
//imgh에 이미지 변경
imgh.src = 'img/앤.jpg';
imgh.setAttribute('src', 'img/앤.jpg');
//head요소 삭제
// head.remove();
// imgh.remove();
//상세표시를 눌렀을때 내용을 보여주고 상세표시 버튼 숨기기
function show(){
    //아이디에 접근할수 있도록 변수로 선언
    let desc = document.querySelector('#desc');
    //내용 보여주기
    desc.style.display = 'block';
    //상세표시 버튼 사라짐
    document.querySelector('#open').style.display = 'none';
}
//상세표시닫기를 눌렀을때 내용을 숨기고 상세표시 버튼 보여주기
function hide(){
    //내용 숨기기
    document.querySelector('#desc').style.display = 'none';
    //상세표시 버튼 보여주기
    document.querySelector('#open').style.display = 'block';
}
function change(){
    imgh.setAttribute('src', 'img/강아지1.jpg');
}
function swap(){
    imgh.setAttribute('src', 'img/레드향.jpg');
}
function swapb(){
    imgh.setAttribute('src', 'img/강아지1.jpg');
}