// join.js
document.addEventListener('DOMContentLoaded', function () {
    // DOM이 완전히 로드된 후에 실행되는 코드

    // OK 버튼을 클릭하면 login.html로 이동
    var okButton = document.getElementById('ok');

    if (okButton) {
        okButton.addEventListener('click', function () {
            // login.html로 이동
            window.location.href = 'login.html';
        });
    }
});
