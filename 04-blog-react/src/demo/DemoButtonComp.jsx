import Button from "../components/shared/Button/Button";

function DemoButtonComp() {
  return (
    <div className="tcl-container">
      <Button type="default">Button</Button>
      <Button type="category">Button2</Button>
      <Button type="primary">Button3</Button>
      <Button type="primary" size="large">
        Button3
      </Button>
      <Button type="primary" size="large" isShowIcon={true}>
        Button3
      </Button>
      <Button type="primary" size="large" isShowIcon={true} iconPos="right">
        Button3
      </Button>
      <Button
        type="primary"
        size="large"
        onClick={() => {
          console.log("123");
        }}
      >
        ButtonOnclik
      </Button>
      <Button
        type="primary"
        size="large"
        isShowIcon={true}
        iconPos="right"
        className="Hello"
      >
        ButtonWithCustomClass
      </Button>

      <Button type="category" as="a" href="google.com">
        Button2
      </Button>
      <Button type="category" as="a" href="google.com" target="_blank">
        Button2
      </Button>
    </div>
  );
}
export default DemoButtonComp;
