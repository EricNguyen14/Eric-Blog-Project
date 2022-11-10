function getVal() {
  let xhtml = `<span class="text">???</span>`;
  const val = document.getElementById("fullname").value;
  if (val) {
    xhtml = `<span class="text">` + val + `</span>`;
    document.getElementById("input-value").html(xhmtl);
  }
}
