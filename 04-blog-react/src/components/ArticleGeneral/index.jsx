import ArticleItem from "../ArticleItem";
import Button from "../shared/Button/Button";
import MainTitle from "../shared/MainTitle";
const listArticle = [
  {
    typeArticle: "ArticleGeneral",
    stylePos: "style-card",
    date: "June 03, 2021",
    time: "20 min",
    authorName: " Author3",
    thumb: (
      <img src="assets/images/blog-1.jpg" alt="assets/images/blog-1.jpg" />
    ),
    title: "Học Lập Trình Tại ZendVn",
  },
  {
    typeArticle: "ArticleGeneral",
    stylePos: "style-card",
    date: "June 03, 2021",
    time: "20 min",
    authorName: " Author3",
    thumb: (
      <img src="assets/images/blog-1.jpg" alt="assets/images/blog-1.jpg" />
    ),
    title: "Học Lập Trình Tại ZendVn",
  },
  {
    typeArticle: "ArticleGeneral",
    stylePos: "style-card",
    date: "June 03, 2021",
    time: "20 min",
    authorName: " Author3",
    thumb: (
      <img src="assets/images/blog-1.jpg" alt="assets/images/blog-1.jpg" />
    ),
    title: "Học Lập Trình Tại ZendVn",
  },
  {
    typeArticle: "ArticleGeneral",
    stylePos: "style-card",
    date: "June 03, 2021",
    time: "20 min",
    authorName: " Author3",
    thumb: (
      <img src="assets/images/blog-1.jpg" alt="assets/images/blog-1.jpg" />
    ),
    title: "Học Lập Trình Tại ZendVn",
  },
  {
    typeArticle: "ArticleGeneral",
    stylePos: "style-card",
    date: "June 03, 2021",
    time: "20 min",
    authorName: " Author3",
    thumb: (
      <img src="assets/images/blog-1.jpg" alt="assets/images/blog-1.jpg" />
    ),
    title: "Học Lập Trình Tại ZendVn",
  },
  {
    typeArticle: "ArticleGeneral",
    stylePos: "style-card",
    date: "June 03, 2021",
    time: "20 min",
    authorName: " Author3",
    thumb: (
      <img src="assets/images/blog-1.jpg" alt="assets/images/blog-1.jpg" />
    ),
    title: "Học Lập Trình Tại ZendVn",
  },
];

function ArticleGeneral() {
  return (
    <div className="articles-list section">
      <div className="tcl-container">
        {/* Main Title */}
        <MainTitle
          type="d-flex tcl-jc-between tcl-ais-center"
          btn
          btnTitle="View More"
        >
          News List
        </MainTitle>

        {/* End Main Title */}
        {/* End Row News List */}
        <div className="tcl-row">
          {listArticle.map((item, index) => (
            <ArticleItem
              key={index}
              typeArticle={item.typeArticle}
              stylePos={item.stylePos}
              date={item.date}
              time={item.time}
              authorName={item.authorName}
              thumb={item.thumb}
              title={item.title}
            />
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button type="primary" size="large" as="button" isShowIcon>
            {" "}
            Load More
          </Button>
        </div>
      </div>
    </div>
  );
}
export default ArticleGeneral;
