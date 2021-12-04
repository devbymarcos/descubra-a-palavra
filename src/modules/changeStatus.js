export default function changeStatus(number) {
  const status = document.querySelector(".status");

  switch (number) {
    case 3:
      status.innerHTML = `<i class="fas fa-sad-tear"></i>`;
      setTimeout(() => {
        status.innerHTML = `<i class="fas fa-smile-beam"></i>`;
      }, 2000);
      break;
    case 2:
      status.innerHTML = `<i class="fas fa-sad-tear"></i>`;
      setTimeout(() => {
        status.innerHTML = `<i class="fas fa-smile-beam"></i>`;
      }, 2000);
      break;
    case 1:
      status.innerHTML = `<i class="fas fa-sad-tear"></i>`;
      setTimeout(() => {
        status.innerHTML = `<i class="fas fa-smile-beam"></i>`;
      }, 2000);
      break;
    case 0:
      status.innerHTML = `<i class="fas fa-sad-cry"></i>`;

      break;
    case 6:
      status.innerHTML = `<i class="fas fa-laugh-beam"></i>`;
      break;
  }
}
