// import { Link } from 'react-router-dom';

import { useSelector } from "react-redux";

export default function ArticleItemCategories({ categoriesId }) {
  const categories = useSelector((state) => state.CATEGORY.categories);
  let result = {};
  if (categories) {
    categories.forEach((item) => {
      result[item.id] = item;
    });
  }
  console.log(result, result[9]);
  return (
    <ul className="article-item__categories">
      {categoriesId &&
        categories.length > 0 &&
        categoriesId.map((categoryId, index) => {
          const newCategory = result[categoryId];
          return (
            <li key={index}>
              <a href="/" className="btn btn-category">
                {newCategory.name}
              </a>
            </li>
          );
        })}
    </ul>
  );
}
