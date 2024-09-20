let inputArray = [];
function inputFunction() {
  let input = document.getElementById("inputText").value;
  if (input.trim() === "") {
    alert("Please enter a valid task.");
    return;
  } else {
    inputArray.push({text: input});
    document.getElementById("inputText").value = "";
    displayArray();
  }
}
function displayArray() {
  let p = document.getElementById("showValue");
  p.innerHTML = "";
  inputArray.forEach((element, index) => {
    p.innerHTML += `<p> <input type="checkbox" id='cbox-${index}' onclick="strikethrough (${index})" ${
      element.done ? 'checked' : ""
    }>
    <span id='task-${index}' style="text-decoration: ${
      element.done ? "line-through" : "none"
    };">${element.text}</span>
  <span class="material-symbols-outlined deleteIcon" onclick="deleteFuntion(${index})">
    delete
    </span></p>`;
  });
}

function deleteFuntion(index) {
  inputArray.splice(index, 1);
  displayArray();
}

function strikethrough(index) {
  let cbox = document.getElementById(`cbox-${index}`);
  let task = document.getElementById(`task-${index}`);
  if (cbox.checked) {
    inputArray[index].done = true;
    task.style.textDecoration = "line-through";
  } else {
    inputArray[index].done = false;
    task.style.textDecoration = "none";
  }
}