function generateSummary() {
    const name = document.getElementById("name").value;
    if (name.trim() === "") {
        alert("Please write your name.");
        return;
    }
    const pronoun = document.getElementById("pronoun").value;
    if (pronoun.trim() === "") {
        alert("Please write your pronoun.");
        return;
    }
    let pronounSub;
    if (pronoun === 'they') {
        pronounSub = 'them';
    } else if (pronoun === 'he') {
        pronounSub = 'him';
    } else if (pronoun === 'she') {
        pronounSub = 'her';
    } else {
        alert("Please write your pronoun as 'they', 'he', or 'she'.");
        return;
    };
    let pronounPoss;
    if (pronoun === 'they') {
        pronounPoss = 'their';
    } else if (pronoun === 'he') {
        pronounPoss = 'his';
    } else if (pronoun === 'she') {
        pronounPoss = 'her';
    } else {
        alert("Please write your pronoun as 'they', 'he', or 'she'.");
        return;
    };
    const strengths = Array.from(document.getElementsByName("selectedStrengths")).filter(checkbox => checkbox.checked).map(checkbox => checkbox.value);
    if (strengths.length !== 3) {
        alert("Please select 3 strengths.");
        return;
    }
    const keyOne = document.getElementById("keyword-1").value;
    const keyTwo = document.getElementById("keyword-2").value;
    if (keyOne.trim() === "" || keyTwo.trim() === "") {
        alert("Please write your experience key words in both field.");
        return;
    };

    // Create multiple summary options
    const summary1 = `${name} is a highly motivated professional known for being ${strengths[0]}, ${strengths[1]}, and ${strengths[2]}. With a background in ${keyOne} and a strong passion for ${keyTwo}, ${pronoun} bring(s) innovation and a fresh perspective to every project, making a positive impact on team dynamics.`;

    const summary2 = `A/an ${strengths[0]}, ${strengths[1]} professional, ${name} possesses a unique blend of skills that include ${keyOne} and an exceptional understanding of ${keyTwo}. With a commitment to excellence and an innate ${strengths[2]} skills, ${pronoun} consistently deliver(s) outstanding results, making ${pronounSub} an ideal choice for challenging projects.`;

    const summary3 = `Meet ${name}, a/an ${strengths[0]} professional renowned for ${pronounPoss} expertise in ${keyOne} and ${pronounPoss} ability to bring successful results in ${keyTwo}. Known for ${pronounPoss} strong ${strengths[1]} and ${strengths[2]} skills, ${pronoun} is/are a valuable asset for any organization looking to achieve exceptional outcomes.`;

    const summary4 = `${name} is a dynamic and innovative professional, known for ${pronounPoss} exceptional ${strengths[0]} and ${strengths[1]} abilities. With expertise in ${keyOne} and a keen eye for ${keyTwo}, ${pronoun} consistently deliver(s) creative solutions and drives success for ${pronounPoss} team and organization.`;

    const summary5 = `As a skilled and adaptable ${strengths[0]} expert, ${name} brings ${pronounPoss} passion for ${keyOne} and expertise in ${keyTwo} to every project. Known for ${pronounPoss} ability to ${strengths[1]} and ${strengths[2]}, ${pronoun} is/are a valuable asset who ensures the achievement of remarkable results and fosters a collaborative working environment.`;

    // Choose a random summary to display
    const summaries = [summary1, summary2, summary3, summary4, summary5];
    const selectedSummary = summaries[Math.floor(Math.random() * 5)];

    // Display the summary
    document.getElementById("summaryResult").innerText = selectedSummary;
};
function formEventHandler() {
    let submitBtn = document.querySelector("#generate");
    let resetBtn = document.querySelector("#reset");
    let result = document.querySelector("#summaryResult");
    let again = document.querySelector("#again");
    submitBtn.addEventListener('click', function(e) {
        e.preventDefault();
        generateSummary();
        result.removeAttribute("class");
        again.removeAttribute("class");
    });
    resetBtn.addEventListener('click', function() {
        result.setAttribute("class", "hidden");
        again.setAttribute("class", "hidden");
    });
};
window.onload = function() {
    formEventHandler();
}