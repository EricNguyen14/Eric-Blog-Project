import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ArticleGeneral from "../components/ArticleGeneral";
import ArticleLatest from "../components/ArticleLatest";
import ArticlePopular from "../components/ArticlePopular";
import {
  actGetGeneralPostAsync,
  actGetLatestPostAsync,
  actGetPopularPostAsync,
} from "../store/post/action";
import { actGetMenuAsync } from "../store/menu/action";

function HomePage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actGetLatestPostAsync());
    dispatch(actGetPopularPostAsync());
    dispatch(actGetGeneralPostAsync(1));
    dispatch(actGetMenuAsync());
  }, [dispatch]);
  return (
    <>
      <ArticleLatest />
      <ArticlePopular />
      <ArticleGeneral />
    </>
  );
}

export default HomePage;
