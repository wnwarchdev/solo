//hamburger

function toggleMenu(visible) {
  document.querySelector('nav').classList.toggle('nav-expand', visible)
}


document.querySelector('.hamburger').addEventListener('click', function(e) {
  e.preventDefault();
  toggleMenu()
});

//modal

function closeModal() {
  document.getElementById('overlay').classList.remove('show')
}

document.querySelectorAll('#overlay .js--close-modal').forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    e.preventDefault()
    closeModal()
  })
})

document.querySelector('#overlay').addEventListener('click', function(e) {
  if(e.target === this) {
    closeModal()
  }
})

document.addEventListener('keyup', function(e) {
  if(e.keyCode === 27) {
    closeModal()
  }
})

function openModal(modal) {
  document.querySelectorAll('#overlay > *').forEach(function(modal) {
    modal.classList.remove('show')
  })
  document.querySelector('#overlay').classList.add('show')
  document.querySelector(modal).classList.add('show')
}


document.querySelector('.testmodal').addEventListener('click', function(e) {
  e.preventDefault();
  openModal('#myModal')
});



//Chart


let ctx = document.getElementById('myChart').getContext('2d');
Chart.Legend.prototype.afterFit = function() {
    this.height = this.height + 30;
};
let chart = new Chart(ctx, {
    // 1

    type: 'bar',

    data: {
        // 2

        labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09"],

        // 3
        datasets: [{
            // 4
            label: "Signups",
            // 5
            backgroundColor: '#8DBEC8',
            borderColor: '#8DBEC8',
            // 6
            data: [ 52, 51, 41, 94, 26, 6, 72, 9, 21],
        },
        {
            label: "FTD",
            backgroundColor: '#F29E4E',
            borderColor: '#F29E4E',
            data: [ 6, 72, 1, 0, 47, 11, 50, 44, 63 ],
        },
        {
            label: "Earned",
            backgroundColor: '#71B374',
            borderColor: '#71B374',
            data: [ 59, 49, 68, 90, 67, 41, 13, 38, 48 ],
            // 7
            hidden: true,
        }]
    },
    options: {
      layout: {
            padding: {
                left: 3,
                right: 1,
            }
        },
        responsive: true,
        maintainAspectRatio: false,
        legend: {

            display: true,
            position: 'top',
            labels: {
                usePointStyle: true,
                borderColor: 'black' ,
                fontSize: 14,
                padding: 15,
                fontFamily: 'Roboto, serif',
            }
        }
    },

});


// title
