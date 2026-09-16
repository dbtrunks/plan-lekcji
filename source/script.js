const timetable = [
  {
    time: "7:00-8:00",
    poniedziałek: "",
    wtorek: "",
    środa: "",
    czwartek: "Zajęcia rew.",
    piątek: ""
  },
  {
    time: "8:00-8:45",
    poniedziałek: "",
    wtorek: "Zajęcia rew. od 8:40",
    środa: "🗽j. angielski",
    czwartek: "📖Edukacja wczesnoszkolna",
    piątek: "📖Edukacja wczesnoszkolna"
  },
  {
    time: "8:55-9:40",
    poniedziałek: "",
    wtorek: "Zajęcia rew.",
    środa: "📖Edukacja wczesnoszkolna",
    czwartek: "📖Edukacja wczesnoszkolna",
    piątek: "📖Edukacja wczesnoszkolna"
  },
  {
    time: "9:50-10:35",
    poniedziałek: "",
    wtorek: "Wyrównawcze",
    środa: "📖Edukacja wczesnoszkolna",
    czwartek: "📖Edukacja wczesnoszkolna",
    piątek: "📖Edukacja wczesnoszkolna"
  },
  {
    time: "10:45-11:30",
    poniedziałek: "Wyrównawcze",
    wtorek: "",
    środa: "🏊Basen",
    czwartek: "🗽j. angielski",
    piątek: "🏀WF"
  },
    {
    time: "11:40-12:25",
    poniedziałek: "🏀WF",
    wtorek: "📖Edukacja wczesnoszkolna",
    środa: "🏊Basen",
    czwartek: "🖥️Komputerowa",
    piątek: "✟Religia"
  },
    {
    time: "12:45-13:30",
    poniedziałek: "📖Edukacja wczesnoszkolna",
    wtorek: "📖Edukacja wczesnoszkolna ",
    środa: "",
    czwartek: "Zajęcia rew.",
    piątek: ""
  },
      {
    time: "13:50-14:35",
    poniedziałek: "📖Edukacja wczesnoszkolna",
    wtorek: "📖Edukacja wczesnoszkolna",
    środa: "",
    czwartek: "",
    piątek: ""
  },
        {
    time: "14:45-15:30",
    poniedziałek: "📖Edukacja wczesnoszkolna",
    wtorek: "🎨Zajęcia rozwijające uzdolnienia",
    środa: "",
    czwartek: "",
    piątek: ""
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
    poniedziałek: "",
    wtorek: "",
    środa: "",
    czwartek: "",
    piątek: ""
  },
   {
    time: "17:00-18:00",
    poniedziałek: "🥋Judo",
    wtorek: "",
    środa: "🥋Judo",
    czwartek: "",
    piątek: ""
  }
];

const tableBody = document.getElementById("tableBody");

//timetable.forEach(row => {
//  const tr = document.createElement("tr");
//  tr.innerHTML = `
//    <td>${row.time}</td>
//    <td>${row.poniedziałek}</td>
//    <td>${row.wtorek}</td>
//    <td>${row.środa}</td>
//    <td>${row.czwartek}</td>
//    <td>${row.piątek}</td>
//  `;
//  tableBody.appendChild(tr);
//});


const days = ["poniedziałek", "wtorek", "środa", "czwartek", "piątek"];

timetable.forEach(row => {
  const tr = document.createElement("tr");

  // Dodajemy pierwszą komórkę z czasem
  let rowHTML = `<td>${row.time}</td>`;

  // Iterujemy po dniach tygodnia i sprawdzamy zawartość frazy
  days.forEach(day => {
    const text = row[day];
    const hasRew = text.includes("Zajęcia rew.");
    const className = hasRew ? " class='grapeBorders'" : "";
    
    rowHTML += `<td${className}>${text}</td>`;
  });

  tr.innerHTML = rowHTML;
  tableBody.appendChild(tr);
});


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