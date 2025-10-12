const timetable = [
  {
    time: "8:00-8:45",
    poniedziałek: "📖Edukacja wczesnoszkolna",
    wtorek: "📖Edukacja wczesnoszkolna",
    środa: "📖Edukacja wczesnoszkolna",
    czwartek: "",
    piątek: ""
  },
  {
    time: "8:55-9:40",
    poniedziałek: "📖Edukacja wczesnoszkolna",
    wtorek: "📖Edukacja wczesnoszkolna",
    środa: "📖Edukacja wczesnoszkolna",
    czwartek: "",
    piątek: ""
  },
  {
    time: "9:50-10:35",
    poniedziałek: "📖Edukacja wczesnoszkolna",
    wtorek: "📖Edukacja wczesnoszkolna",
    środa: "📖Edukacja wczesnoszkolna",
    czwartek: "",
    piątek: ""
  },
  {
    time: "10:45-11:30",
    poniedziałek: "🏀WF",
    wtorek: "📖Edukacja wczesnoszkolna",
    środa: "📖Edukacja wczesnoszkolna",
    czwartek: "",
    piątek: "🗽j. angielski"
  },
    {
    time: "11:40-12:25",
    poniedziałek: "",
    wtorek: "✟Religia",
    środa: "🎓Wspólny czas od 11:30",
    czwartek: "🏀WF",
    piątek: "📖Edukacja wczesnoszkolna"
  },
    {
    time: "12:45-13:30",
    poniedziałek: "",
    wtorek: "",
    środa: "🎓Wspólny czas do 13:00",
    czwartek: "📖Edukacja wczesnoszkolna +🍴obiad",
    piątek: "📖Edukacja wczesnoszkolna +🍴obiad"
  },
      {
    time: "13:50-14:35",
    poniedziałek: "",
    wtorek: "",
    środa: "",
    czwartek: "🗽j. angielski",
    piątek: "📖Edukacja wczesnoszkolna"
  },
        {
    time: "14:45-15:30",
    poniedziałek: "",
    wtorek: "",
    środa: "",
    czwartek: "🎨Zajęcia rozwijające uzdolnienia",
    piątek: "🏀WF"
  },
 {
    time: "",
    poniedziałek: "",
    wtorek: "",
    środa: "",
    czwartek: "",
    piątek: ""
  },
  {
    time: "16:00-17:00",
    poniedziałek: "🥋Judo",
    wtorek: "",
    środa: "🥋Judo",
    czwartek: "",
    piątek: ""
  },
   {
    time: "17:00-18:00",
    poniedziałek: "",
    wtorek: "",
    środa: "",
    czwartek: "🏊Lekcja pływania",
    piątek: ""
  }
];

const tableBody = document.getElementById("tableBody");

timetable.forEach(row => {
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${row.time}</td>
    <td>${row.poniedziałek}</td>
    <td>${row.wtorek}</td>
    <td>${row.środa}</td>
    <td>${row.czwartek}</td>
    <td>${row.piątek}</td>
  `;
  tableBody.appendChild(tr);
});


//for(let row of tableBody.rows) {
//  var time = row.cells[0].innerHTML
//    if(time == '11:40-12:25'){
//          tableBody.rows[row.rowIndex].insertAdjacentHTML('beforebegin', "<tr class='doubleBorders'><td></td><td colspan=5>Przerwa obiadowa  I</td></tr>");
//    }else
//  if(time == '12:45-13:30'){
//    tableBody.rows[row.rowIndex].insertAdjacentHTML('beforebegin', "<tr class='doubleBorders'><td></td><td colspan=5>Przerwa obiadowa  II </td></tr>");
//  }
//
//}



var x = setInterval(function() {

  var now = new Date();

  document.getElementById("time").innerHTML = now.toLocaleDateString() + "   " + now.toLocaleTimeString();
  
var timeNow = now.toLocaleTimeString(navigator.language, {hour: "2-digit",minute: "2-digit",});

  for(let row of tableBody.rows) {
    var time = row.cells[0].innerHTML
    if(time != "")
      {
        var timeParts = time.split('-');
        
        if(compareTime(timeNow, timeParts[0]) &&  compareTime(timeParts[1],timeNow) ){
            row.cells[now.getDay()].classList.add("nowBorders");
        }
        else
        {
           row.cells[now.getDay()].classList.remove("nowBorders");
        }

    }
  }
}, 1000);


function compareTime(str1, str2){
    if(str1 === str2){
        return 0;
    }
    var time1 = str1.split(':');
    var time2 = str2.split(':');
    if(eval(time1[0]) > eval(time2[0])){
        return true;
    } else if(eval(time1[0]) == eval(time2[0]) && eval(time1[1]) >= eval(time2[1])) {
        return true;
    } else {
        return false;
    }
}