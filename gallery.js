var photoInput = document.getElementById("photoInput");
var selectedImage = document.getElementById("selectedImage");
var imgBox = document.getElementById("imgBox");

var loadFile = function (event) {
  selectedImage.src = URL.createObjectURL(event.target.files[0]);
};

// 파일 선택이 변경되었을 때의 이벤트를 감지하여 실행
photoInput.addEventListener("change", loadFile);

// 사진 업로드 버튼을 눌렀을 때의 이벤트를 감지하여 실행
document.querySelector("button").addEventListener("click", function () {
  imgBox.style.backgroundImage = `url(${selectedImage.src})`;
  imgBox.style.backgroundSize = "cover";
});
