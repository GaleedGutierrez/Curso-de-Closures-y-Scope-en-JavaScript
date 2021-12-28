// Sin closure
const moneyBox = (coins) => {
    var saveCoins = 0
    saveCoins += coins
    console.log(`MoneyBox: $${saveCoins}`)
}

moneyBox(5)
moneyBox(10)

// Con closure
const moneyBox = () => {
    var saveCoins = 0
    const countCoins = (coins) => {
        saveCoins += coins
        console.log(`MoneyBox: $${saveCoins}`)
    }
    return countCoins
}

let myMoneyBox = moneyBox();
myMoneyBox(4);
myMoneyBox(6);
myMoneyBox(10);

function crearContador(contador = 0) {
    return {
        incrementar: function () {
            contador = contador + 1;
            return contador;
        },
        decrementar: function () {
            contador = contador - 1;
            return contador;
        },
        obtenerValor: function () {
            return contador;
        }
    }
}

const contador1 = crearContador(10);
const contador2 = crearContador(500);