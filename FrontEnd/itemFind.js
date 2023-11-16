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

// itemFind.js

document.addEventListener('DOMContentLoaded', function () {
    // DOM이 완전히 로드된 후에 실행되는 코드

    // chooseLocal을 클릭하면 지역 선택 창이 뜨도록 설정
    var chooseLocalButton = document.getElementById('chooseLocal');

    if (chooseLocalButton) {
        chooseLocalButton.addEventListener('click', function () {
            // 선택 가능한 지역 목록
            var locations = ['서울', '인천', '대전', '광주', '부산', '대구', '울산'];

            // 지역 선택 창 생성
            var locationDropdown = document.createElement('select');

            // 각 지역을 옵션으로 추가
            locations.forEach(function (location) {
                var option = document.createElement('option');
                option.value = location;
                option.text = location;
                locationDropdown.appendChild(option);
            });

            // 창에 추가된 지역 목록을 보여주기
            var selectedLocation = prompt('다음의 지역중 원하는 지역을 선택해주세요:\n' + locations.join(', '), locations[0]);

            // 선택한 지역이 있다면 화면에 표시
            if (selectedLocation !== null && locations.includes(selectedLocation)) {
                // 선택한 지역으로 버튼 텍스트 변경
                chooseLocalButton.value = selectedLocation;
                alert('선택한 지역: ' + selectedLocation);
            } else {
                alert('올바른 지역을 선택해주세요.');
            }
        });
    }
});
