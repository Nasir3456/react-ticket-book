import { useState } from 'react';
import './App.css';

function App() {

  const [bookedSeats, setbookedSeats] = useState([])
  
  const seats = (num) =>{
     let arr =[]
     for(let i = 1; i <= (num*num); i++){
        arr.push(i)
    }
    return arr
  }

  const booking = (clas,seatNumber) =>{
    if(bookedSeats.length < 5){
      let newpair = {clas,seatNumber}
      setbookedSeats([...bookedSeats,newpair])
    }else{
      alert('you can not book tickets upto 5')
    }
  }
  
  const finalBooking = () =>{
    let vip = '';
    let general = '';
    let economic = '';
    for (const element of bookedSeats) {
      if(element.clas == 'vip'){
        vip += element.seatNumber + ', '
      }else if(element.clas == 'general'){
        general += element.seatNumber + ', '
      }else{
        economic += element.seatNumber + ', '
      }
    }
    if (bookedSeats.length > 0) {
      alert(`Your booking details:\nVip: ${vip}\nGeneral: ${general}\nEconomic: ${economic}`)
      setbookedSeats([])
      document.querySelectorAll('button').forEach(item => item.disabled = false)
    }else{
      alert('you have nott booked any tickets')
    }
  }

  return (
    <div className='container'>
      <div className='vip'>
        <h1>Vip class</h1>
        <div className='seats'>
          {
            seats(5).map((item,index)=>{
              return <button value="vip" onClick={(e)=>{
                booking(e.target.value,e.target.innerText)
                e.target.disabled = true
              }
              }>{item}</button>
            })
          }
        </div>
      </div>
      <div className='general'>
      <h1>General class</h1>
        <div className='seats'>
          {
            seats(6).map((item)=>{
              return <button value="general" onClick={(e)=>{
                booking(e.target.value,e.target.innerText)
                e.target.disabled = true
              }
              }>{item}</button>
            })
          }
        </div>
      </div>
      <div className='economic'>
      <h1>Economic class</h1>
        <div className='seats'>
          {
            seats(8).map((item)=>{
              return <button value="economic" onClick={(e)=>{
                booking(e.target.value,e.target.innerText)
                e.target.disabled = true
              }
              }>{item}</button>
            })
          }
        </div>
      </div>
      <button className='submit' onClick={()=>{
        finalBooking()
        
      }}>Confirm Booking</button>
    </div>
  );
}

export default App;
