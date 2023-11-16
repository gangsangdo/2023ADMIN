// 이벤트 리스너를 등록하고, DOM이 완전히 로드된 후에 실행되는 코드
document.addEventListener('DOMContentLoaded', function () {

    // 알림 이미지 클릭 시 alarm.html로 이동
    var notificationImage = document.getElementById('notification');

    if (notificationImage) {
        notificationImage.addEventListener('click', function () {
            // alarm.html로 이동
            window.location.href = 'alarm.html';
        });
    }

    // 로그아웃 텍스트 클릭 시 login.html로 이동
    var logoutText = document.getElementById('logout');

    if (logoutText) {
        logoutText.addEventListener('click', function () {
            // login.html로 이동
            window.location.href = 'login.html';
        });
    }

    // OK 버튼 클릭 시 itemFind.html로 이동
    var okBtn = document.getElementById('OkBtn');

    if (okBtn) {
        okBtn.addEventListener('click', function () {
            // itemFind.html로 이동
            window.location.href = 'itemFind.html';
        });
    }
});
