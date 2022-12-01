import Button from "../shared/Button/Button";

function ArticleItemCategory({ itemCategory }) {
  return (
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
export default ArticleItemCategory;
