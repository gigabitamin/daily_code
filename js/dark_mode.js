

/*********** 다크모드 ************/ 

// 1번 

// function dark_mode() {
//     let darkBody = document.body;
//     darkBody.classList.toggle("dark_mode");
// }

// 네이버 사이트 다크모드 방식과 유사 
// 버튼 클릭 토글시 body에 dark_mode 클래스 추가해서 해당 css 테마 색상 적용
// window.onload 시 적용불가되는 문제
// 페이지 변경되면 적용이 풀리는 문제


// 2번

// document.getElementById('dark').addEventListener("click", function() {
//     if(document.querySelector('body').classList.contains('dark_mode')){
//         document.body.classList.remove("dark_mode");
//     }else{
//         document.body.classList.add("dark_mode");
//     }
// }, false);
// 다크모드 적용여부 체크 후 적용
// 페이지 변경되면 풀림 


// 3번

// (function() {
//     let themeCheck = localStorage.getItem("dark_mode_theme") || "";
//     let themeElement = document.body;
//     themeElement.classList.add(themeCheck);
//     document.getElementById("dark_mode_theme").textContent = localStorage.getItem("dark_mode_theme") || "light_mode";
//   })();
  
// function dark_mode() {
//     let themeElement = document.body;
//     element.classList.toggle("dark_mode");
  
//     let dark_mode_theme = localStorage.getItem("dark_mode_theme");
  
//     if (dark_mode_theme && dark_mode_theme === "dark_mode") {
//       localStorage.setItem("dark_mode_theme", "");
  
//     } else {
//       localStorage.setItem("dark_mode_theme", "dark_mode");
//     }

//     document.getElementById("dark_mode_theme").textContent = localStorage.getItem("dark_mode_theme");
//   }

// 상태 유지형 다크모드
// https://github.com/nickdeny/darkmode.js 깃헙 참고 //
// localStorage 를 이용해 사용자의 다크모드 적용 여부 상태 저장
// 페이지 랜덤 이동시 일부 페이지에서 상태저장이 풀림


// localStorage 는 사용자의 로컬에 존재하는 저장소 (서버 필요 x)
// 특정 데이터 저장, 변경 가능
// 유효기간이 존재하지 않음 (session 과 다른 점)
// 파이썬 예습-딕셔너리 key와 value 값 한 쌍인 딕셔너리 자료형 이용 가능
// 예) window.localStorage.setItem('mode', 'dark_mode');


// 4번 

let css_switch = document.querySelector("#css_switch");
let dark_mode_check = localStorage["dark_mode_save"];
dark_mode_load ();

function dark_mode_load () {
    if (dark_mode_check == "Y") {
        css_switch.setAttribute('href', "dark_mode.css")
    } 
    else {
        css_switch.setAttribute('href', "light_mode.css")
    }
}

function dark_mode_change(){
    if (dark_mode_check == "N") {
        localStorage["dark_mode_save"] = 'Y' 
    } 
    else {
        localStorage["dark_mode_save"] = 'N'
    }

    location.reload();
}

// 페이지 변경 후에도 다크모드 변경상태 유지 확인
// css 파일 href 경로 변경시 주의

