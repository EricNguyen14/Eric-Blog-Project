import Button from "../Button/Button";
import "../MainTitle/main-title.css";
function MainTile({ children, type, btn }) {
  let clsName = "main-title spacing ";
  return (
    <div className={clsName + type}>
      <h2>{children}</h2>
      {btn && (
        <Button as="a" type="default" href="/">
          View More
        </Button>
      )}
    </div>
  );
}
export default MainTile;
