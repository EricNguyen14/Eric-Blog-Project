import "./article-item.css";
import cls from "classnames";
import ArticleItemDesc from "./ArticleItemDesc";
import ArticleItemThumb from "./ArticleItemThumb";
import ArticleItemTitle from "./ArticleItemTitle";
import ArticleItemInfo from "./ArticleItemInfo";
import ArticleItemCategories from "./ArticleItemCategories";
import ArticleItemStats from "./ArticleItemStats";

export default function ArticleItem({
  isStyleRow = false,
  isStyleCard = false,
  isShowDesc = false,
  isShowCategoies = false,
  isShowAvatar = true,
  post = null,
  searchValue,
}) {
  const classes = cls("article-item", {
    "style-card": isStyleCard,
    "style-row": isStyleRow,
  });

  if (post === null) {
    return <></>;
  }
  const { title, thumb, desc, slug, categories } = post;
  return (
    <article className={classes}>
      <ArticleItemThumb thumb={thumb} slug={slug} />
      <div className="article-item__content">
        {isShowCategoies && <ArticleItemCategories categoriesId={categories} />}
        {isShowCategoies && <ArticleItemStats />}

        <ArticleItemTitle searchValue={searchValue} title={title} slug={slug} />

        {isShowDesc && <ArticleItemDesc desc={desc} />}

        <ArticleItemInfo isShowAvatar={isShowAvatar} post={post} />
      </div>
    </article>
  );
}
