function showDialogDonate() {
  document.querySelector(`#popupQR`).style.display = "flex";
  disableScroll();
  document.body.style.pointerEvents = "none";
}
function hideDialogDonate() {
  document.querySelector(`#popupQR`).style.display = "none"; // Ẩn popup
  enableScroll(); // Bật lại cuộn trang khi popup bị ẩn
  document.body.style.pointerEvents = "auto"; // Cho phép tương tác với các phần tử khác trên trang
}
function disableScroll() {
  document.body.style.overflowY = "hidden";
  document.querySelector("html").style.overflowY = "hidden";
  document.body.addEventListener("touchmove", preventDefault, {
    passive: false,
  });
}

function enableScroll() {
  document.body.style.overflowY = "auto";
  document.querySelector("html").style.overflowY = "auto";
  document.body.removeEventListener("touchmove", preventDefault);
}

function preventDefault(e) {
  e.preventDefault();
}
