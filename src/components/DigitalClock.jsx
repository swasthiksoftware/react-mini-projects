import React, {useState, useEffect} from 'react'

export const DigitalClock = () => {
    const [currentTime, setCurrentTime] =useState(new Date());
    useEffect(() => {
const timer = setInterval(() => {
    setCurrentTime(new Date());
}, 1000);
return () => clearInterval(timer);
    }, []);
    const formatHour= (hour) => {
if(hour > 12)
    return (hour - 12);
else
    return hour;
    };
    const singleDigit = (num) => {
        if(num < 10)
            return ( '0'+ num);
        else
            return num;
    };
    const formatDate =(date) => {
        const options = {weekday: "long", year: "numeric", month: "long", day: "numeric"};
return date.toLocaleDateString(undefined, options);
    };
  return (
    <>
    <div className="digital-clock">
        <h1>Digital Clock</h1>
        <div className="time">{singleDigit(formatHour(currentTime.getHours()))} : {singleDigit(currentTime.getMinutes())} : {singleDigit(currentTime.getSeconds())}
            {currentTime.getHours() >= 12 ? " PM" : " AM"}
        </div>
        <div className="date">{formatDate(currentTime)}</div>
    </div>
    </>
  )
}
