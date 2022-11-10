import { useState } from "react";
function DomBasic() {
  const [fullname, setFullname] = useState("???");
  const handleChange = (event) => {
    setFullname(event.target.value);
  };

  return (
    <>
      <input type="text" id="fullname" onChange={handleChange} /> <br />
      <h3 id="input-value">
        Giá trị nhập của user: <span className="text">{fullname}</span>
      </h3>
    </>
  );
}

export default DomBasic;
