export default function ArticleItemDesc({ desc }) {
  let newStr = desc && desc.rendered.replace("<p>", "");
  let newStr2 = newStr.replace("</p>", "");
  let newArr = newStr2.split(" ").splice(0, 20).join(" ");

  return (
    <p className="article-item__desc">{newArr !== desc && newArr + "..."}</p>
  );
}
