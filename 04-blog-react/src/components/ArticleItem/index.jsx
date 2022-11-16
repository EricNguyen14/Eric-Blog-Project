import Button from "../shared/Button/Button";
import AuthorInfor from "./AuthorInfor";
import "./article-item.css";
function ArticleItem({
  authorInfor,
  title,
  thumb,
  typeArticle,
  stylePos,
  style,
  isShowAuthorImg,
  date,
  time,
  authorName,
  itemCategory,
  itemStats,
  itemDesc,
  listArticle,
}) {
  let typeArticleClassName = "";
  let articleStyle = "";
  let articlePos = "";
  if (typeArticle === "ArticlePopular") {
    typeArticleClassName = "popular-news__list--card";
  }
  if (typeArticle === "ArticleGeneral") {
    typeArticleClassName = "tcl-col-12 tcl-col-md-6";
  }
  if (typeArticle === "ArticleLatest") {
    typeArticleClassName = "latest-news__card";
  }
  if (stylePos === "style-card") {
    articlePos = " style-card ";
  }
  if (style === "style-row") {
    articleStyle = "style-row";
  }
  if (itemCategory) {
    itemCategory = (
      <ul className="article-item__categories">
        <li>
          <Button as="a" type="category" href={itemCategory}>
            Category1
          </Button>
        </li>
        <li>
          <Button as="a" type="category" href={itemCategory}>
            Category2
          </Button>
        </li>
      </ul>
    );
  }
  if (itemStats) {
    itemStats = (
      <ul className="article-item__stats">
        <li>
          <i className="icons ion-ios-eye" />
          <span className="text">Views</span>
        </li>
      </ul>
    );
  }
  if (itemDesc) {
    itemDesc = <p className="article-item__desc">{itemDesc}</p>;
  }
  const articleClassName = "article-item" + articlePos + articleStyle;
  return (
    <div className={typeArticleClassName}>
      <article className={articleClassName}>
        <div className="article-item__thumbnail">
          <a href="/">{thumb}</a>
        </div>
        <div className="article-item__content">
          {itemCategory}
          {itemStats}
          <h2 className="article-item__title">
            <a href="/only-someone-who's-seen-the-mummy-will-pass-this/">
              {title}
            </a>
          </h2>
          {itemDesc}
          <AuthorInfor
            isShowAuthorImg={isShowAuthorImg}
            date={date}
            time={time}
            authorName={authorName}
          />
        </div>
      </article>
    </div>
  );
}
export default ArticleItem;
