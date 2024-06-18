// 이미지 요소를 가져옵니다.
const followImage = document.getElementById("follow-image");

// 마우스 이벤트 핸들러를 추가합니다.
document.addEventListener("mousemove", (e) => {
  // 마우스 위치를 따라 이미지를 이동합니다.
  followImage.style.left = e.clientX + "px";
  followImage.style.top = e.clientY + "px";

  // 이미지의 크기를 조절하여 확대합니다.
  followImage.style.transform = "scale(2.0)";
});

document.addEventListener("DOMContentLoaded", function () {
  var showEmailButton = document.getElementById("show-email-button");

  showEmailButton.addEventListener("click", function () {
    var emailAddress = "nyet311@naver.com"; // 여기에 이메일 주소를 입력합니다.
    var subject =
      "오르막이든 내리막이든 변화에 적응해 나가는 디자이너 양은혜입니다."; // 이메일 제목을 지정합니다.

    var mailtoLink = "mailto:" + emailAddress + "?subject=" + subject;
    window.location.href = mailtoLink;
  });
});

window.addEventListener("scroll", function () {
  const section1 = document.getElementById("section1");

  // 요소의 위치 가져오기
  const section1Top = section1.getBoundingClientRect().top;

  // 스크롤 위치에 따라 요소를 나타나게 하기
  if (section1Top <= window.innerHeight / 2) {
    section1.style.opacity = "1";
  }
});

// PROGUE 메뉴 항목 요소를 가져옵니다.
var progueMenuItem = document.querySelector('li a[href="#section1"]');

// PROGUE 메뉴 항목을 클릭했을 때 실행될 함수
progueMenuItem.addEventListener("click", function (event) {
  event.preventDefault(); // 기본 클릭 동작(페이지 내 이동)을 막습니다.

  // 부드럽게 스크롤하는 함수
  function scrollToSection1() {
    var section1 = document.getElementById("section1");
    var section1Position = section1.getBoundingClientRect().top;
    var startPosition = window.scrollY;
    var startTime = null;
    var duration = 1000; // 스크롤 지속 시간 (1초)
    var offset = -95; // 원하는 아래로 위치 설정 (음수 값으로 위로)

    function scrollStep(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = timestamp - startTime;
      var scrollDistance = Math.min(
        (progress / duration) * section1Position,
        section1Position
      );

      window.scrollTo(0, startPosition + scrollDistance + offset);

      if (progress < duration) {
        requestAnimationFrame(scrollStep);
      }
    }

    requestAnimationFrame(scrollStep);
  }

  scrollToSection1(); // 부드럽게 스크롤 시작
});

// 스크롤 이벤트 핸들러 추가
window.addEventListener("scroll", function () {
  const section2 = document.getElementById('section2');
  const section3 = document.getElementById('section3');
  
  let section2Position = section2.offsetTop;
  let section3Position = section3.offsetTop;
  
  window.addEventListener('resize', function () {
    // 창의 크기가 변경될 때 섹션의 위치를 업데이트합니다.
    section2Position = section2.offsetTop;
    section3Position = section3.offsetTop;
  });
  

  // 요소의 위치 가져오기
  const section1Top = section1.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  // 스크롤 위치에 따라 section1과 section2를 나타나게 하기
  if (section1Top <= windowHeight / 2) {
    section1.style.opacity = "1";
    section1.style.transform = "translateY(0)";
    section2.style.opacity = "1";
    section2.style.transform = "translateY(0)";
  } else {
    section1.style.opacity = "0";
    section1.style.transform = "translateY(30px)";
    section2.style.opacity = "0";
    section2.style.transform = "translateY(30px)";
  }
});



const image = document.getElementById("follow-image");

// 이미지를 화면 중앙으로 설정하는 함수
function centerImageOnCursor(event) {
  image.style.display = "block";
  image.style.left = event.clientX - image.width / 2 + "px";
  image.style.top = event.clientY - image.height / 2 + "px";
}

// 마우스 커서 이동 이벤트 리스너 등록
document.addEventListener("mousemove", centerImageOnCursor);

// 페이지가 로드될 때 이미지를 중앙에 배치
window.addEventListener("load", (event) => {
  centerImageOnCursor(event);
});
// IDEA 메뉴 항목을 클릭했을 때 실행될 함수
document.querySelector('li a[href="#section2"]').addEventListener("click", function (event) {
  event.preventDefault(); // 기본 클릭 동작(페이지 내 이동)을 막습니다.
  scrollToSection('section2', 800); // 스크롤 속도를 800ms로 설정
});

// EPILOGUE 메뉴 항목을 클릭했을 때 실행될 함수
document.querySelector('li a[href="#section3"]').addEventListener("click", function (event) {
  event.preventDefault(); // 기본 클릭 동작(페이지 내 이동)을 막습니다.
  scrollToSection('section3', 880); // 스크롤 속도를 880ms로 설정 (1.1배 빠른 속도)
});

