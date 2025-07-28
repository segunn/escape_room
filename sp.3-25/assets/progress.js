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
    for (let m = 0; m < totalMissions; m++) {
        for (let s = 0; s < starsPerMission; s++) {
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
        for (let s = 0; s < starsPerMission; s++) {
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
    var answer = answer_box.value

    // TODO downcase , strip etc

    if (answer == correct_answer) {
        storeCompletedMission(mission=mission, stage=stage)
        // TODO display reset instructions and link to next puzzle
    } else {
        alert("I'm sorry, Dave. I'm afraid I can't do that.")
    }
    answer_box.value = null
}




function updateMissionStats() {
    updateStats()  // update the counts in the top bar

    // TODO for each .mission_progress, check how many of the missions are done and update the icons

        // TODO also change the link to go to the next incomplete stage
}