// memory section 
document.getElementById('base-memory').addEventListener('click', function () {
    document.getElementById('memory-cost').innerText = 0;
    document.getElementById('base-memory').disabled = true;
    document.getElementById('extended-memory').disabled = false;
    subTotal();
});

document.getElementById('extended-memory').addEventListener('click', function () {
    document.getElementById('memory-cost').innerText = 180;
    document.getElementById('base-memory').disabled = false;
    document.getElementById('extended-memory').disabled = true;
    subTotal();
});

// storage sectoin 
document.getElementById('base-storage').addEventListener('click', function () {
    document.getElementById('storage-cost').innerText = 0;
    document.getElementById('base-storage').disabled = true;
    document.getElementById('half-tb').disabled = false;
    document.getElementById('one-tb').disabled = false;
    subTotal();
});
document.getElementById('half-tb').addEventListener('click', function () {
    document.getElementById('storage-cost').innerText = 100;
    document.getElementById('base-storage').disabled = false;
    document.getElementById('half-tb').disabled = true;
    document.getElementById('one-tb').disabled = false;
    subTotal();
});
document.getElementById('one-tb').addEventListener('click', function () {
    document.getElementById('storage-cost').innerText = 180;
    document.getElementById('base-storage').disabled = false;
    document.getElementById('half-tb').disabled = false;
    document.getElementById('one-tb').disabled = true;
    subTotal();
});

// delivery secton
document.getElementById('free-delivery').addEventListener('click', function () {
    document.getElementById('delivery-cost').innerText = 0;
    document.getElementById('free-delivery').disabled = true;
    document.getElementById('express-delivery').disabled = false;
    subTotal();
});
document.getElementById('express-delivery').addEventListener('click', function () {
    document.getElementById('delivery-cost').innerText = 20;
    subTotal();
    document.getElementById('free-delivery').disabled = false;
    document.getElementById('express-delivery').disabled = true;
});

// sub total calculation 
function subTotal() {
    document.getElementById('sub-total').innerText =
        parseFloat(document.getElementById('base-price').innerText) +
        parseFloat(document.getElementById('memory-cost').innerText) +
        parseFloat(document.getElementById('storage-cost').innerText) +
        parseFloat(document.getElementById('delivery-cost').innerText);
    //     // update afterDiscount
    //     document.getElementById('afterDiscount').innerText =
    //         document.getElementById('totalPrice').innerText;
    // }

};