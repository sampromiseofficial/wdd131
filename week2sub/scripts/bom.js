const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener("click", () => {
  if (input.value.trim() !== "") {
    const li = document.createElement("li");
    const deleteButton = document.createElement("button");

    li.textContent = input.value;
    deleteButton.textContent = "❌";

    li.append(deleteButton);
    list.append(li);

    // Clear the input field and focus
    input.value = "";
    input.focus();

    // Add delete functionality
    deleteButton.addEventListener("click", () => {
      list.removeChild(li);
    });
  }
});







