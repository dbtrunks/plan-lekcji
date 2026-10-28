const timetable = [
  {
    time: "7:00-8:00",
    poniedziałek: "",
    wtorek: "",
    środa: "",
    czwartek: "Zajęcia rew. M.CZ.",
    piątek: ""
  },
  {
    time: "8:00-8:45",
    poniedziałek: "",
    wtorek: "Zajęcia rew. od 8:40 M.CZ.",
    środa: "🗽j. angielski",
    czwartek: "📖Edukacja wczesnoszkolna",
    piątek: "📖Edukacja wczesnoszkolna"
  },
  {
    time: "8:55-9:40",
    poniedziałek: "",
    wtorek: "Zajęcia rew. M.CZ.",
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
    poniedziałek: "",
    wtorek: "✨Etyka",
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
    środa: "Wyrównawcze",
    czwartek: "Zajęcia rew. L.R.",
    piątek: ""
  },
      {
    time: "13:50-14:35",
    poniedziałek: "📖Edukacja wczesnoszkolna",
    wtorek: "📖Edukacja wczesnoszkolna",
    środa: "",
    czwartek: "🎈Wspólny czas",
    piątek: "Zajęcia grupowe A.W."
  },
        {
    time: "14:45-15:30",
    poniedziałek: "📖Edukacja wczesnoszkolna",
    wtorek: "🎨Zajęcia rozwijające uzdolnienia",
    środa: "",
    czwartek: "🎈Wspólny czas do 15:35",
    piątek: ""
  },
 {
    time: "15:30-16:30",
    poniedziałek: "",
    wtorek: "TUS E.J.",
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

	const dayName = new Date().toLocaleDateString('pl-PL', { weekday: 'long' });
	const headers = document.querySelectorAll("th");

	headers.forEach(th => {
	  if (th.textContent.trim().toLowerCase() === dayName.toLowerCase()) {
		th.classList.add("bold");
	  }
	});

timetable.forEach(row => {
  const tr = document.createElement("tr");

  // Dodajemy pierwszą komórkę z czasem
  let rowHTML = `<td>${row.time}</td>`;

  // Iterujemy po dniach tygodnia i sprawdzamy zawartość frazy
  days.forEach(day => {
    const text = row[day];
	
    const hasRew = text.includes("Zajęcia rew.");
    let className = hasRew ? " class='grapeBorders'" : "";

    const hasWyr = text.includes("Wyrównawcze");
    className = hasWyr ? " class='geenBorders'" : className;
 
    const hasTus = text.includes("TUS");
    className = hasTus ? " class='yellowBorders'" : className;

    const hasGru = text.includes("grupowe");
    className = hasGru ? " class='blueBorders'" : className;	
	
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