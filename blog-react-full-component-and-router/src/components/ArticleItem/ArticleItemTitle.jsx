import { Link } from "react-router-dom";
import Highlighter from "react-highlight-words";

export default function ArticleItemTitle({ title, slug, searchValue }) {
  console.log(searchValue);
  const titleHighlighted = (
    <Highlighter
      searchWords={[searchValue]}
      autoEscape={true}
      textToHighlight={title}
      highlightStyle={{ fontWeight: "normal" }}
    />
  );
  return (
    <h2 className="article-item__title">
      <Link to={"/post/:" + slug}>{titleHighlighted}</Link>
    </h2>
  );
}
