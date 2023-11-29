        // currency values against 1 usd.
        const currencyValues = {
            rupee : 83.31,
            usd : 1,
            dhiram : 3.67,
            jpy : 149,
            pound : .79,
            krw : 1290,
        }


        let calculateBtn = document.getElementById("calculate-btn")

        calculateBtn.addEventListener("click", function() {
            let first_currency = document.getElementById('1st-currency').value;
            let second_currency = document.getElementById('2nd-currency').value;

            let first_amount = document.getElementById('first-amount').value;

            let show_answer = document.getElementById('calculated-value')

            // function to get values from Object.
            getValues(first_currency, second_currency);
            function getValues(first_currency, second_currency) {
                if (currencyValues.hasOwnProperty(first_currency) && currencyValues.hasOwnProperty(second_currency)) {
                    var firstCurrencyValue = currencyValues[first_currency];
                    var secondCurrencyValue = currencyValues[second_currency]
                }
                
                // createing a function which calculate.
                calculate(firstCurrencyValue, secondCurrencyValue)
                function calculate(firstCurrencyValue, secondCurrencyValue) {
                    // In first step we can change the amount into usd.
                    let firstStep = first_amount/firstCurrencyValue
                    
                    //In second step we can change the curreny to the selected currency.
                    let secondStep = firstStep*secondCurrencyValue

                    let calculatedValue = secondStep.toFixed(2)

                    console.log(calculatedValue)
                    show_answer.innerText = calculatedValue
                    show_answer.style.display = "block"
                    
                }
             }

        })