// scrollToSection 함수 수정
function scrollToSection(sectionId, customDuration) {
  var section = document.getElementById(sectionId);
  var sectionPosition = section.offsetTop; // 섹션의 시작 부분으로 변경
  var startPosition = window.scrollY;
  var startTime = null;
  var duration = customDuration || 800;
  var offset = -100;

  function scrollStep(timestamp) {
    if (!startTime) startTime = timestamp;
    var progress = timestamp - startTime;
    var scrollDistance = Math.min(
      (progress / duration) * sectionPosition,
      sectionPosition
    );

    window.scrollTo(0, startPosition + scrollDistance + offset);

    if (progress < duration) {
      requestAnimationFrame(scrollStep);
    }
  }

  requestAnimationFrame(scrollStep);
}
document.addEventListener("DOMContentLoaded", function () {
  // IDEA 메뉴 항목을 가져옵니다.
  var ideaMenuItem = document.querySelector('li a[href="#section2"]');

  // IDEA 메뉴 항목을 클릭했을 때 실행될 함수
  ideaMenuItem.addEventListener("click", function (event) {
    event.preventDefault(); // 기본 클릭 동작(페이지 내 이동)을 막습니다.

    // 해당 섹션으로 스크롤하는 함수 호출
    scrollToSection2();
  });

  // 함수 정의: section2로 스크롤
  function scrollToSection2() {
    var section2 = document.getElementById("section2");
    var section2Position = section2.offsetTop; // 섹션의 시작 부분으로 변경
    var startPosition = window.scrollY;
    var startTime = null;
    var duration = 800; // 스크롤 지속 시간 (800ms)
    var offset = 1;

    function scrollStep(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = timestamp - startTime;
      var scrollDistance = Math.min(
        (progress / duration) * section2Position,
        section2Position
      );

      window.scrollTo(0, startPosition + scrollDistance + offset);

      if (progress < duration) {
        requestAnimationFrame(scrollStep);
      }
    }

    requestAnimationFrame(scrollStep);
  }
});
// EPILOGUE 메뉴 항목을 클릭했을 때 실행될 함수
document.querySelector('li a[href="#section3"]').addEventListener("click", function (event) {
  event.preventDefault(); // 기본 클릭 동작(페이지 내 이동)을 막습니다.
  scrollToSection('section3', 880); // 여기서 customOffset 값을 조절합니다. (현재는 880)
});

// scrollToSection 함수 수정
function scrollToSection(sectionId, customDuration, customOffset) {
  var section = document.getElementById(sectionId);
  var sectionPosition = section.offsetTop; // 섹션의 시작 부분으로 변경
  var startPosition = window.scrollY;
  var startTime = null;
  var duration = customDuration || 800;
  var offset = customOffset || 1; // 기본값은 -100

  function scrollStep(timestamp) {
    if (!startTime) startTime = timestamp;
    var progress = timestamp - startTime;
    var scrollDistance = Math.min(
      (progress / duration) * sectionPosition,
      sectionPosition
    );

    window.scrollTo(0, startPosition + scrollDistance + offset);

    if (progress < duration) {
      requestAnimationFrame(scrollStep);
    }
  }

  requestAnimationFrame(scrollStep);
}

document.addEventListener("DOMContentLoaded", function () {
  // 부드러운 이동을 적용할 메뉴 항목들을 선택합니다.
  var menuItems = document.querySelectorAll('.floating-menu a');

  // 각 메뉴 항목에 클릭 이벤트 리스너를 추가합니다.
  menuItems.forEach(function (menuItem) {
    menuItem.addEventListener("click", function (event) {
      event.preventDefault(); // 기본 클릭 동작(페이지 내 이동)을 막습니다.

      // 클릭된 메뉴 항목의 href 값을 가져와 해당 섹션으로 부드럽게 이동시키는 함수 호출
      var targetSectionId = menuItem.getAttribute("href");
      smoothScrollToSection(targetSectionId);
    });
  });

  // smoothScrollToSection 함수 정의
  function smoothScrollToSection(sectionId) {
    var section = document.querySelector(sectionId);
    var start = window.pageYOffset; // 현재 스크롤 위치
    var end = section.offsetTop; // 목표 섹션의 위치
    var duration = 800; // 이동 지속 시간 (ms)
    var startTime = null;

    function scrollStep(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = timestamp - startTime;
      var scrollY = easeInOutCubic(progress, start, end - start, duration);
      window.scrollTo(0, scrollY);

      if (progress < duration) {
        requestAnimationFrame(scrollStep);
      }
    }

    requestAnimationFrame(scrollStep);
  }

  // 이징 함수 정의 (easeInOutCubic)
  function easeInOutCubic(t, b, c, d) {
    // https://easings.net/#easeInOutCubic 참조
    t /= d / 2;
    if (t < 1) return c / 2 * t * t * t + b;
    t -= 2;
    return c / 2 * (t * t * t + 2) + b;
  }
});
// 원에 대한 참조를 가져옵니다.
const circle1 = document.getElementById('circle1');
const circle2 = document.getElementById('circle2');
const circle3 = document.getElementById('circle3');
const circle4 = document.getElementById('circle4');

