//This is a comment
function TestFunction(){
    var people = ["John", "Jane", "Mike"];
    var randomIndex = Math.random() * people.length;
    var flooredIndex = Math.floor(randomIndex);
    var randomName = people[flooredIndex];
    document.getElementById("nameParagarph").innerHTML = randomName;
}





