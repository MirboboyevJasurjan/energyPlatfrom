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
})




// Rendering table 
const formData = JSON.parse(localStorage.getItem('formData'));
let workStatus = 'primary'
let Orders = formData

Orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent = `
        <td>${order.workType}</td>
        <td>${order.taskType}</td>
        <td>${order.address}</td>
        <td>${order.phoneNumber}</td>
        <td class="${ workStatus === 'Declined' ? 'danger' : workStatus === 'Pending' ? 'warning' : 'primary'}"> ${workStatus} </td>
        <td class="primary">Details</td>
    `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
});
