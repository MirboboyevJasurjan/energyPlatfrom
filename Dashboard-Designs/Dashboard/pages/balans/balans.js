let canvas = document.getElementById("myChart");

// Chart
let ctx = canvas.getContext("2d");
let chart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July",'August', 'September','November','December'],
    datasets: [
        {
            label: "Kirim",
            data: [12, 10, 3, 5, 2, 3, 10,5,3,4,6],
            borderColor: "rgba(54, 162, 235, 1)",
            backgroundColor: "rgba(54, 162, 235, 0.5)",
            borderWidth: 1,
          },
          {
            label: "Chiqim",
            data: [2, 9, 6, 5, 8, 1,5,4,2,1,5],
            borderColor: "rgba(255, 162, 235, 1)",
            backgroundColor: "rgba(255, 162, 235, 0.5)",
            borderWidth: 1,
          },
    ],
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
