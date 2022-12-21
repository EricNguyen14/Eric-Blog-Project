import { useDispatch, useSelector } from "react-redux";
import ArticleItem from "../components/ArticleItem";
import Button from "../components/shared/Button";
import MainTitle from "../components/shared/MainTitle";
import { useEffect, useState } from "react";
import { actGetSearchPostAsync } from "../store/post/action";
import { useLocation } from "react-router-dom";

function SearchPage() {
  const { search } = useLocation();
  let searchValue = new URLSearchParams(search).get("keyword");
  const [isLoading, setIsLoading] = useState(false);
  const searchPosts = useSelector((state) => state.POST.listPostSearch);
  const page = useSelector((state) => state.POST.page);
  const totalPage = useSelector((state) => state.POST.totalPage);
  const isShowLoadMore = page < totalPage ? true : false;
  const handleLoadMore = () => {
    setIsLoading(true);
    dispatch(actGetSearchPostAsync(searchValue, page + 1)).then((res) => {
      if (res === undefined) {
        setIsLoading(false);
      }
    });
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actGetSearchPostAsync(searchValue, 1)).then((res) => {
      if (res === undefined) {
        setIsLoading(false);
      }
    });
  }, [dispatch, searchValue]);

  return (
    <div className="articles-list section">
      <div className="tcl-container">
        <MainTitle type="search">
          {searchPosts.length} kết quả tìm kiếm với từ khóa "{searchValue}"
        </MainTitle>

        <div className="tcl-row tcl-jc-center">
          {searchPosts &&
            searchPosts.map((item, index) => {
              return (
                <div key={index} className="tcl-col-12 tcl-col-md-8">
                  <ArticleItem
                    searchValue={searchValue}
                    post={item}
                    key={index}
                    isStyleCard
                    isShowCategoies
                    isShowAvatar={false}
                    isShowDesc={false}
                  />
                </div>
              );
            })}
        </div>

        <div className="text-center">
          {isShowLoadMore && (
            <Button
              type="primary"
              size="large"
              loading={isLoading}
              onClick={handleLoadMore}
            >
              Tải thêm
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
