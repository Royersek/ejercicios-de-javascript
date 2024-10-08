function convertToRoman(n) {
    const romanNumerals = [
        { value: 1000, symbol: 'M' },
        { value: 900, symbol: 'CM' },
        { value: 500, symbol: 'D' },
        { value: 400, symbol: 'CD' },
        { value: 100, symbol: 'C' },
        { value: 90, symbol: 'XC' },
        { value: 50, symbol: 'L' },
        { value: 40, symbol: 'XL' },
        { value: 10, symbol: 'X' },
        { value: 9, symbol: 'IX' },
        { value: 5, symbol: 'V' },
        { value: 4, symbol: 'IV' },
        { value: 1, symbol: 'I' },
    ];

    let result = '';

    for (const numeral of romanNumerals) {
        while (n >= numeral.value) {
            result += numeral.symbol;
            n -= numeral.value;
        }
    }

    return result;
}

document.getElementById('convertir').addEventListener('click', function() {
    const decimal = parseInt(document.getElementById('decimal').value);
    
    if (isNaN(decimal) || decimal < 1 || decimal > 3999) {
        document.getElementById('resultado').innerText = "Por favor, ingresa un número válido entre 1 y 3999.";
    } else {
        const resultado = convertToRoman(decimal);
        document.getElementById('resultado').innerText = resultado;
    }
});
