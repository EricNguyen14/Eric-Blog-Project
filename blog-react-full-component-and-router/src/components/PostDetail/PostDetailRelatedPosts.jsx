import { useSelector } from "react-redux";
import ArticleRelated from "../ArticleItem/ArticleRelated";

function PostDetailRelatedPosts() {
  const relatedPosts = useSelector((state) => state.POST.listPostRelated);
  return (
    <div className="related-post">
      <h2 className="related-post__head">Related Posts</h2>
      {relatedPosts &&
        relatedPosts.map((item, index) => {
          return <ArticleRelated post={item} key={index}></ArticleRelated>;
        })}
    </div>
  );
}

export default PostDetailRelatedPosts;
