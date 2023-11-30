let events = [];

function postEvent() {
  var title = document.getElementById("eventTitle").value;
  var content = document.getElementById("eventContent").value;
  var link = document.getElementById("eventLink").value;

  var eventsObj = {
    title: title,
    content: content,
    link: link,
  };
  events.push(eventsObj);

  displayEvents();
}

function displayEvents() {
  var eventList = document.getElementById("eventList");
  eventList.innerHTML = "";

  for (var i = 0; i < events.length; i++) {
    var eventItem = document.createElement("div");
    eventItem.classList.add("event-item");

    var title = document.createElement("p");
    title.textContent = "이벤트 제목: " + events[i].title;

    var content = document.createElement("p");
    content.textContent = "이벤트 내용: " + events[i].content;

    var link = document.createElement("p");
    link.textContent = "이벤트 링크: " + events[i].link;

    eventItem.appendChild(title);
    eventItem.appendChild(content);
    eventItem.appendChild(link);
    eventList.appendChild(eventItem);
  }
}
