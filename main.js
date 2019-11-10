let getDeg  = (val) => {
    return ((val / 60) * 360) + 90;
}

function update() {
    //to show the user the day's name rather than a digit
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November','December'];

    const secHand = document.querySelector('.sec-hand');
    const minHand = document.querySelector('.min-hand');
    const hrHand = document.querySelector('.hr-hand');
    const dayText = document.querySelector('.weekday');
    const monthText = document.querySelector('.month');
    const dateText = document.querySelector('.date');

    const now = new Date();
    
    const sec = now.getSeconds();
    const secDeg = getDeg(sec);

    const min = now.getMinutes();
    const minDeg = getDeg(min);

    const hr = now.getHours();
    const hrDeg = ((hr / 12) * 360) + 90;

    // styling for all the hands
    secHand.style.transform = `rotate(${secDeg}deg)`;
    minHand.style.transform = `rotate(${minDeg}deg)`;
    hrHand.style.transform = `rotate(${hrDeg}deg)`;
    
    // update the date
    const day = now.getDay();
    const month = now.getMonth();
    const dayOfMonth = now.getDate();
    dayText.innerHTML = days[day];
    monthText.innerHTML = months[month];
    dateText.innerHTML = dayOfMonth;
}

setInterval(update, 1000);