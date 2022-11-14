import ArticleLatest from "../components/ArticleLatest";
import ArticlePopular from "../components/ArticlePopular";
import ArticleGeneral from "../components/ArticleGeneral";

import "../components/ArticlePopular/popular-news-list.css";

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
