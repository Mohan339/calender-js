const date= new Date();
const renderCalender=()=>{
  date.setDate(1);
  const monthDays= document.querySelector(".days");
  const lastDay= new Date(date.getFullYear(),date.getMonth()+1,0).getDate();
  const predays= new Date(date.getFullYear(),date.getMonth(),0).getDate();
  const firstdayindex= date.getDay()
  const lastDayindex= new Date(date.getFullYear(),
  date.getMonth()+1,0).getDay();
const nextdays= 7-lastDayindex-1;

  const months=[
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Agust",
    "September",
    "October",
    "November",
    "December"
  ];

  document.querySelector(".date h1").innerHTML=
  months[date.getMonth()];
  document.querySelector(".date p").innerHTML=
  new Date().toDateString( );

  let days= "";

  for(x=firstdayindex;x>0;x--){
    days += `<div class="predays">${predays-x+1}</div>`;
  }


  for(let i=1; i<=lastDay;i++){
    if(i=== new Date().getDate()&&
    date.getMonth()===new Date().getMonth())
    {
    days+=`<div class="today">${i}</div>`;
    monthDays.innerHTML=days;
    }else {
    days += `<div> ${i}</div>`;
    monthDays.innerHTML=days;
    }
  }

  for(let j=1;j<=nextdays;j++){
    days+=`<div class="nextdays">${j}</div>`;
    monthDays.innerHTML=days;
  }
};

document.querySelector('.prev').
addEventListener('click',()=>{
  date.setMonth(date.getMonth()-1);
  renderCalender();
})
document.querySelector('.next').
addEventListener('click',()=>{
  date.setMonth(date.getMonth()+1)
  renderCalender();
})
renderCalender();
