import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actGetGeneralPostAsync } from "../../store/post/action";
import ArticleItem from "../ArticleItem";
import Button from "../shared/Button";
import MainTitle from "../shared/MainTitle";

function ArticleGeneral() {
  const generalPosts = useSelector((state) => state.POST.listPostGeneral);
  const page = useSelector((state) => state.POST.page);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const handleLoadMore = () => {
    setIsLoading(true);
    dispatch(actGetGeneralPostAsync(page + 1)).then((res) => {
      if (res === undefined) {
        setIsLoading(false);
      }
    });
  };

  return (
    <div className="articles-list section">
      <div className="tcl-container">
        {/* Main Title */}
        <MainTitle btnLabel="Xem them">Bai Viet Tong Hop</MainTitle>
        {/* End Main Title */}
        {/* End Row News List */}
        <div className="tcl-row">
          {generalPosts &&
            generalPosts.map((item, index) => {
              return (
                <div key={index} className="tcl-col-12 tcl-col-md-6">
                  <ArticleItem isStyleCard isShowAvatar={false} post={item} />
                </div>
              );
            })}
        </div>
        {/* End Row News List */}
        <div className="text-center">
          {page < 10 && (
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

export default ArticleGeneral;
