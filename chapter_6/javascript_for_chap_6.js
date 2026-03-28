const costinput = document.getElementById('cost');
const litersinput = document.getElementById('liters');
const calculatebtn = document.getElementById('calculate');
const result = document.getElementById('result');

calculatebtn.addEventListener('click', function() {
    const costperliter = parseFloat(costinput.value);
    const literspurchased = parseFloat(litersinput.value);

    if(isNaN(costperliter) || isNaN(literspurchased)) {
        result.textContent = 'please enter valid numbers:';
        return;
    }

    if (costperliter < 0 || literspurchased < 0) {
        result.textContent = 'please enter positive numbers:'
        return;
    }

    const totalcost = costperliter * literspurchased;


    result.textContent = `total cost: $${totalcost.toFixed(2)}`;
});