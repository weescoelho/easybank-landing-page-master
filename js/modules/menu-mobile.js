export default function initMenuMobile() {
  const openButton = document.querySelector('[data-mobile="open"]');
  const closeButton = document.querySelector('[data-mobile="close"]');
  const modalContainer = document.querySelector('[data-mobile="container"]');

  if (openButton && closeButton && modalContainer) {
    function toggleModal(event) {
      event.preventDefault();
      modalContainer.classList.toggle("active");
      openButton.classList.toggle("active")
      closeButton.classList.toggle("active")
    }

    function clickLeaveModal(event) {
      if (event.target === this) toggleModal(event);
    }

    openButton.addEventListener("click", toggleModal);
    closeButton.addEventListener("click", toggleModal);
    modalContainer.addEventListener("click", clickLeaveModal);
  }
}
