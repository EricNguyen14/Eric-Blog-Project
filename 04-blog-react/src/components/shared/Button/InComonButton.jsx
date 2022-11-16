import Button from "./Button";
function IcmButton() {
  const typeClass = {
    default: "btn btn-default",
    primary: "btn btn-primary",
    size: "large",
  };

  return (
    <>
      <Button type={typeClass}></Button>
    </>
  );
}
export default IcmButton;
{
  /* <a href="#" className="btn btn-default">
              View More
            </a> */
}
// <button className="btn btn-primary btn-size-large">Load more</button>
// href, className , Children, size, type , loading, loadingPos,
