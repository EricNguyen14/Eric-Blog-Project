function PostDetailHead({ title, authorName, date }) {
  const dateOnly = date.split("T")[0];
  return (
    <div className="post-detail__head">
      <div className="tcl-container">
        <h1 className="post-detail__title">{title}</h1>
        <ul className="post-detail__info">
          <li className="item author">
            <a href="/">
              <strong>{authorName}</strong>
            </a>
          </li>
          <li className="item date">{dateOnly}</li>
          <li className="item views">
            2 <i className="icons ion-ios-eye" />
          </li>
          <li className="item comments">
            20 <i className="icons ion-ios-chatbubble" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PostDetailHead;
