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


workerlist.forEach(person => {
    const tr = document.createElement('tr');
    const trContent = `
        <td>${person.productName}</td>
        <td>${person.productNumber}</td>
        <td>${person.paymentStatus}</td>
        <td class="${person.status === 'Declined' ? 'danger' : person.status === 'Pending' ? 'warning' : 'primary'}">${person.status}</td>
        <td class="primary">Details</td>
    `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
    console.log(200);
});
console.log(200);
