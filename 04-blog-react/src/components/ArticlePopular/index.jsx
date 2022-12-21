import MainTitle from "../shared/MainTitle";
import ArticleItem from "../ArticleItem";

function ArticlePopular() {
  return (
    <>
      {/* Popular News Section */}
      <div className="popular-news section bg-white-blue">
        <div className="tcl-container">
          {/* Main Title */}
          <MainTitle
            type="d-flex tcl-jc-between tcl-ais-center"
            size="large"
            btn
            btnTitle="View More"
          >
            Popular Article
          </MainTitle>

          {/* End Main Title */}
          <div className="popular-news__list spacing">
            <div className="popular-news__list--left">
              <div className="popular-news__list--row">
                {/* Popular news card */}
                <ArticleItem
                  thumb={
                    <img
                      src="assets/images/blog-1.jpg"
                      alt="assets/images/blog-1.jpg"
                    />
                  }
                  title="Meejt"
                  typeArticle="ArticlePopular"
                  stylePos="style-card"
                  isShowAuthorImg
                  date="June 03, 2021"
                  time="1 min "
                  authorName="Hoang Nguyen"
                  itemCategory="/"
                  itemStats
                  itemDesc={"decribeitem1"}
                ></ArticleItem>
              </div>
              <div className="popular-news__list--row">
                <ArticleItem
                  thumb={
                    <img
                      src="assets/images/blog-1.jpg"
                      alt="assets/images/blog-1.jpg"
                    />
                  }
                  title="Học Lập Trình Tại ZendVn"
                  typeArticle="ArticlePopular"
                  stylePos="style-card"
                  isShowAuthorImg
                  date="June 03, 2021"
                  time="1 min "
                  authorName="Hoang Nguyen"
                  itemCategory="/"
                  itemStats
                  itemDesc={"decribeitem2"}
                ></ArticleItem>
              </div>
              {/* End Popular news card */}
            </div>
            <div className="popular-news__list--right">
              <ArticleItem
                thumb={
                  <img
                    src="assets/images/blog-1.jpg"
                    alt="assets/images/blog-1.jpg"
                  />
                }
                title="Học Lập Trình Tại ZendVn"
                typeArticle="ArticlePopular"
                stylePos="style-card"
                style="style-row"
                isShowAuthorImg
                date="June 03, 2021"
                time="1 min "
                authorName="Hoang Nguyen"
                itemCategory
                itemStats
                itemDesc
              ></ArticleItem>
            </div>
          </div>
        </div>
      </div>
      {/* End Popular News Section */}
    </>
  );
}
export default ArticlePopular;
