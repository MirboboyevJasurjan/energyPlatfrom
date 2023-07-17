// Get the address select element and the custom address input element
let addressSelect = document.getElementById("addressSelect");
let customAddressInput = document.getElementById("customAddressInput");

// Event listener for address select change
addressSelect.addEventListener("change", function() {
  if (addressSelect.value === "custom") {
    // If "Enter Custom Address" is selected, show the custom address input field
    customAddressInput.style.display = "block";
  } else {
    // If a pre-defined address is selected, hide the custom address input field
    customAddressInput.style.display = "none";
  }
});

// Function to retrieve the selected address
function getAddress() {
  if (addressSelect.value === "custom") {
    // If "Enter Custom Address" is selected, return the value of the custom address input
    return customAddressInput.value;
  } else {
    // Otherwise, return the value of the selected address option
    return addressSelect.value;
  }
}

// Example usage: get the address when the user clicks a button
document.getElementById("submitButton").addEventListener("click", function() {
  let address = getAddress();
//   console.log("Selected/Custom Address:", address);
});



// Set default value for the phone number input
let phoneNumberInput = document.getElementById("phoneNumberInput");
phoneNumberInput.value = "+998";
phoneNumberInput.readOnly = false;

// Handle phone number input changes
phoneNumberInput.addEventListener("input", function() {
  let phoneNumber = phoneNumberInput.value;

  // Remove non-digit characters from the phone number
  let phoneNumberDigits = phoneNumber.replace(/\D/g, ""); // Remove non-digit characters

  if (phoneNumberDigits.length === 12) {
    let formattedPhoneNumber = "+998" + phoneNumberDigits;
    console.log("Phone Number:", formattedPhoneNumber);
  } else {
    console.log("Invalid Phone Number");
  }
});


// // Modal

// // Add activeForm class when form-box-client or its contents are clicked
// document.addEventListener("click", function(event) {
//   const formBoxClient = document.querySelector(".form-box-client");
//   const activeForm = document.querySelector(".activeForm");

//   // Check if the clicked element is form-box-client or its contents
//   if (event.target.closest(".form-box-client")) {
//     formBoxClient.classList.add("activeForm");
//   } else {
//     // Remove activeForm class if the clicked element is not part of form-box-client
//     if (activeForm && !formBoxClient.contains(event.target)) {
//       activeForm.classList.remove("activeForm");
//     }
//   }
// });

// // Remove activeForm class when submitButton is clicked
// const submitButton = document.getElementById("submitButton");
// submitButton.addEventListener("click", function() {
//   const formBoxClient = document.querySelector(".form-box-client");
//   console.log('button');
//   if (formBoxClient.classList.contains("activeForm")) {
//     formBoxClient.classList.remove("activeForm");
//   }
// });


const closeModalBtn = document.getElementById('closeModalBtn');
const formBoxClient = document.querySelector('.form-box-client');
const submitButton = document.getElementById('submitButton');
const formInputs = formBoxClient.querySelectorAll('.selectUserForm');

const removeActiveForm = () => {
  formBoxClient.classList.remove('activeForm');
};

const addActiveForm = () => {
  formBoxClient.classList.add('activeForm');
};

closeModalBtn.addEventListener('click', removeActiveForm);

document.addEventListener('click', (event) => {
  if (!event.target.closest('.form-box-client')) {
    removeActiveForm();
  }
});

formInputs.forEach((input) => {
  input.addEventListener('click', addActiveForm);
});
submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  removeActiveForm();

  // Retrieve existing data from localStorage
  const existingData = JSON.parse(localStorage.getItem('formData'));

  // Collect data from form inputs
  const newData = {
    workType: document.getElementById('workType').value,
    taskType: document.getElementById('taskType').value,
    address: document.getElementById('addressSelect').value != 'custom' ? document.getElementById('addressSelect').value : document.getElementById('customAddressInput').value,
    phoneNumber: document.getElementById('phoneNumberInput').value
  };

  // Add the new order to the existing data
  const updatedData = existingData ? [...existingData, newData] : [newData];

  // Save the updated data to localStorage
  localStorage.setItem('formData', JSON.stringify(updatedData));
});


// Retrieve data from localStorage in another file
// const formData = JSON.parse(localStorage.getItem('formData'));
// console.log('Retrieved Form Data:', formData); 