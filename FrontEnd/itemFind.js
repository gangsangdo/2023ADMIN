document.addEventListener('DOMContentLoaded', function () {
    // '지역을 선택해주세요' 버튼 클릭 시 모달 열기
    document.getElementById('openModalBtn').addEventListener('click', function () {
        document.getElementById('locationModal').style.display = 'block';
        document.getElementById('overlay').style.display = 'block';
    });

    // '닫기' 버튼 클릭 시 모달 닫기
    document.getElementById('closeModalBtn').addEventListener('click', function () {
        document.getElementById('locationModal').style.display = 'none';
        document.getElementById('overlay').style.display = 'none';
    });
});
