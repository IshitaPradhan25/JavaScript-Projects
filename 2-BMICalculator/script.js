document.getElementById('bmiForm').addEventListener('submit', function(e) {
    e.preventDefault(); // here because we are not sending it to the server, we are just calculating it on the client side when the user clicks the submit button. This prevents the page from refreshing and losing the data.

    const weight = parseFloat(document.getElementById('weight').value); // value we add because we want to get alue from the input field, and parseFloat because we want to convert it to a number.
    const height = parseFloat(document.getElementById('height').value);
    const resultBox = document.getElementById('resultBox');
    const bmiValue = document.getElementById('bmiValue');
    const bmiCategory = document.getElementById('bmiCategory');

    if (isNaN(height) || height <= 0) {
        alert('Please enter valid positive number for height.');
        return;
    }

    if (isNaN(weight) || weight <= 0) {
        alert('Please enter valid positive number for weight.');
        return;
    }

    const bmi = weight / (height * height);
    bmiValue.textContent = bmi.toFixed(2);

    let categoryText = '';
    let categoryClass = '';

    if (bmi < 18.5) {
        categoryText = 'Underweight';
        categoryClass = 'cat-blue';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        categoryText = 'Normal Weight';
        categoryClass = 'cat-green';
    } else if (bmi >= 25 && bmi < 29.9) {
        categoryText = 'Overweight';
        categoryClass = 'cat-yellow';
    } else {
        categoryText = 'Obese';
        categoryClass = 'cat-red';
    }

    bmiCategory.textContent = categoryText; 
    bmiCategory.className = `bmi-category ${categoryClass}`;

    // Shows the result box on the screen
    resultBox.classList.remove('hidden');
});