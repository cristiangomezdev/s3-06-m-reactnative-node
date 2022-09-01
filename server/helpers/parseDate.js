const formatDate = (date)=>{
    date = new Date(date)
    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()

    if(month < 10){
    date = `${year}-0${month}-${day}`
    }else{
    date = `${year}-${month}-${day}`
    }
    return date
}

module.exports = formatDate