import React, { useState } from 'react';

const emoticons = [
  "😊", "😄", "😍", "👍", "👏", "😎", "🙌", "💯", "🔥", "💪"
];

function App() {
  const [reviews, setReviews] = useState([]);
  const [quote, setQuote] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [selectedEmoticon, setSelectedEmoticon] = useState(null);
  const [commentText, setCommentText] = useState('');
  const [selectedImageSrc, setSelectedImageSrc] = useState('');

  const handleSaveReview = () => {
    if (!quote || !reviewText) {
      alert('인상 깊은 구절과 서평을 입력해주세요.');
      return;
    }

    const newReview = {
      quote,
      reviewText,
      selectedEmoticon,
      comments: []
    };

    setReviews([...reviews, newReview]);
    setQuote('');
    setReviewText('');
    setSelectedEmoticon(null);
  };

  const handleSaveComment = (index) => {
    if (!commentText) {
      alert('코멘트를 입력해주세요.');
      return;
    }

    const updatedReviews = [...reviews];
    updatedReviews[index].comments.push(commentText);
    setReviews(updatedReviews);
    setCommentText('');
  };

  const handleImageUpload = (e) => {
    const photoInput = e.target;
    
    if (photoInput.files && photoInput.files[0]) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const img = new Image();
        img.src = e.target.result;
  
        img.onload = function () {
          // 이미지 크기를 10x10으로 조정
          const canvas = document.createElement("canvas");
          canvas.width = 10;
          canvas.height = 10;
          const ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0, 10, 10);
  
          // 10x10 크기의 이미지를 data URL로 변환
          const smallImageSrc = canvas.toDataURL("image/png");
  
          setSelectedImageSrc(smallImageSrc);
        };
      };
      reader.readAsDataURL(photoInput.files[0]);
    } else {
      setSelectedImageSrc('');
    }
  };

  return (
    <div className="App">
      <div>
        <input
          type="file"
          id="photoInput"
          accept="image/*"
          onChange={handleImageUpload}
        />
        <button onClick={handleSaveReview}>서평 저장</button>
      </div>
      <div id="gallery">
        <img
          id="selectedImage"
          src={selectedImageSrc}
          alt="선택된 이미지"
        />
      </div>
      <div id="reviewList">
        {reviews.map((review, index) => (
          <div key={index} className="review-item">
            <p>인상 깊은 구절: {review.quote}</p>
            <p>서평: {review.reviewText}</p>
            <p>선택된 이모티콘: {review.selectedEmoticon}</p>
            <textarea
              placeholder="코멘트를 작성하세요"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            />
            <button onClick={() => handleSaveComment(index)}>코멘트 저장</button>
            <div className="comment-list">
              {review.comments.map((comment, commentIndex) => (
                <p key={commentIndex}>{comment}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
  
  