import ArticleItem from "../ArticleItem";
import MainTitle from "../shared/MainTitle/index";
import "./latest-news-list.css";
function ArticleLatest() {
  return (
    <>
      {/* Latest News */}
      <div className="latest-news section">
        <div className="tcl-container">
          {/* Main Title */}
          <MainTitle />
          {/* End Main Title */}
          {/* Latest News List */}
          <div className="latest-news__list spacing">
            {/* Latest news card */}
            <div className="latest-news__card">
              <ArticleItem />
            </div>
            <div className="latest-news__card">
              <ArticleItem />
            </div>
            <div className="latest-news__card">
              <ArticleItem />
            </div>

            {/* End Latest news card */}
          </div>
          {/* End Latest News List */}
        </div>
      </div>
      {/* End Latest News */}
    </>
  );
}
export default ArticleLatest;
