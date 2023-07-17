const sideMenu = document.querySelector('aside');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');

const darkMode = document.querySelector('.dark-mode');

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
});

darkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode-variables');
    darkMode.querySelector('span:nth-child(1)').classList.toggle('active');
    darkMode.querySelector('span:nth-child(2)').classList.toggle('active');
});

// Render user

const workerList = [
    {
        name: "John Doe",
        gender: "male",
        age: 35,
        skillLevel: "intermediate",
        location: "new-york",
        salary: 8000
    },
    {
        name: "Jane Smith",
        gender: "female",
        age: 28,
        skillLevel: "beginner",
        location: "london",
        salary: 6000
    },
    {
        name: "Michael Johnson",
        gender: "male",
        age: 42,
        skillLevel: "advanced",
        location: "tokyo",
        salary: 12000
    },
    {
        name: "Emily Davis",
        gender: "female",
        age: 31,
        skillLevel: "intermediate",
        location: "new-york",
        salary: 9000
    },
    {
        name: "David Wilson",
        gender: "male",
        age: 52,
        skillLevel: "advanced",
        location: "london",
        salary: 15000
    },
    {
        name: "Olivia Lee",
        gender: "female",
        age: 24,
        skillLevel: "beginner",
        location: "tokyo",
        salary: 5000
    },
    {
        name: "Daniel Anderson",
        gender: "male",
        age: 38,
        skillLevel: "intermediate",
        location: "new-york",
        salary: 7000
    },
    {
        name: "Sophia Brown",
        gender: "female",
        age: 29,
        skillLevel: "advanced",
        location: "london",
        salary: 11000
    },
    {
        name: "James Taylor",
        gender: "male",
        age: 47,
        skillLevel: "intermediate",
        location: "tokyo",
        salary: 10000
    },
    {
        name: "Isabella Clark",
        gender: "female",
        age: 33,
        skillLevel: "beginner",
        location: "new-york",
        salary: 5500
    }
];

const genderFilter = document.getElementById("gender-filter");
const ageFilter = document.getElementById("age-filter");
const skillFilter = document.getElementById("skill-filter");
const locationFilter = document.getElementById("location-filter");
const salaryFilter = document.getElementById("salary-filter");
const workerListContainer = document.getElementById("worker-list-container");

function filterWorkers() {
    const filteredWorkers = workerList.filter(worker => {
        const selectedGender = genderFilter.value;
        const selectedAge = ageFilter.value;
        const selectedSkill = skillFilter.value;
        const selectedLocation = locationFilter.value;
        const selectedSalary = salaryFilter.value;

        const isGenderMatch = selectedGender === "" || worker.gender === selectedGender;
        const isAgeMatch =
            selectedAge === "" ||
            (selectedAge === "below-30" && worker.age < 30) ||
            (selectedAge === "30-50" && worker.age >= 30 && worker.age <= 50) ||
            (selectedAge === "above-50" && worker.age > 50);
        const isSkillMatch = selectedSkill === "" || worker.skillLevel === selectedSkill;
        const isLocationMatch = selectedLocation === "" || worker.location === selectedLocation;
        const isSalaryMatch =
            selectedSalary === "" ||
            (selectedSalary === "below-5000" && worker.salary < 5000) ||
            (selectedSalary === "5000-10000" && worker.salary >= 5000 && worker.salary <= 10000) ||
            (selectedSalary === "above-10000" && worker.salary > 10000);

        return isGenderMatch && isAgeMatch && isSkillMatch && isLocationMatch && isSalaryMatch;
    });

    renderWorkerList(filteredWorkers);
}

function renderWorkerList(workers) {
    workerListContainer.innerHTML = "";

    if (workers.length === 0) {
        const noResultsMessage = document.createElement("p");
        noResultsMessage.textContent = "No workers found.";
        workerListContainer.appendChild(noResultsMessage);
    } else {
        workers.forEach(worker => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${worker.name}</td>
                <td>${worker.gender}</td>
                <td>${worker.age}</td>
                <td>${worker.skillLevel}</td>
                <td>${worker.location}</td>
                <td>${worker.salary}</td>
            `;
            workerListContainer.appendChild(row)
        });
    }
}

genderFilter.addEventListener("change", filterWorkers);
ageFilter.addEventListener("change", filterWorkers);
skillFilter.addEventListener("change", filterWorkers);
locationFilter.addEventListener("change", filterWorkers);
salaryFilter.addEventListener("change", filterWorkers);

renderWorkerList(workerList);
