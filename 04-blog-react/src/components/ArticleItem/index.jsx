import AuthorInfor from "./ArticleItemAuthorInfor";
import "./article-item.css";
import ArticleItemCategory from "./ArticleItemCategory";
import ArticleItemDesc from "./ArticleItemDesc";
import ArticleItemStats from "./ArticleItemStats";
import ArticleItemTitle from "./ArticleItemTitle";
import cls from "classnames";
function ArticleItem({
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
}) {
  const articleClassName = cls("article-item", {
    "style-card": stylePos === "style-card",
    "style-row": style === "style-row",
  });
  const typeArticleClassName = cls({
    "popular-news__list--card": typeArticle === "ArticlePopular",
    "tcl-col-12 tcl-col-md-6": typeArticle === "ArticleGeneral",
    "latest-news__card": typeArticle === "ArticleLatest",
  });

  return (
    <div className={typeArticleClassName}>
      <article className={articleClassName}>
        <div className="article-item__thumbnail">
          <a href="/">{thumb}</a>
        </div>
        <div className="article-item__content">
          {itemCategory && (
            <ArticleItemCategory
              itemCategory={itemCategory}
            ></ArticleItemCategory>
          )}
          {itemStats && <ArticleItemStats></ArticleItemStats>}
          <ArticleItemTitle title={title}></ArticleItemTitle>

          {itemDesc && <ArticleItemDesc itemDesc={itemDesc}></ArticleItemDesc>}
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
