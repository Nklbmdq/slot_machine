let balance = 100;
let luck = 50; // 1-100, can be changed

document.getElementById("spin-btn").addEventListener("click", spin);

function spin() {
    if(balance <= 0){
        alert("You are out of money!");
        return;
    }
    balance -= 1; // cost of spin
    document.getElementById("balance").textContent = balance;

    let reel1 = Math.floor(Math.random() * 10);
    let reel2 = Math.floor(Math.random() * 10);
    let reel3 = Math.floor(Math.random() * 10);

    document.getElementById("reel1").textContent = reel1;
    document.getElementById("reel2").textContent = reel2;
    document.getElementById("reel3").textContent = reel3;

    // Win condition: all 7
    if(reel1 === 7 && reel2 === 7 && reel3 === 7){
        balance += 100;
        alert("🎉 JACKPOT! You won $100!");
        document.getElementById("balance").textContent = balance;
    }
}
