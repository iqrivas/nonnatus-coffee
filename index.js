class Order {
    constructor(size, sugar) {
      this.size = size;
      this.sugar = sugar;
    }
}

let newOrder = new Order();

let mainPanel = document.getElementById('main_panel');
let orderPanel = document.getElementById('currentOrder');
let sizePanel = document.getElementById('size_panel');
let sugarPanel = document.getElementById('sugar_panel');
let orderBtn = document.getElementById('orderBtn');

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
    orderSize.innerHTML = `Size: `;
    orderSugar.innerHTML = `Sugar: `;
}

let sizeBtns = document.querySelectorAll('.size_btn');
let orderSize = document.getElementById('orderSize');
sizeBtns.forEach(element => {
    element.addEventListener('click', (ev) => {
        newOrder.size = ev.target.value;
        orderSize.innerHTML = `Size: ${newOrder.size}`;
        sizePanel.classList.add('hidden');
        sugarPanel.classList.remove('hidden');
    });
})