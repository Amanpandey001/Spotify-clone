function card(thumbnail, play_name) {
    let card = `<div class="card" style="background-color: transparent;">
                    <img src="${thumbnail}" alt="">
                    <div class="text-card" style="background-color: transparent;">
                        <h3 style="background-color: transparent;">${play_name}</h3>
                        <div class="ant" style="background-color: transparent;">
                            <h3 style="background-color: transparent;">Playlist</h3>
                            <div id="separator" class="style-scope ytd-video-meta-block" style="background-color: transparent;">•</div>
                            <h3 style="background-color: transparent;">Spotify</h3>
                        </div>
                    </div>
                </div>`;
    document.querySelector(".cards").insertAdjacentHTML("beforeend", card);
}

// Initial card for example
card("https://i.scdn.co/image/ab67656300005f1ff9afc453e6cbd2f2f5abaa52", "This is sigma");

document.getElementById('plus').addEventListener('click', function () {
    const popup = document.getElementById('playlist-popup');
    popup.style.display = popup.style.display === 'none' ? 'block' : 'none';
});

let txt1 = document.querySelector(".playname");
let btn1 = document.querySelector(".submit");
let out1 = document.querySelector(".cards");

function fun1(e) {
    e.preventDefault(); // Prevent form submission
    if (txt1.value.trim() !== "") {
        card("https://via.placeholder.com/50", txt1.value); // Add a placeholder thumbnail
        txt1.value = ""; // Clear the input field
        document.getElementById('playlist-popup').style.display = 'none'; // Hide the popup
    }
}

btn1.addEventListener("click", fun1);

function card2(photo, title, desc) {
    let card02 = `<div class="card02">
                        <img src="${photo}" width="150px" height="150px" alt="">
                        <div class="cartext" style="background-color: transparent;">
                            <p>${title}</p>
                            <p>${desc}</p>
                        </div>
                        <div class="playbtn" style="background-color: transparent;">
                            <button id="playbtn"><img style="background-color: transparent;" width="20px" src="../assets/playbtn.svg" alt=""></button>
                        </div>
                  </div>`;
    document.querySelector(".cards02").insertAdjacentHTML("beforeend", card02);
}

card2("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpYcfFprQGVA8IlzRT3NaLPD1TtG17iZiLTg&usqp=CAU", "Shinunoga-E-Wa | Fujii Kaze", "Shinunoga-E-Wa | Fujii Kaze");
card2("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpYcfFprQGVA8IlzRT3NaLPD1TtG17iZiLTg&usqp=CAU", "Shinunoga-E-Wa | Fujii Kaze", "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
card2("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv-DYaF4aiUF85tXsPwPZVZTD4of8ZzbWbpg&usqp=CAU", "Yi Xiao Jiang Hu ", "Yi Xiao Jiang Hu ");
card2("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv-DYaF4aiUF85tXsPwPZVZTD4of8ZzbWbpg&usqp=CAU", "Yi Xiao Jiang Hu ", "Yi Xiao Jiang Hu ");
card2("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv-DYaF4aiUF85tXsPwPZVZTD4of8ZzbWbpg&usqp=CAU", "Yi Xiao Jiang Hu ", "Yi Xiao Jiang Hu ");
card2("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv-DYaF4aiUF85tXsPwPZVZTD4of8ZzbWbpg&usqp=CAU", "Yi Xiao Jiang Hu ", "Yi Xiao Jiang Hu ");
// card2("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv-DYaF4aiUF85tXsPwPZVZTD4of8ZzbWbpg&usqp=CAU", "Yi Xiao Jiang Hu ", "Yi Xiao Jiang Hu ");

// function play(target) {
//     let playButtonHTML = `<button id="playbtn"><img style="background-color: transparent;" width="20px" src="../assets/playbtn.svg" alt=""></button>`;
//     target.querySelector(".playbtn").insertAdjacentHTML("beforeend", playButtonHTML);
// }

// function removePlayButton(target) {
//     const playButton = target.querySelector("#playbtn");
//     if (playButton) {
//         playButton.remove();
//     }
// }

// // Event delegation for mouseover and mouseout
// document.querySelector(".cards02").addEventListener("mouseover", function(event) {
//     if (event.target.closest(".card02")) {
//         play(event.target.closest(".card02"));
//     }
// });

// document.querySelector(".cards02").addEventListener("mouseout", function(event) {
//     if (event.target.closest(".card02")) {
//         removePlayButton(event.target.closest(".card02"));
//     }
// });

function play() {
    const audHTML = '<audio src="../assets/songs/har har shambhu.mp3" autoplay hidden class="current-audio"></audio>';
    
    document.querySelectorAll(".playbtn").forEach(e => {
        e.addEventListener("click", () => {
            let audioContainer = document.querySelector(".audio");
            let currentAudio = document.querySelector(".current-audio");
            
            if (currentAudio) {
                currentAudio.remove();
            } else {
                audioContainer.insertAdjacentHTML("beforeend", audHTML);
            }
        });
    });
}

play();
