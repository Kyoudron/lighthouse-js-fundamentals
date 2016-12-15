var temperature = 46;
var raining = false;

if (temperature < 0) {
    console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
    console.log("Short sleeves won't cut it!");
} else if (temperature < -40 || temperature > 40) {
    console.log ("Maybe going outside is not a good idea...");
} else {
    console.log("Short sleeves are fine.")
}

if (!raining) {
    console.log("And leave your umbrella at home!");
} else if (raining) {
    console.log("Take your umbrella!");
}
console.log("Now you're ready to go outside!");

