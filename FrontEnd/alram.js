// JavaScript code in a separate file (itemFind.js)

function handleAddButtonClick() {
    var userInput = prompt("추가할 관심 키워드를 입력하세요:");

    if (userInput !== null) {
        // Prepend '#' to the entered text
        var formattedText = '#' + userInput;

        // Create a new paragraph element
        var newParagraph = document.createElement("p");

        // Set the class of the new paragraph
        newParagraph.className = "result-text";

        // Set the text content of the new paragraph
        newParagraph.textContent = formattedText;

        // Append the new paragraph to the keywordresult div
        document.getElementById("keywordresult").appendChild(newParagraph);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    // DOM이 완전히 로드된 후에 실행되는 코드

    // 로그아웃 텍스트를 클릭하면 login.html로 이동
    var logoutText = document.getElementById('logout');

    if (logoutText) {
        logoutText.addEventListener('click', function () {
            // login.html로 이동
            window.location.href = 'login.html';
        });
    }
});

