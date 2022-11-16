import ArticleItem from "../ArticleItem";
import MainTitle from "../shared/MainTitle/index";
import "./latest-news-list.css";
const listArticle = [
  {
    typeArticle: "ArticleLatest",
    date: "June 03, 2019",
    time: "0 min",
    authorName: " Author1",
    isShowAuthorImg: true,
    thumb: (
      <img src="assets/images/blog-1.jpg" alt="assets/images/blog-1.jpg" />
    ),
    title: "Học Lập Trình Tại ZendVn",
  },
  {
    typeArticle: "ArticleLatest",
    date: "June 03, 2021",
    time: "20 min",
    authorName: " Author2",
    isShowAuthorImg: true,
    thumb: (
      <img src="assets/images/blog-1.jpg" alt="assets/images/blog-1.jpg" />
    ),
    title: "Học Lập Trình Tại ZendVn",
  },
  {
    typeArticle: "ArticleLatest",
    date: "June 03, 2022",
    time: "2 min",
    authorName: " Author3",
    isShowAuthorImg: true,
    thumb: (
      <img src="assets/images/blog-1.jpg" alt="assets/images/blog-1.jpg" />
    ),
    title: "Học Lập Trình Tại ZendVn",
  },
];

function ArticleLatest() {
  return (
    <>
      {/* Latest News */}
      <div className="latest-news section">
        <div className="tcl-container">
          {/* Main Title */}
          <MainTitle type=""> Lastest Article</MainTitle>

          {/* End Main Title */}
          {/* Latest News List */}
          <div className="latest-news__list spacing">
            {/* Latest news card */}
            {listArticle.map((item, index) => (
              <ArticleItem
                key={index}
                thumb={item.thumb}
                title={item.title}
                typeArticle={item.typeArticle}
                date={item.date}
                time={item.time}
                authorName={item.authorName}
                isShowAuthorImg
              />
            ))}

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
