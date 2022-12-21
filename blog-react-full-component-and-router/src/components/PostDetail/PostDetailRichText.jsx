function PostDetailRichText({ desc, content }) {
  return (
    <div className="rte" dangerouslySetInnerHTML={{ __html: content }}></div>
  );
}

export default PostDetailRichText;
