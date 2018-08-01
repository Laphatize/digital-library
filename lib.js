
// (C) Pranav Ramesh 2018-2019
// Cookie Based Security System

var checkBook;

function register(cname) {
    document.cookie = cname + "=checked";
}

function destroy(cname) {

	document.cookie = cname + "=false"

}


function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}


function checkOut() {
	var checked = getCookie("checked");

	if (checked != "checked") {
	var name = window.prompt("What is your name?")
	// users.append(name);
	register("checked")
	window.alert("Ok, " + name + ", you've been added to the system. Your IP is logged until we can confirm Schoology has your name! Please remember to return the book when your done with it.")
	} else {

		window.alert("You've already returned your book!");

	}

}

function checkIn() {
	var checked = getCookie("checked");
	var name = window.prompt("What's your name?")
	// try {users.pop(name);} catch(err) {console.log("Error with removing user from list.")}
	destroy(checked);
	window.alert("The name, " + name + ", will no longer be found in the database. Ensure, you delete the digital book of your computer.")
}