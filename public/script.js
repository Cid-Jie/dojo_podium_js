const showPodium = document.getElementById("showPodium");

showPodium.addEventListener('click', function() {
    const result = document.getElementById('result');
    const scorePlayer1 = document.getElementById('scorePlayer1').value;
    const scorePlayer2 = document.getElementById('scorePlayer2').value;
    const scorePlayer3 = document.getElementById('scorePlayer3').value;

    let scores = [
        {'name': 'Joueur 1', 'score': scorePlayer1},
        {'name': 'Joueur 2', 'score': scorePlayer2},
        {'name': 'Joueur 3', 'score': scorePlayer3},
    ];

    scores.sort(function(a, b) {
        return b.score - a.score;
    });

    /*let podium = "<ul>";
    for (const player of scores) {
        podium += '<li class="mb-5 mt-5">' + player.name + ' - ' + player.score + '</li>';
    }
    podium += "</ul>";
    result.innerHTML = podium;*/

    const stepFirst = document.getElementById('stepFirst');
    const stepSecond = document.getElementById('stepSecond');
    const stepThird = document.getElementById('stepThird');

    stepFirst.innerHTML = scores[0].name;
    stepSecond.innerHTML = scores[1].name;
    stepThird.innerHTML = scores[2].name;

    stepFirst.classList.toggle('clearStepFirst');
    stepSecond.classList.toggle('clearStepSecond');
    stepThird.classList.toggle('clearStepThird');
});