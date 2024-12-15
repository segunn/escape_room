const puzzle_keys = ["books", "bunks", "globes", "socks", "stables", "toys"]

function displayAccurateProgress() {
    const prog = document.getElementById("solve_count")

    var solved_puzzle_count = 0;

    puzzle_keys.forEach((x,i) => {
        const val = localStorage.getItem(x);
        if (val === "solved"){
            solved_puzzle_count += 1;
        }
    })

    prog.innerHTML = solved_puzzle_count
}


document.addEventListener("DOMContentLoaded", displayAccurateProgress);