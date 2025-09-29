document.addEventListener("DOMContentLoaded", function() {
    const lines = [
        "Dear Gheraldine,",
        "Happy Birthday babyyy!",
        "Wow 19 kana so tanda grabe talaga. Anw first of all, thank you for being such an amazing girlfriend, for taking care of me, for paglibre sakin kase wala akong pera hays, Im sorry kung hanggang ngayon di ko pa din mabago yung ugali ko na magalit at mabilis uminit ang ulo, thank you dahil hanggang ngayon natitiis mo pa din ako kahit ganun ako.",
        "Thank you din sa lahat ng mga bagay na ginagawa mo para sakin, sa mga effort na pinapakita mo, sa mga lambing, sa mga kwentuhan natin, sa mga tawanan at sa lahat ng memories na ginagawa natin magkasama.",
        "I know im not the best girlfriend in the world, but i promise to always try my best to be better for you and for us. Kahit hindi ko naman nagagawa :(",
        "Puro lang naman ako salita hindi ko naman nagagawa, pero i hope you know that i really do care about you and i really do love you with all my heart.",
        "Sa mga nasasabi ko or nagagawa ko man na nakakasakit sayo, im really really sorry. I never meant to hurt you or make you feel bad.",
        "Im sorry for being so pasaway and hindi nakikinig sayo, ik you only want the best for you and for us.",
        "I promise to always try to be better for you and for us. Ilang promise ko na to kelan ko kaya magagawa hays pero i really do mean it fr fr i don't know lang kung bakit ganon ako.",
        "Sana hindi ka mapagod sa ugali ko and hindi din ako mapapagod sayo kahit ano pang sabihin mo tungkol sa sarili mo, dahil sa totoo lang, you are the most amazing person i have ever met in my entire life.",
        "You are kind, caring, loving, beautiful, smart, funny and so much more. I am so lucky to have you in my life and i promise to always cherish and love you with all my heart.",
        "Im sorry for hurting you and making you feel bad, i never meant to do that. I hope hindi ka magsawa patawarin ako kahit paulit ulit nalang akong nagkakamali. Hinding hindi kita iiwan, dito lang ako palagi sayo.",
        "Puro nalang ako sorry dito hays, sige thank you nalang hehe, thank you for everything babe, thank you for being you, thank you for loving me, thank you for being my girlfriend, thank you for being my bestfriend, thank you for being my everything.",
        "I hope maenjoy mo yung  birthday mo since once a year lang yan so treasure every moment of it. I love you so much my babyyyyy. Happy happy happy birthday again my love.",
        "Enjoy your day and always remember that i love you with all my heart.",
        "Yours truly,",
        "Janna Bianca Dy"
    ];
    const container = document.getElementById('typed-letter');
    let lineIdx = 0;

    function typeLine() {
        if (lineIdx < lines.length) {
            let charIdx = 0;
            let line = lines[lineIdx];
            let p = document.createElement('p');
            container.appendChild(p);
            function typeChar() {
                if (charIdx <= line.length) {
                    p.textContent = line.slice(0, charIdx);
                    charIdx++;
                    setTimeout(typeChar, 35);
                } else {
                    lineIdx++;
                    setTimeout(typeLine, 400);
                }
            }
            typeChar();
        }
    }
    typeLine();
});