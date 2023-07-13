var addButton = document.getElementById("addButton");
var taskInput = document.getElementById("taskInput");
var tasksContainer = document.getElementById("tasksContainer");

addButton.addEventListener("click", function () {
  tasksContainer.innerHTML += `
  <li
    class="d-flex align-items-center gap-3 px-3 py-2 bg-white shadow border-bottom"
  >
    <input type="checkbox" />
    <h3 class="h5 m-0">${taskInput.value}</h3>
    <button class="close ms-auto">
      <i class="bi bi-x-lg"></i>
    </button>
  </li>
  `;
});

console.log("Ahmed");
