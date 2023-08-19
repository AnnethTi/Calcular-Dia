let day = document.getElementById('day')
let month = document.getElementById('month')
let year = document.getElementById('year')
let dateInformation = document.getElementById('dateInformation')
const btnCalculateDate = document.getElementById('calculateDate')

const monthThirtyDays = [4,6,9,11]


const calculateDate = () => {
    resetInformation()
    let result = '';

    if (verifyDate() === false) {
        result = 'La fecha esta mal, los dias no coinciden con el mes'
    }else{
        let date = new Date(`${year.value}-${month.value}-${day.value}`)
        let dayValue = date.getDay()

    switch (dayValue) {
        case 1:
            result += 'Lunes, día laboral 👩🏻‍💻'
            break
        case 2:
            result += 'Martes, día laboral 👩🏻‍💻'
            break
        case 3:
            result += 'Miercoles, día laboral 👩🏻‍💻'
            break
        case 4:
            result += 'Jueves, día laboral 👩🏻‍💻'
            break
        case 5:
            result += 'Viernes, día laboral 👩🏻‍💻'
            break
        case 6:
            result += 'Sábado, día no laboral 🥳'
            break
        case 0:
            result += 'Domingo, día no laboral 🥳'
            break
    }
    }
    showDateInformation(result)
}

const showDateInformation = (information) => {
    const dateInformation = document.getElementById('dateInformation')
    dateInformation.innerHTML = information
    dateInformation.innerHTML += isBisiesto()
}

year.addEventListener('keypress', (event) => {
    event.preventDefault()
    let valorTecla = (event.key)
    let valorParsed = parseInt(valorTecla)
    if (valorParsed) {
        year.value = year.value + valorParsed
    } else if (valorParsed || valorTecla === '0') year.value = year.value + valorParsed

    //console.log(typeof(parseInt(year.value)))


    if (/^\d{1,4}$/.test(parseInt(year.value))) {
        // El valor es válido, eliminar clase de error si existe
        year.classList.remove("error");
    } else {
        // El valor no es válido, añadir clase de error
        year.classList.add("error");
    }
})
day.addEventListener('keypress', (event) => {
    event.preventDefault()
    let valorTecla = (event.key)
    let valorParsed = parseInt(valorTecla)
    if (valorParsed) {
        day.value = day.value + valorParsed
    } else if (valorParsed || valorTecla === '0') day.value = day.value + valorParsed

    //console.log(typeof(parseInt(day.value)))


    if (/^\d{1,2}$/.test(parseInt(day.value))) {
        // El valor es válido, eliminar clase de error si existe
        day.classList.remove("error");
    } else {
        // El valor no es válido, añadir clase de error
        day.classList.add("error");
    }

})

const activeBtnCalculate = () => {
    btnCalculateDate.disabled = false;
}

function isBisiesto() {
    year.value % 4 === 0 ? result = '<br>Es año bisiesto' : result = ''
    return result
}

function resetInformation() {
    dateInformation.innerHTML = ''
}

function verifyDate() {
    //console.log( monthThirtyDays.includes(parseInt(month.value)) )
    if ((parseInt(day.value) >= 30 && parseInt(month.value) == 2 && parseInt(year.value) % 4) === 0) return false
    else if ( (parseInt(day.value)) >= 31 && monthThirtyDays.includes(parseInt(month.value) ) ) return false
    else if ((parseInt(day.value) >= 29 && parseInt(month.value) == 2 && parseInt(year.value) % 4 !== 0) ) return false
}

