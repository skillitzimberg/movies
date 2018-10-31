// BUSINESS LOGIC FOR MOVIES
  // Constructors & Prototypes
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

// Create Instances of MOVIE objects and add to MOVIES

var nowShowing = new Movies();

var ninjaTurtles = new Movie("Teenage Mutant Ninja Turtles", "secondRun");
var fastFurious90 = new Movie("Fast and Furious 90: The Wreckoning", "firstRun");

nowShowing.addMovie(ninjaTurtles);
nowShowing.addMovie(fastFurious90);
console.log(nowShowing);



// BUSINESS LOGIC FOR TICKETS & TICKET PRICES
function Ticket(movieTitle, showTime, ticketType, ticketPrice) {
  this.movieTitle = movieTitle,
  this.showTime = showTime,
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

var ticketPrice = new TicketPrice();
ticketPrice.generateTicketPrice("generalAdmission","primeTime", "secondRun");
console.log(ticketPrice);
var issueTicket = new Ticket("Teenage Mutant Ninja Turtles", "primeTime", "generalAdmission", ticketPrice);
console.log(issueTicket);



// USER INTERFACE LOGIC



$(document).ready(function() {
  $("#showtime").submit(function(event) {
    event.preventDefault();

    // var movieTitle = $("#movieTitle").val();
    // var ageGroupDiscount = $("#ageGroupDiscount").val();
    // var showTime = $("#showTime").val();

    // $("p#showCost").append(title + " " + time + " $" + cost + ".00");

  });
});
