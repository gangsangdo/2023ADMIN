document.addEventListener('DOMContentLoaded', function () {
    // DOM이 완전히 로드된 후에 실행되는 코드

    // 알림 이미지를 클릭하면 alarm.html로 이동
    var notificationImage = document.getElementById('notification');

    if (notificationImage) {
        notificationImage.addEventListener('click', function () {
            // alarm.html로 이동
            window.location.href = 'alram.html';
        });
    }
});