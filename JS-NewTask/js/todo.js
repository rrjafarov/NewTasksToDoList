const viewBtn = document.querySelector(".view-btn");
const taskSection = document.querySelector(".task");
const close = document.querySelector(".close");
const tasks = document.querySelector(".tasksBlock");
const formControl1 = document.querySelector(".form-control1");
const formControl2 = document.querySelector(".form-control2");

// Show task
viewBtn.addEventListener("click", function () {
  taskSection.style.display = "block";
});
close.addEventListener("click", function () {
  taskSection.style.display = "none";
});
// Show task



function addNewTask(element) {
  const formControl1 = document.querySelector(".form-control1");
  const formControl1Value = formControl1.value;
  const formControl2 = document.querySelector(".form-control2");
  const formControl2Value = formControl2.value;
  const taskView = `    
    <div class="input-group mt-4">
        <input type="text"  aria-label="Text input with checkbox" value="${formControl1Value}">
        <input type="text"  aria-label="Text input with checkbox" value="${formControl2Value}">
        <button class="btn btn-outline-danger" type="button" onclick="deleteTask(this)">Delete</button>
    </div>
  `;
  tasks.innerHTML += taskView;
}



// Delete Task
function deleteTask(element) {
  const parentElement = element.parentElement;
  tasks.removeChild(parentElement);
}
