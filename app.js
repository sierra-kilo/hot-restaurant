function Reservation(name, email, phone, id) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.id = id;
}

$("form").submit(function(event) {
    event.preventDefault();

    var customerInfo = {
        customerName: $("#name").val().trim(),
        phoneNumber: $("#email").val().trim(),
        customerEmail: $("#phone").val().trim(),
        customerID: $("#id").val().trim()
    };

    var customer =

})










// get info from front end at submit button
// create new instance of reservations
// add instance to the list

// for loop with a counter, that takes the first 5 reservations and adds it to tableList and takes all other reservations, and adds it to waitList


//module.exports = *;
