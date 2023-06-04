import React from 'react'

const Time = (props) => {
    function addNumberSuffix(number) {
        if (number >= 11 && number <= 13) {
          return number + 'th';
        } else {
          const lastDigit = number % 10;
          switch (lastDigit) {
            case 1:
              return number + 'st';
            case 2:
              return number + 'nd';
            case 3:
              return number + 'rd';
            default:
              return number + 'th';
          }
        }
      }
      let timeThing = " A.M."
      const hours = (time) => {
        
        if (time > 12){
            timeThing = " P.M."
            return time - 12
        }else{
            timeThing = " A.M."
            return time

        }
      }
      const whichDay = (num) => {
        const days = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
        return days[num]
    }
  return (
    <div className="purchased">
    Purchased on {whichDay(props.date.getDay())+ " "}
    the {addNumberSuffix(props.date.getDate())+ ", " + 
    props.date.getFullYear() + " at " +
    hours(props.date.getHours())+ ":" + 
    props.date.getMinutes() + ":" +
    props.date.getSeconds() + timeThing
    
    } 

</div>
  )
}

export default Time