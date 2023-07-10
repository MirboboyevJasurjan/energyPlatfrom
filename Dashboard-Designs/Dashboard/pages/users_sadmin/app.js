let userArray = [];

// Load user data from localStorage if available
if (localStorage.getItem("users")) {
  userArray = JSON.parse(localStorage.getItem("users"));
}

function addUser(event) {
  event.preventDefault();

  let avatarInput = document.getElementById("avatar");
  let avatar = avatarInput.files.length > 0
    ? URL.createObjectURL(avatarInput.files[0])
    : "../../images/avatar_person.jfif";

  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let place = document.getElementById("place").value;
  let role = document.getElementById("role").value;

  let user = {
    avatar: avatar,
    name: name,
    phone: phone,
    role: role,
    place: place
  };

  userArray.push(user);

  // Update the banner image with the uploaded image
  document.getElementById("bannerImage").src = user.avatar;

  renderUserTable();
  resetForm();

  // Save updated user data in localStorage
  localStorage.setItem("users", JSON.stringify(userArray));
}

function renderUserTable() {
  let tableBody = document.getElementById("userTableBody");
  tableBody.innerHTML = "";

  userArray.forEach(function(user, index) {
    let row = document.createElement("tr");

    let avatarCell = document.createElement("td");
    let avatarImage = document.createElement("img");
    avatarImage.src = user.avatar;
    avatarImage.alt = "Avatar";
    avatarImage.width = 50;
    avatarImage.height = 50;
    avatarCell.appendChild(avatarImage);
    row.appendChild(avatarCell);

    let nameCell = document.createElement("td");
    nameCell.textContent = user.name;
    row.appendChild(nameCell);

    let phoneCell = document.createElement("td");
    phoneCell.textContent = user.phone;
    row.appendChild(phoneCell);

    let placeCell = document.createElement("td");
    placeCell.textContent = user.place;
    row.appendChild(placeCell);

    let roleCell = document.createElement("td");
    roleCell.textContent = user.role;
    row.appendChild(roleCell);

    let editCell = document.createElement("td");
    let editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add("edit-button");
    editButton.addEventListener("click", function() {
      editUser(index);
    });
    editCell.appendChild(editButton);
    row.appendChild(editCell);

    let deleteCell = document.createElement("td");
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-button");
    deleteButton.addEventListener("click", function() {
      deleteUser(index);
    });
    deleteCell.appendChild(deleteButton);
    row.appendChild(deleteCell);

    tableBody.appendChild(row);
  });
}

function editUser(index) {
  let user = userArray[index];

  document.getElementById("avatar").value = "";
  document.getElementById("bannerImage").src = user.avatar;
  document.getElementById("name").value = user.name;
  document.getElementById("phone").value = user.phone;
  document.getElementById("place").value = user.place;
  document.getElementById("role").value = user.role;

  let formButton = document.querySelector("#userForm button");
  formButton.textContent = "Save Changes";
  formButton.removeEventListener("click", addUser);
  formButton.addEventListener("click", function(event) {
    event.preventDefault();
    saveChanges(index);
  });

  openUserFormModal();
}

function saveChanges(index) {
  let avatar = document.getElementById("avatar").value;
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let place = document.getElementById("place").value;
  let role = document.getElementById("role").value;

  userArray[index].avatar = avatar;
  userArray[index].name = name;
  userArray[index].phone = phone;
  userArray[index].place = place;
  userArray[index].role = role;

  renderUserTable();
  resetForm();

  // Save updated user data in localStorage
  localStorage.setItem("users", JSON.stringify(userArray));
}

function deleteUser(index) {
  userArray.splice(index, 1);
  renderUserTable();
  resetForm();

  // Save updated user data in localStorage
  localStorage.setItem("users", JSON.stringify(userArray));
}

function resetForm() {
  document.getElementById("avatar").value = "";
  document.getElementById("bannerImage").src = "../../images/avatar_person.jfif";
  document.getElementById("name").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("place").value = "";
  document.getElementById("role").value = "admin";

  let formButton = document.querySelector("#userForm button");
  formButton.textContent = "Add User";
  formButton.removeEventListener("click", saveChanges);
  formButton.addEventListener("click", addUser);
}

function openUserFormModal() {
  let modal = document.getElementById("userFormModal");
  modal.style.display = "block";
}

function closeUserFormModal() {
  let modal = document.getElementById("userFormModal");
  modal.style.display = "none";
}

document.getElementById("userForm").addEventListener("submit", addUser);

// Load initial user data on page load
renderUserTable();
