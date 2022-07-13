const clock = document.querySelector("h2#clock") //html문서에서 id=clock을 불러오고 이를 clock 변수로 선언

function getClock() {
  const date = new Date(); //현재 날짜와 시간을 생상하는 생성자를 date 변수로 선언 
  const hours = String(date.getHours()).padStart(2, "0"); 
  //date.getHours의 number를 text로 변환하기 위해 String 객체를 사용후 문자열의 시작을 다른 문자열로 채워주는 padStart(자리수, "사용될 문자열")사용함
  //date.getHours(시간)를 hours로 변수 선언함 (분,초도 동일하게 진행)
  
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerHTML = `${hours}:${minutes}:${seconds}`;
  //위에 선언된 clock변수가 위차한 html문서에 date 값의 변수들(hours:minutes:seconds)을 출력함
}

getClock(); // 시간을 화면에 바로 출력하기 위해서 getClock()을 먼저 선언
setInterval(getClock, 1000); // 위에 선언된 getClock() 없는 경우 1초 뒤에 시간이 표시됨, 1초마다 getClock을 업데이트함