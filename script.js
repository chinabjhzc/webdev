var age = Number(prompt("What is you age?"));
while (age == null) {
    age = Number(prompt("What is you age?"));
}
if (age === 18) {
    alert("Bingoooooooooooooooo");
}

if (age < 18) {
    alert("You are not allowed to get inside the venue!");
} else
if (age >= 18 && age <= 21) {
    alert("You are allowed to  get inside the venue, but can't drink!");
} else {
    alert("You are allowed to  get inside the venue and drink!");
}