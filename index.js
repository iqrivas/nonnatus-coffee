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

function startPrep() {
    cancelBtn.setAttribute('disabled', 'disabled');
    cancelBtn.classList.remove('cancel_btn');
    cancelBtn.classList.add('cancel_btn--disabled');
    sugarPanel.classList.add('hidden');
    prepPanel.classList.remove('hidden');
    setTimeout (()=> {
        document.getElementById('prep-1').classList.remove('sugar_pt--off');
    }, 1000)
    setTimeout (()=> {
        document.getElementById('prep-2').classList.remove('sugar_pt--off');
    }, 2000)
    setTimeout (()=> {
        document.getElementById('prep-3').classList.remove('sugar_pt--off');
    }, 3000)
    setTimeout (()=> {
        prepPanel.innerHTML += `
        <p class="panel_text">Serving</p>
        <div class="levels">
          <div id="serv-1" class="sugar_pt sugar_pt--off"></div>
          <div id="serv-2" class="sugar_pt sugar_pt--off"></div>
          <div id="serv-3" class="sugar_pt sugar_pt--off"></div>
        </div>`
    }, 4000);
    setTimeout (()=> {
        document.getElementById('serv-1').classList.remove('sugar_pt--off');
    }, 6000)
    setTimeout (()=> {
        document.getElementById('serv-2').classList.remove('sugar_pt--off');
    }, 8000)
    setTimeout (()=> {
        document.getElementById('serv-3').classList.remove('sugar_pt--off');
    }, 10000)
    setTimeout (()=> {
        prepPanel.innerHTML = `
        <p class="panel_text">Your coffee is ready. ☕ </p>
        <p class="panel_text">Enjoy! </p>
        <p class="panel_text">Have a nice day </p>
        `
    }, 12000);
    

}