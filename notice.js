let notices = [];

function postNotice() {
  var title = document.getElementById("noticeTitle").value;
  var content = document.getElementById("noticeContent").value;

  var noticeObj = {
    title: title,
    content: content,
  };
  notices.push(noticeObj);

  displayNotices();
}

function displayNotices() {
  var noticeList = document.getElementById("noticeList");
  noticeList.innerHTML = "";

  for (var i = 0; i < notices.length; i++) {
    var noticeItem = document.createElement("div");
    noticeItem.classList.add("notice-item");

    var title = document.createElement("p");
    title.textContent = "공지 제목: " + notices[i].title;

    var content = document.createElement("p");
    content.textContent = "공지 내용: " + notices[i].content;

    noticeItem.appendChild(title);
    noticeItem.appendChild(content);
    noticeList.appendChild(noticeItem);
  }
}
