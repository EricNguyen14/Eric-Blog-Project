// import { useParams } from 'react-router-dom';
import React from "react";
import PostDetailContent from "../components/PostDetail/PostDetailContent";
import PostDetailHead from "../components/PostDetail/PostDetailHead";
import PostDetailSidebar from "../components/PostDetail/PostDetailSidebar";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actGetDetailPostAsync } from "../store/post/action";
import { useEffect } from "react";
function PostDetailPage() {
  let { slug } = useParams();
  const detailPost = useSelector((state) => state.POST.listPostDetail);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actGetDetailPostAsync(slug));
  }, [dispatch, slug]);
  if (!detailPost) {
    return <></>;
  }
  const { title, thumb, desc, date, authorName, content } = detailPost;
  return (
    <main className="post-detail">
      <div className="spacing" />

      <PostDetailHead date={date} title={title} authorName={authorName} />

      <div className="spacing" />

      <div className="post-detail__fluid">
        <div className="tcl-container">
          <div className="post-detail__wrapper">
            <PostDetailContent
              thumb={thumb}
              desc={desc?.rendered}
              content={content}
            />

            <PostDetailSidebar authorName={authorName} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default PostDetailPage;
