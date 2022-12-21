import { Link } from "react-router-dom";

export default function ArticleItemThumb({ thumb, slug }) {
  return (
    <div className="article-item__thumbnail">
      <Link to={"/post/:" + slug}>
        <img src={thumb} alt="assets/images/blog-1.jpg" />
      </Link>
    </div>
  );
}
