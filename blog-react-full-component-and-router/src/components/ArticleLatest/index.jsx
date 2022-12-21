import { useSelector } from "react-redux";
import ArticleItem from "../ArticleItem";
import MainTitle from "../shared/MainTitle";
import "./latest-news-list.css";

function ArticleLatest() {
  const latestPosts = useSelector((state) => state.POST.listPostLastest);

  return (
    <div className="latest-news section">
      <div className="tcl-container">
        <MainTitle>Bài viết mới nhất</MainTitle>
        <div className="latest-news__list spacing">
          {latestPosts &&
            latestPosts.map((item, index) => {
              return (
                <div key={index} className="latest-news__card">
                  <ArticleItem post={item} />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default ArticleLatest;
