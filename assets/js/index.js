const calculateDate = (day, month, year) => {
    let result = '';
    let date = new Date(`${year}-${month}-${day}`)
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
    showDateInformation(result)
}

const showDateInformation = ( information ) =>{
    const dateInformation = document.getElementById('dateInformation')
    dateInformation.innerHTML = information
}


calculateDate(14,6,2002)