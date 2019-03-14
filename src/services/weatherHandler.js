export function getWindDirection(deg){
    let direction;
    if(deg >= 337.5 && deg <= 360 || deg<=22.5 ) {
        direction = 'C';
    } else if (deg>22.5 && deg<=67.5){
        direction = 'CВ';
    } else if (deg>=67.5 && deg<=112.5){
        direction = 'В';
    } else if (deg>112.5 && deg<157.5){
        direction = 'ЮВ';
    } else if (deg>=157.5 && deg<=202.5){
        direction = 'Ю';
    } else if (deg>202.5 && deg<247.5){
        direction = 'ЮЗ';
    } else if (deg>=247.5 && deg<=292.5){
        direction = 'З';
    } else if (deg>292.5 && deg<337.5){
        direction = 'ВЮВ';
    }

    return direction;
        
}

// get sunrise and sunset time

export function getSun(ms){

    let date = new Date(ms);

    let hour = date.getHours();
    hour = hour < 10 ? `0${hour}` : hour;

    let minute = date.getMinutes();
    minute = minute < 10 ? `0${minute}` : minute;

    let time=`${hour}:${minute}`;
    
    return time;
}

// atmosphere pressure convert

export function pressureConvert(data){
    let pres = (data * 0.750062).toFixed();
    return pres;
}

//get temperature

export function getTemp(data){
    let temp = parseInt(data - 273);
    if(temp>0){
        temp = `+${temp}°С`;
    } else {
        temp=`${temp}°С`;
    }

    return temp;
}

export function getData(item){
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let data = new Date(item);
    
    let getDay = data.getDay();
    let getMonth = data.getMonth();
    let dayCount = data.getDate();

    let hour = data.getUTCHours();
    if(hour <10) {
        hour = '0' + hour;
    }
    let minute = data.getUTCMinutes();
    if(minute <10) {
        minute = '0' + minute;
    }

    let fullDate = `${days[getDay]} ${dayCount} ${month[getMonth]} ${hour}:${minute}`; 

    return fullDate;
}