const ctx = document.getElementById("myChart");

new Chart(ctx, {
  type: "radar",
  data: {
    labels: ["C/C++", "Python", "HTML", "CSS", "Javascript", "Iot Skills"],
    datasets: [
      {
        label: "Capability",
        data: [3, 3, 8, 6, 9, 5],
        borderWidth: 2,
      },
    ],
  },
  options: {
    responsive: false,
    scales: {
      r: {
        min: 0,
        max: 10,
        ticks: {
          stepSize: 2,
        },
      },
    },
  },
});
