import ArticleLatest from "../components/HomePage/ArticleLatest";
import ArticlePopular from "../components/HomePage/ArticlePopular";
import ArticleGeneral from "../components/HomePage/ArticleGeneral";
import "../components/HomePage/article-item.css";
import "../components/HomePage/ArticleLatest/latest-news-list.css";
import "../components/HomePage/ArticlePopular/popular-news-list.css";
import "../components/HomePage/ArticleLatest/main-title.css";
import "../components/Button/button.css";

function HomePage() {
  return (
    <>
      <ArticleLatest></ArticleLatest>
      <ArticlePopular></ArticlePopular>
      <ArticleGeneral></ArticleGeneral>
    </>
  );
}

export default HomePage;
