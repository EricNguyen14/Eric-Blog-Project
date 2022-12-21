import Input from "../shared/Input";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function HeaderSearch() {
  let history = useHistory();

  const [searchValue, setSearchValue] = useState("");
  const handleChangeValue = (e) => {
    setSearchValue(e.target.value);
  };
  const handleSubmitForm = (e) => {
    e.preventDefault();
    history.push("/search?keyword=" + searchValue);
  };

  return (
    <div className="tcl-col-4">
      {/* Header Search */}
      <form onSubmit={handleSubmitForm}>
        <Input
          value={searchValue}
          onChange={handleChangeValue}
          type="search"
          placeholder="Nhap gia tri search ..."
        />
      </form>
    </div>
  );
}

export default HeaderSearch;