// section2, section3에 대한 참조를 가져옵니다.
const section2 = document.getElementById('section2');
const section3 = document.getElementById('section3');

// section2, section3의 시작 위치를 계산합니다.
const section2Position = section2.offsetTop;
const section3Position = section3.offsetTop;

// 창에 스크롤 이벤트 리스너를 추가합니다.
window.addEventListener('scroll', function () {
  // 스크롤 위치를 가져옵니다.
  const scrollPosition = window.scrollY;

  // section2에 도달하면 원의 색상을 변경합니다.
  if (scrollPosition >= section2Position && scrollPosition < section3Position) {
    setCircleColor('rgb(60, 225, 110)');
  } else if (scrollPosition >= section3Position) {
    // section3에 도달하면 원의 색상을 흰색으로 변경합니다.
    setCircleColor('white');
  } else {
    // section2를 벗어나면 원의 색상을 다시 흰색으로 변경합니다.
    setCircleColor('white');
  }
});


// 창에 스크롤 이벤트 리스너를 추가합니다.
window.addEventListener('scroll', function () {
  // 스크롤 위치를 가져옵니다.
  const scrollPosition = window.scrollY;

  // 각 섹션의 시작 위치를 계산합니다.
  const section1Position = section1.offsetTop;
  const section2Position = section2.offsetTop;
  const section3Position = section3.offsetTop;

  // 스크롤 위치에 따라 원의 색상을 변경합니다.
  if (scrollPosition < section1Position) {
    setCircleColor('white');
  } else if (scrollPosition >= section1Position && scrollPosition < section2Position) {
    setCircleColor('rgb(60, 225, 110)');
  } else if (scrollPosition >= section2Position && scrollPosition < section3Position) {
    setCircleColor('your-desired-color'); // 여기에 원하는 색상 값을 넣어주세요.
  } else if (scrollPosition >= section3Position) {
    setCircleColor('white');
  }
});

// 원의 색상을 변경하는 함수
function setCircleColor(color) {
  circle1.style.transition = 'background-color 0.5s ease'; // 색상 변경에 대한 트랜지션 설정
  circle2.style.transition = 'background-color 0.5s ease';
  circle3.style.transition = 'background-color 0.5s ease';
  circle4.style.transition = 'background-color 0.5s ease';

  // 색상 변경
  circle1.style.backgroundColor = color;
  circle2.style.backgroundColor = color;
  circle3.style.backgroundColor = color;
  circle4.style.backgroundColor = color;

  // 트랜지션 설정 초기화
  setTimeout(() => {
    circle1.style.transition = '';
    circle2.style.transition = '';
    circle3.style.transition = '';
    circle4.style.transition = '';
  }, 500); // 트랜지션 초기화를 위한 대기 시간을 500ms로 설정
}
document.addEventListener("DOMContentLoaded", function () {
  // 부드러운 이동을 적용할 메뉴 항목들을 선택합니다.
  var menuItems = document.querySelectorAll('.floating-menu a');

  // 각 메뉴 항목에 클릭 이벤트 리스너를 추가합니다.
  menuItems.forEach(function (menuItem) {
    menuItem.addEventListener("click", function (event) {
      event.preventDefault(); // 기본 클릭 동작(페이지 내 이동)을 막습니다.

      // 클릭된 메뉴 항목의 href 값을 가져와 해당 섹션으로 부드럽게 이동시키는 함수 호출
      var targetSectionId = menuItem.getAttribute("href");
      if (targetSectionId === "#header") {
        smoothScrollToSection(targetSectionId,60); // #header의 경우 이동 위치를 0으로 설정
      } else if (targetSectionId === "#section1") {
        smoothScrollToSection(targetSectionId, 60); // #section1의 경우 이동 위치를 100으로 설정
      } else if (targetSectionId === "#section2") {
        smoothScrollToSection(targetSectionId, -1); // #section2의 경우 이동 위치를 200으로 설정
      } else if (targetSectionId === "#section3") {
        smoothScrollToSection(targetSectionId, -1); // #section3의 경우 이동 위치를 300으로 설정
      }
    });
  });

  // smoothScrollToSection 함수 정의
  function smoothScrollToSection(sectionId, customOffset) {
    var section = document.querySelector(sectionId);
    var start = window.pageYOffset; // 현재 스크롤 위치
    var end = section.offsetTop - customOffset; // 목표 섹션의 위치 (조절 가능한 오프셋 추가)
    var duration = 800; // 이동 지속 시간 (ms)
    var startTime = null;

    function scrollStep(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = timestamp - startTime;
      var scrollY = easeInOutCubic(progress, start, end - start, duration);
      window.scrollTo(0, scrollY);

      if (progress < duration) {
        requestAnimationFrame(scrollStep);
      }
    }

    requestAnimationFrame(scrollStep);
  }

  // 이징 함수 정의 (easeInOutCubic)
  function easeInOutCubic(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t * t + b;
    t -= 2;
    return c / 2 * (t * t * t + 2) + b;
  }
});
