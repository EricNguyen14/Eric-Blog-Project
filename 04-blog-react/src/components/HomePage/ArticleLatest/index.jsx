import ArticleLatestItems from "./ArticleLatestItems";
import MainTile from "./MainTile";
function ArticleLatest() {
  return (
    <>
      {/* Latest News */}
      <div className="latest-news section">
        <div className="tcl-container">
          {/* Main Title */}
          <MainTile />
          {/* End Main Title */}
          {/* Latest News List */}
          <div className="latest-news__list spacing">
            {/* Latest news card */}
            <ArticleLatestItems></ArticleLatestItems>
            <ArticleLatestItems></ArticleLatestItems>
            <ArticleLatestItems></ArticleLatestItems>
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
