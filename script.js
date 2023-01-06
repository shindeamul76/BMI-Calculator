window.onload = () => {
    const calculate = document.querySelector('#calculate')
    calculate.addEventListener('click', calculateMass)
}

const calculateMass = () => {

    const age = document.querySelector('#age').value;
    const height = document.querySelector('#height').value;
    const weight = document.querySelector('#weight').value;
    const result = document.querySelector('#result')

    if (age === '' || height === '' || weight === '') {
        alert('Please Enter a value')
    }

    if (age > 120 || age < 2 ) {
        alert('please provide age value less 120 and equal to 2')
    }

    


    let total = weight / Math.pow(height, 2)

    result.innerHTML = total

   
    
}

