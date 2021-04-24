class Order {
    constructor(size, sugar) {
      this.size = size;
      this.sugar = sugar;
    }
}

let newOrder = new Order('', 0);

let mainPanel = document.getElementById('main_panel');
let orderPanel = document.getElementById('currentOrder');
let sizePanel = document.getElementById('size_panel');
let sugarPanel = document.getElementById('sugar_panel');
let prepPanel = document.getElementById('prep_panel');
let orderBtn = document.getElementById('orderBtn');
let cancelBtn = document.getElementById('cancelBtn');

function startOrder () {
    orderBtn.classList.add('hidden');
    mainPanel.classList.add('hidden');
    orderPanel.classList.remove('hidden');
    sizePanel.classList.remove('hidden');
}

function cancelOrder () {
    orderBtn.classList.remove('hidden');
    mainPanel.classList.remove('hidden');
    orderPanel.classList.add('hidden');
    sizePanel.classList.add('hidden');
    sugarPanel.classList.add('hidden');
    newOrder.size = '';
    newOrder.sugar = 0;
    orderSize.innerHTML = `Size: `;
    orderSugar.innerHTML = `Sugar: `;
    document.getElementById(`lvl-1`).classList.add('sugar_pt--off');
    document.getElementById(`lvl-2`).classList.add('sugar_pt--off');
    document.getElementById(`lvl-3`).classList.add('sugar_pt--off');
    document.getElementById(`lvl-4`).classList.add('sugar_pt--off');
    document.getElementById(`lvl-5`).classList.add('sugar_pt--off');
}

let sizeBtns = document.querySelectorAll('.size_btn');
let orderSize = document.getElementById('orderSize');
sizeBtns.forEach(element => {
    element.addEventListener('click', (ev) => {
        newOrder.size = ev.target.value;
        orderSize.innerHTML = `Size: ${newOrder.size}`;
        sizePanel.classList.add('hidden');
        sugarPanel.classList.remove('hidden');
        orderSugar.innerHTML = `Sugar: ${newOrder.sugar}`;
    });
})

let sugarBtns = document.querySelectorAll('.sugar_btn');
let orderSugar = document.getElementById('orderSugar');
sugarBtns.forEach(element => {
    element.addEventListener('click', (ev) => {
        if (ev.target.value == 'increase' && newOrder.sugar < 5) {
            newOrder.sugar += 1;
            document.getElementById(`lvl-${newOrder.sugar}`).classList.remove('sugar_pt--off');
        }
        if (ev.target.value == 'decrease' && newOrder.sugar > 0) {
            newOrder.sugar -= 1;
            document.getElementById(`lvl-${newOrder.sugar+1}`).classList.add('sugar_pt--off');
        }

        orderSugar.innerHTML = `Sugar: ${newOrder.sugar}`;
        
    });
})
