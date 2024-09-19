let inputArray = [];
function inputFunction() {
  let input = document.getElementById("inputText").value;
  if (input.trim() === "") {
    alert("Please enter a valid task.");
    return;
  } else {
    inputArray.push(input);
    document.getElementById("inputText").value = "";
    displayArray();
  }
}
function displayArray() {
  let p = document.getElementById("p1");
  p.innerHTML = "";
  inputArray.forEach((element) => {
    p.innerHTML += `<p> <input type="checkbox"> ${element}
  <span class="material-symbols-outlined deleteIcon" onclick="deleteFuntion(this)" >
    delete
    </span></p>`;
  });
}

function deleteFuntion(element) {
  element.parentElement.style.display = "none";
}
