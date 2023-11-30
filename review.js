// 이모티콘 목록
const emoticons = ["😊", "😄", "😍", "👍", "👏", "😎", "🙌", "💯", "🔥", "💪"];

// 저장된 서평과 코멘트를 담을 배열
let reviews = [];
let comments = [];

// 서평 저장 함수
function saveReview() {
  var quote = document.getElementById("quoteInput").value;
  var review = document.getElementById("reviewInput").value;

  // 서평을 객체로 생성하여 배열에 추가
  var reviewObj = {
    quote: quote,
    review: review,
    selectedEmoticon: null, // 선택된 이모티콘을 담을 변수
    comments: [], // 각 서평에 대한 코멘트를 담을 배열
  };
  reviews.push(reviewObj);

  // 서평 저장 후 reviewList에 표시
  displayReviews();
}

// 코멘트 저장 함수
function saveComment(reviewIndex) {
  var comment = document.getElementById("commentInput" + reviewIndex).value;

  // 현재 선택된 서평에 대한 코멘트 배열에 추가
  reviews[reviewIndex].comments.push(comment);

  // 코멘트 저장 후 해당 서평 아래에 표시
  displayReviews();
}

// 이모티콘 선택 함수
function selectEmoticon(reviewIndex, emoticon) {
  // 선택된 이모티콘을 해당 서평 객체에 저장
  reviews[reviewIndex].selectedEmoticon = emoticon;

  // 서평 옆에 이모티콘 표시
  displayReviews();
}

// 서평을 화면에 표시하는 함수
function displayReviews() {
  var reviewList = document.getElementById("reviewList");
  reviewList.innerHTML = ""; // 이전에 표시된 내용을 지우기

  for (var i = 0; i < reviews.length; i++) {
    var reviewItem = document.createElement("div");
    reviewItem.classList.add("review-item");

    var quote = document.createElement("p");
    quote.textContent = "인상 깊은 구절: " + reviews[i].quote;

    var review = document.createElement("p");
    review.textContent = "서평: " + reviews[i].review;

    var emoticonButtons = document.createElement("div");
    emoticonButtons.classList.add("emoticon-buttons");

    // 이모티콘 버튼을 동적으로 생성하여 서평 옆에 표시
    for (var j = 0; j < emoticons.length; j++) {
      var emoticonButton = document.createElement("button");
      emoticonButton.textContent = emoticons[j];
      emoticonButton.onclick = (function (reviewIndex, emoticon) {
        return function () {
          selectEmoticon(reviewIndex, emoticon);
        };
      })(i, emoticons[j]);

      emoticonButtons.appendChild(emoticonButton);
    }

    var commentInput = document.createElement("textarea");
    commentInput.id = "commentInput" + i;
    commentInput.placeholder = "코멘트를 작성하세요";

    var commentButton = document.createElement("button");
    commentButton.textContent = "코멘트 저장";
    commentButton.onclick = (function (index) {
      return function () {
        saveComment(index);
      };
    })(i);

    var commentList = document.createElement("div");
    commentList.classList.add("comment-list");

    // 해당 서평에 대한 코멘트를 표시
    for (var k = 0; k < reviews[i].comments.length; k++) {
      var commentItem = document.createElement("p");
      commentItem.textContent = reviews[i].comments[k];
      commentList.appendChild(commentItem);
    }

    // 선택된 이모티콘 표시
    var selectedEmoticon = document.createElement("p");
    selectedEmoticon.classList.add("selected-emoticon");
    selectedEmoticon.textContent = reviews[i].selectedEmoticon;

    reviewItem.appendChild(quote);
    reviewItem.appendChild(review);
    reviewItem.appendChild(emoticonButtons);
    reviewItem.appendChild(commentInput);
    reviewItem.appendChild(commentButton);
    reviewItem.appendChild(selectedEmoticon);
    reviewItem.appendChild(commentList);
    reviewList.appendChild(reviewItem);
  }
}
