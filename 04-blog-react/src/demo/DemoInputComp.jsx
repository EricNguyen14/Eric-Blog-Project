import "../components/shared/Input/input.css";
import Input from "../components/shared/Input/index";
function DemoInputComp() {
  return (
    <div class="tcl-container">
      <Input label="UserName" type="text" />
      <Input label="Password" type="password" />
      <Input type="text" />
      <Input type="text" isSearch />
    </div>
  );
}
export default DemoInputComp;
