const totalMissions = 5
const starsPerMission = 3

function buildStageKey(mission, stage) {
    return mission.toString() + "." + stage.toString()
}

function checkIfCompleted(mission, stage) {
    if (!localStorage.getItem(buildStageKey(mission, stage))) {
        return false
    } else {
        return true
    }
}

function updateStarsCount() {
    var completed_stages = 0;
    for (let m = 0; m <= totalMissions; m++) {
        for (let s = 0; s <= starsPerMission; s++) {
            if (checkIfCompleted(mission=m, stage=s) === true) {
                completed_stages++
            }
        }
    }
    document.getElementById('stars_complete').innerText = completed_stages
}

function updateMissionsCount() {
    var completed_mission = 0;
    for (let m = 0; m < totalMissions; m++) {
        var completed_stages = 0
        for (let s = 0; s <= starsPerMission; s++) {
            if (checkIfCompleted(mission=m, stage=s) === true) {
                completed_stages++
            }
        }
        if (completed_stages == starsPerMission) {
            completed_mission ++
        }
    }
    document.getElementById('missions_complete').innerText = completed_mission
}

function updateStats() {
    updateStarsCount()
    updateMissionsCount()
}

function storeCompletedMission(mission, stage) {
    if ( checkIfCompleted(mission=mission, stage=stage) === true) {
        console.log("Already logged")
        return  // We already logged this one
    }
    
    var stage_key = buildStageKey(mission=mission, stage=stage)
    localStorage.setItem(stage_key, "done")
    updateStats()
}

function checkAnswer(correct_answer, mission, stage) {
    var answer_box = document.getElementById('answer');
    var answer = answer_box.value.toLowerCase().replace(/[^\w]/g, '')

    if (answer == correct_answer) {
        storeCompletedMission(mission=mission, stage=stage)
        alert("You did it! Please leave this planet how you found it, and boldly go to the next phase.")
    } else {
        const fail_messages = [
            "I'm sorry, Dave. I'm afraid I can't do that. Please try again.",
            "Houston, we have a problem. Please try again.",
            "Those aren't the codes you're looking for. Please try again.",
            "Try again - and this time, use the force. Please try again.",
            "That's one small misstep for man, one giant L for mankind. Please try again.",
        ]
        const randomElement = fail_messages[Math.floor(Math.random() * fail_messages.length)];

        alert(randomElement)
    }
    answer_box.value = null
}




function updateMissionStats() {
    updateStats()  // update the counts in the top bar

    // Update the star icons
    document.getElementById("section").querySelectorAll('span.status_icon').forEach(element => {
        var parent_id = element.parentElement.id;
        if ( checkIfCompleted(mission=parent_id[2], stage=parent_id[4]) === true) {
            element.classList.add("fa-star")
            element.classList.remove("fa-star-o")
        }
        
      })
}