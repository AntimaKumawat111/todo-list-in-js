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
  let p = document.getElementById("showValue");
  p.innerHTML = "";
  inputArray.forEach((element, index) => {
    p.innerHTML += `<p> <input type="checkbox" class='cbox' id='cbox-${index}'> ${element} 
  <span class="material-symbols-outlined deleteIcon" onclick="deleteFuntion(${index})">
    delete
    </span></p>`;
  });
}

function deleteFuntion(index) {
  let cbox = document.getElementById(`cbox-${index}`);
  if (cbox.checked) {
    inputArray.splice(index, 1);
    displayArray();
  } else {
        alert("Check the box");
  }
}