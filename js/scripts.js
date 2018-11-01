
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
function BoxOffice() {
  this.generalAdmission = 12;
  this.seniorAndYouthAdmission = 2;
  this.matineeAndLateShow = 1;
  this.secondRun = 3;
}

BoxOffice.prototype.generateTicketPrice = function(ticketType, showTime, firstRunOrSecondRun) {
  var discount = 0;
  (ticketType === 'seniorAndYouthAdmission') ? discount += this.seniorAndYouthAdmission : discount;
  (showTime === 'matineeAndLateShow') ? discount += this.matineeAndLateShow : discount;
  (firstRunOrSecondRun === 'secondRun') ? discount += this.secondRun : discount;
  return ticketPrice = this.generalAdmission - discount;
}

function Ticket(movieTitle, time, ticketType, ticketPrice) {
  this.movieTitle = movieTitle,
  this.time = time,
  this.ticketType = ticketType,
  this.ticketPrice = ticketPrice
}

// CREATE MOVIES "DATABASE"
var nowShowing = new Movies();
var ninjaTurtles = new Movie("Teenage Mutant Ninja Turtles", "secondRun");
var fastFurious90 = new Movie("Fast and Furious 90: The Wreckoning", "firstRun");

nowShowing.addMovie(ninjaTurtles);
nowShowing.addMovie(fastFurious90);

// USER INTERFACE LOGIC

$(document).ready(function() {
  $("#showtime").submit(function(event) {
    event.preventDefault();

    var movie = $("#movie").val();
    var ageGroupDiscount = $("#ageGroupDiscount").val();
    var showTime = $("#showTime").val();

    // CREATE AND ISSUE A TICKET
    var movieDetails = nowShowing.findMovie(movie);
    var movieTitle = movieDetails.title;
    var firstRunOrSecondRun = movieDetails.firstRunOrSecondRun;
    var ticketPrice = new BoxOffice();

    var price = ticketPrice.generateTicketPrice(ageGroupDiscount,showTime, firstRunOrSecondRun);

    var issueTicket = new Ticket(movieTitle, showTime, ageGroupDiscount, price);
    console.log(issueTicket);

    // $("p#showCost").append(title + " " + time + " $" + cost + ".00");

  });
});
