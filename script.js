function displayCalendar() {
    var calendarContainer = document.getElementById("calendar-container");
    if (calendarContainer.style.display === "none") {
      calendarContainer.style.display = "block";
      calendarContainer.innerHTML = createCalendar();
    } else {
      calendarContainer.style.display = "none";
    }
  }
  
  function createCalendar() {
    var calendar = "";
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth();
    var daysInMonth = new Date(year, month+1, 0).getDate();
    var firstDay = new Date(year, month, 1).getDay();
    
    calendar += "<table>";
    calendar += "<tr><th colspan='7'>" + monthNames[month] + " " + year + "</th></tr>";
    calendar += "<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>";
    
    var day = 1;
    for (var i = 0; i < 6; i++) {
      calendar += "<tr>";
      for (var j = 0; j < 7; j++) {
        if (i === 0 && j < firstDay) {
          calendar += "<td></td>";
        } else if (day > daysInMonth) {
          calendar += "<td></td>";
        } else {
          calendar += "<td>" + day + "</td>";
          day++;
        }
      }
      calendar += "</tr>";
    }
    calendar += "</table>";
    
    return calendar;
  }
  
  var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];