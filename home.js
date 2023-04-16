function myformValidation() {
    var name = document.myform.name;
    var phone = document.myform.phone;
    var package = document.myform.package;
    var destination = document.myform.destination;
    var people = document.myform.people;
    var date = document.myform.date;

    if (allLetter(name)) {
        if (allnumeric(phone)) {
            if (allLetter(package)) {
                if (allLetter(destination)) {
                    if (allnumeric(people)) {

                        if (alphanumeric(date)) {

                        }
                    }
                }
            }
        }
    }
}
return false;

function allLetter(name) {
    var letters = /^[A-Za-z]+$/;
    if (name.value.match(letters)) {
        return true;
    } else {
        alert('Name must have letters only');
        name.focus();
        return false;
    }
}

function allnumeric(phone) {
    var numbers = /^[0-9]+$/;
    if (phone.value.match(numbers)) {
        return true;
    } else {
        alert('Numeric characters only')
        phone.focus();
        return false;
    }
}

function alphanumeric(date) {
    var letters = /^[0-9A-Za-z]+$/;
    if (date.value.match(letters)) {
        return true;
    } else {
        alert('Date should contain numbers and a slash or dot.');
        date.focus();
        return false;
    }
}

function allnumeric(people) {
    var numbers = /^[0-9]+$/;
    if (people.value.match(numbers)) {
        return true;
    } else {
        alert('Enter numeric characters only')
        people.focus();
        return false;
    }
}

function allLetter(destination) {
    var letters = /^[A-Za-z]+$/;
    if (destination.value.match(letters)) {
        return true;
    } else {
        alert('Destination must have alphabet characters only');
        destination.focus();
        return false;
    }
}

function allLetter(package) {
    var letters = /^[A-Za-z]+$/;
    if (package.value.match(letters)) {
        return true;
    } else {
        alert('Package must have alphabet characters only');
        package.focus();
        return false;
    }
}