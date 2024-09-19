let totalAmount = 0;
const priceElements = {
    'burger': document.getElementById('price_burger'),
    'pizza': document.getElementById('price_pizza'),
    'cola': document.getElementById('price_cola'),
    'fanta': document.getElementById('price_fanta'),
    'plov': document.getElementById('price_plov'),
    'shorva': document.getElementById('price_shorva'),
    'icecream': document.getElementById('price_icecream'),
    'cake': document.getElementById('price_cake'),
    'cheesburger': document.getElementById('price_cheesburger'),
    'chickenburger': document.getElementById('price_chickenburger'),
    'bigburger': document.getElementById('price_bigburger'),
    'mixpizza': document.getElementById('price_mixpizza'),
    'chickenpizza': document.getElementById('price_chickenpizza'),
    'peperonapizza': document.getElementById('price_peperonapizza'),
    'kombopizza': document.getElementById('price_kombopizza'),
    'steakpizza': document.getElementById('price_steakpizza'),
    'cheespizza': document.getElementById('price_cheespizza'),
    'superpizza': document.getElementById('price_superpizza'),
    'margaritapizza': document.getElementById('price_margaritapizza'),
    'lavashchili': document.getElementById('price_lavashchili'),
    'lavash': document.getElementById('price_lavash'),
    'lavashmini': document.getElementById('price_lavashmini'),
    'lavashchicken': document.getElementById('price_lavashchicken'),
    'nonkabob': document.getElementById('price_nonkabob'),
    'nonkabobchicken': document.getElementById('price_nonkabobchicken'),
    'nonkabobchili': document.getElementById('price_nonkabobchili'),
    'hotdog': document.getElementById('price_hotdog'),
    'bighotdog': document.getElementById('price_bighotdog'),

};

function increasePrice(price, itemId) {
    const quantity = document.getElementById(itemId);
    quantity.value = parseInt(quantity.value) + 1;
    const itemTotal = parseInt(quantity.value) * price;
    priceElements[itemId].textContent = itemTotal;
    updateTotal();
}

function decreasePrice(price, itemId) {
    const quantity = document.getElementById(itemId);
    if (parseInt(quantity.value) > 0) {
        quantity.value = parseInt(quantity.value) - 1;
        const itemTotal = parseInt(quantity.value) * price;
        priceElements[itemId].textContent = itemTotal;
        updateTotal();
    }
}

function updateTotal() {
    let total = 0;
    for (let key in priceElements) {
        total += parseInt(priceElements[key].textContent);
    }
    document.getElementById('totalAmount').textContent = total;
    totalAmount = total;
}

function showCategory(category) {
    const categories = ['fastfood', 'drinks', 'food', 'desserts'];
    categories.forEach(cat => {
        document.getElementById(cat).style.display = cat === category ? 'grid' : 'none';
    });
}

function showReceipt() {
    let receiptContent = '';
    const items = [
        { id: 'burger', name: 'Burger', narx:'30000'},
        { id: 'pizza', name: 'Pizza'},
        { id: 'cola', name: 'Coca Cola'},
        { id: 'fanta', name: 'Fanta'},
        { id: 'plov', name: 'Plov'},
        { id: 'shorva', name: 'Sho\'rva'},
        { id: 'icecream', name: 'Ice Cream'},
        { id: 'cake', name: 'Cake'},
        { id: 'cheesburger', name: 'Chees Burger'},
        { id: 'chickenburger', name: 'Chicken Burger'},
        { id: 'bigburger', name: 'Big Burger'},
        { id: 'mixpizza', name: 'Mix Pizza'},
        { id: 'chickenpizza', name: 'Chicken Pizza'},
        { id: 'margaritapizza', name: 'Margarita Pizza'},
        { id: 'peperonapizza', name: 'Peperona Pizza'},
        { id: 'kombopizza', name: 'Kombo Pizza'},
        { id: 'steakpizza', name: 'Steak Pizza'},
        { id: 'cheespizza', name: 'Chees Pizza'},
        { id: 'superpizza', name: 'Super Pizza'},
        { id: 'lavashchili', name: 'Lavash Chili'},
        { id: 'lavash', name: 'Lavash'},
        { id: 'lavashmini', name: 'Lavash Mini'},
        { id: 'lavashchicken', name: 'Lavash Chicken'},
        { id: 'nonkabob', name: 'Non kabob'},
        { id: 'nonkabobchicken', name: 'Non kabob Chicken'},
        { id: 'nonkabobchili', name: 'Non kabob Chili'},
        { id: 'hotdog', name: 'Hot-Dog'},
        { id: 'bighotdog', name: 'Big Hot-Dog'},

    ];

    items.forEach(item => {
        const quantity = document.getElementById(item.id).value;
        if (parseInt(quantity) > 0) {
            receiptContent += ` ${item.name}: ${quantity} dona <br>`;
        }
    });
        

    document.getElementById('receipt').style.display = 'block';
    document.getElementById('receiptContent').innerHTML = receiptContent;
    document.getElementById('finalTotal').textContent = totalAmount;
}
