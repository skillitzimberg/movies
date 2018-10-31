
// BUSINESS LOGIC FOR MOVIES

function Movies() {
  this.movies = []
}

function Movie(title, firstRunOrSecondRun) {
    this.title = title,
    this.firstRunOrSecondRun = firstRunOrSecondRun
}

Movies.prototype.addMovie = function(movie) {
  this.movies.push(movie)
}

Movies.prototype.findMovie = function(movieTitle) {
  for (var i = 0; i < this.movies.length; i++) {
    if (this.movies[i].title === movieTitle) {
      return this.movies[i];
    }
  }
  return false;
}

// BUSINESS LOGIC FOR TICKETS & TICKET PRICES
function Ticket(movieTitle, time, ticketType, ticketPrice) {
  this.movieTitle = movieTitle,
  this.time = time,
  this.ticketType = ticketType,
  this.ticketPrice = ticketPrice
}

function TicketPrice() {
  this.generalAdmission = 12;
  this.seniorAndYouthAdmission = 2;
  this.matineeAndLateShow = 1;
  this.secondRun = 3;
}

TicketPrice.prototype.generateTicketPrice = function(ticketType, showTime, firstRunOrSecondRun) {
  var discount = 0;
  (ticketType === 'seniorAndYouthAdmission') ? discount += this.seniorAndYouthAdmission : discount;
  (showTime === 'matineeAndLateShow') ? discount += this.matineeAndLateShow : discount;
  (firstRunOrSecondRun === 'secondRun') ? discount += this.secondRun : discount;
  return ticketPrice = this.generalAdmission - discount;
}

// CREATE MOVIES "DATABASE"
var nowShowing = new Movies();
var ninjaTurtles = new Movie("Teenage Mutant Ninja Turtles", "secondRun");
var fastFurious90 = new Movie("Fast and Furious 90: The Wreckoning", "firstRun");

nowShowing.addMovie(ninjaTurtles);
nowShowing.addMovie(fastFurious90);


// CREATE AND ISSUE A TICKET
// FOLLOWING README SPECIFICATION 8:
var chosenMovie = nowShowing.findMovie("Fast and Furious 90: The Wreckoning");
var movieTitle = chosenMovie.title;
var firstRunOrSecondRun = chosenMovie.firstRunOrSecondRun;
var ticketPrice = new TicketPrice();

// Admission type (general, senior/youth) is hard coded for now; will come from UI
// Movie showing is hard coded for now; will come from UI
ticketPrice.generateTicketPrice("generalAdmission","primeTime", firstRunOrSecondRun);

var issueTicket = new Ticket(movieTitle, "primeTime", "generalAdmission", ticketPrice);
console.log(issueTicket);



// USER INTERFACE LOGIC

$(document).ready(function() {
  $("#showtime").submit(function(event) {
    event.preventDefault();

    var movieTitle = $("#movieTitle").val();
    console.log(movieTitle);
    // var ageGroupDiscount = $("#ageGroupDiscount").val();
    // var showTime = $("#showTime").val();

    // $("p#showCost").append(title + " " + time + " $" + cost + ".00");

  });
});
