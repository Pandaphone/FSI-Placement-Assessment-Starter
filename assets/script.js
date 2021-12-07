// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "Shawn Greene" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Gingerbread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle
let total = 0;   //Counter for the total

// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
document.getElementById('add-gb').addEventListener('click', function() {
    gb++
    total++

    if(gb > 0 || gb == 0){
        document.getElementById('funni').textContent = 'Order Summary';
    }

    document.getElementById('qty-gb').textContent = gb;
    document.getElementById('qty-total').textContent = total;
})

document.getElementById('minus-gb').addEventListener('click', function() {
    gb--
    total--

    if(gb < 0){
        gb = 0
        total = gb + cc + sugar;
        document.getElementById('funni').textContent = 'I\'m afraid can\'t let you do that, Dave.';
    }
    else{
        document.getElementById('funni').textContent = 'Order Summary';
    }

    document.getElementById('qty-gb').textContent = gb;
    document.getElementById('qty-total').textContent = total;
})

// Event Listener for clicks on CC
document.getElementById('add-cc').addEventListener('click', function() {
    cc++
    total++

    if(cc > 0 || cc == 0){
        document.getElementById('funni').textContent = 'Order Summary';
    }

    document.getElementById('qty-cc').textContent = cc;
    document.getElementById('qty-total').textContent = total;
})

document.getElementById('minus-cc').addEventListener('click', function() {
    cc--
    total--

    if(cc < 0){
        cc = 0
        total = gb + cc + sugar;
        document.getElementById('funni').textContent = 'I\'m afraid can\'t let you do that, Dave.';
    }
    else{
        document.getElementById('funni').textContent = 'Order Summary';
    }

    document.getElementById('qty-cc').textContent = cc;
    document.getElementById('qty-total').textContent = total;
})

// Event Listener for clicks on Sugar
document.getElementById('add-sugar').addEventListener('click', function() {
    sugar++
    total++

    if(sugar > 0 || sugar == 0){
        document.getElementById('funni').textContent = 'Order Summary';
    }

    document.getElementById('qty-sugar').textContent = sugar;
    document.getElementById('qty-total').textContent = total;
})

document.getElementById('minus-sugar').addEventListener('click', function() {
    sugar--
    total--
    
    if(sugar < 0){
        sugar = 0
        total = gb + cc + sugar;
        document.getElementById('funni').textContent = 'I\'m afraid can\'t let you do that, Dave.';
    }
    else{
        document.getElementById('funni').textContent = 'Order Summary';
    }

    document.getElementById('qty-sugar').textContent = sugar;
    document.getElementById('qty-total').textContent = total;
})