
  var date= new Date();
  var hours=date.getHours();
  var minute=date.getMinutes();
  var second=date.getSeconds();

  var val ;
  val =24;
  if(val == 12)
{
    twelveHourClock();
    document.getElementById("onlineClock").innerHTML =hours + " : " + minute + " : " +second +" "+ amORpm;

}
else if(val == 24){
    twentyFourHourClock();
    document.getElementById("onlineClock").innerHTML =hours + " : " + minute + " : " +second ;

}
  
function twentyFourHourClock()
{
  
  formattedClock();
}

function twelveHourClock()
{
  amORpm=setAmPm(hours);
  hours=twelveHourFormat(hours);
  formattedClock();
  
}
function formattedClock()
{
  hours=formatTime(hours);
  minute=formatTime(minute);
  second=formatTime(second);
}


  

  function formatTime(val) //make time into 2 digit format eg:- 4:5:8 into 04:05:08
  {
      if(val<10)
      return val="0"+val;
      else
      return val=val;
  }

  function twelveHourFormat(hrs) // converting into 12hr format
  {
    if(hrs==0)
        return hrs=12;
    else if (hrs>12)
        return hrs=hrs-12;
    else
        return hrs=hrs;
  }

  function setAmPm(time) // set the time is AM or PM
  {
      var amORpm;
      if(time<12)
      amORpm="AM";
      else 
      amORpm="PM";
      return amORpm;
  }

