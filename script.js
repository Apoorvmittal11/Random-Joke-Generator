const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Why don't skeletons fight each other? They don't have the guts.",
    "What do you call fake spaghetti? An impasta!",
    "Why was the math book sad? Because it had too many problems.",
    "Why are ghosts bad at lying? Because they are too transparent.",
    "Why did the bicycle fall over? Because it was two-tired!",
    "How does a penguin build its house? Igloos it together!",
    "Why did the golfer bring an extra pair of pants? In case he got a hole in one.",
    "Why did the computer go to the doctor? Because it had a virus."
];
function show(){
    var index=document.getElementById('guessInput').value-1;
    if(index>=10){
        windows.alert("choose between 1 to 10");
    }
    var jo=jokes[index];
    document.getElementById("joke").textContent=jo;
}