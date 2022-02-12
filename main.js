// 初始變數
const list = document.querySelector("#my-todo");
const addBtn = document.querySelector("#add-btn");
const input = document.querySelector("#new-todo");
const doneList = document.querySelector("#done");

// 資料
const todos = [
  "Hit the gym",
  "Read a book",
  "Buy eggs",
  "Organize office",
  "Pay bills"
];

for (let todo of todos) {
  addItem(todo);
}

// 函式
function addItem(text) {
  let newItem = document.createElement("li");
  newItem.innerHTML = `  
    <li><label for="todo">${text}</label>
    <i class="delete fa fa-trash"></i></li>
  `; //外層新增li標籤
  list.appendChild(newItem);
}

// Create
addBtn.addEventListener("click", function () {
  const inputValue = input.value;

  if (inputValue.replace(/\s+/g, "").length > 0) {
    addItem(inputValue);
    input.value = "";
  }
});

input.addEventListener("keypress", function () {
  const inputValue = input.value;

  if (event.key === "Enter") {
    if (inputValue.replace(/\s+/g, "").length > 0) {
      addItem(inputValue);
      input.value = "";
    }
  }
});

// Delete and check
list.addEventListener("click", function (event) {
  const target = event.target;

  if (target.classList.contains("delete")) {
    let parentElement = target.parentElement;
    parentElement.remove();
  } else if (target.tagName === "LABEL") {
    target.classList.toggle("checked");
    doneList.append(target.parentElement);
  }
});

doneList.addEventListener("click", function (event) {
  const target = event.target;

  if (target.classList.contains("delete")) {
    let parentElement = target.parentElement;
    parentElement.remove();
  } else if (target.tagName === "LABEL") {
    target.classList.toggle("checked");
    list.append(target.parentElement);
  }
});
