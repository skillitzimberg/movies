function Movies() {
  var movies = [];
}

function Movie(title, runStatus) {
  this.title = title,
  this.runStatus = runStatus
}

Movies.prototype.addMovie = function(movie) {
  this.movies.push(movie);
}

// BUSINESS LOGIC FOR TICKETS

// CONSTRUCTOR TO BUILD EMPTY BANK TO STORE TICKETS AFTER 'BUTTON' FUNCTION RUNS/CLEARS EACH TIME
function Tickets() {
  this.savedTickets = [];
}

TicketBank.prototype.addTicket = function(ticket) {
  this.savedTickets.push(ticket)
}

// CONSTRUCTOR TO BUILD NEW TICKETS FROM USER INPUTS
function Ticket(title, time, age, price) {
  this.title = title,
  this.time = time,
  this.age = age,
  this.price = price
}

// PROTOTYPE METHOD ADD TO CALCULATE TICKET COST BASED ON ADDED TICKET OBJECT

Ticket.prototype.whichFilm = function(ticket) {
  if (this.title === "Ninja Turtles") {
    this.runStatus = 'old';
  } else if (this.title === "Fast and Furious 90: The Wreckoning") {
    this.runStatus = 'new';
  } else {
    false;
  }
}


Ticket.prototype.calculatePrice = function(ticket) {
  var ticketBase = 12;
  var discount = 0;

 switch (this.time) {
   case "matinee":
   discount += 2
   break;

   default:
 }

 switch (this.age) {
   case "senior":
     discount += 1
     break;
   default:
  }

 switch (this.runStatus) {
   case "old":
     discount += 2
     break;
   default:
  }

    this.price = ticketBase - discount;
};




// USER INTERFACE LOGIC

var ticketsSoldSoFar = new TicketBank();

$(document).ready(function() {
  $("#showtime").submit(function(event) {
    event.preventDefault();

    var title = $("#movieName").val();
    var age = $("#age").val();
    var time = $("#time").val();

    var myTicket = new Ticket(title, time, age);
    myTicket.whichFilm();
    myTicket.calculatePrice();
    var cost = myTicket.price;
    ticketsSoldSoFar.addTicket();
    $("p#showCost").text(title + " " + time + " $" + cost + ".00");

  });
});
