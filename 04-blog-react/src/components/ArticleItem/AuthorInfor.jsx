import DateAndTime from "./DateAndTime";

function AuthorInfor({ isShowAuthorImg, date, time, authorName }) {
  let authorImg = "";
  if (isShowAuthorImg) {
    authorImg = (
      <div className="article-item__author-image">
        <a aria-label="John Doe" href="/">
          <img src="assets/images/john-doe.png" alt="john-doe" />
        </a>
      </div>
    );
  }

  return (
    <div className="article-item__info">
      {authorImg}
      <div className="article-item__info-right">
        <div className="article-item__author-name">
          <a href="/">
            <strong>{authorName}</strong>
          </a>
          <DateAndTime date={date} time={time}></DateAndTime>
        </div>
      </div>
    </div>
  );
}
export default AuthorInfor;
