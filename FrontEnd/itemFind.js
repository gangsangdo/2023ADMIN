document.addEventListener('DOMContentLoaded', function () {
    // DOM이 완전히 로드된 후에 실행되는 코드

    // itemlist를 클릭하면 customer.html로 이동
    var clickableItem = document.getElementById('clickableItem');

    if (clickableItem) {
        clickableItem.addEventListener('click', function () {
            window.location.href = 'customer.html';
        });
    }
});
