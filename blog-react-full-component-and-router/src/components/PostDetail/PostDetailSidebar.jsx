import PostDetailAuthor from "./PostDetailAuthor";
import PostDetailRelatedPosts from "./PostDetailRelatedPosts";

function PostDetailSidebar({ authorName }) {
  return (
    <div className="post-detail__side">
      <PostDetailAuthor authorName={authorName} />
      <div className="spacing" />
      <PostDetailRelatedPosts />
    </div>
  );
}

export default PostDetailSidebar;
