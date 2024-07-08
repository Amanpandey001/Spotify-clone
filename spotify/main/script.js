async function card(thumbnail, play_name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
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
            resolve("playlist loaded successfully");
        }, 0);
    })
}

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

async function card2(photo, title, desc) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
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
            resolve("card added successfully"); // Resolve after the card is added
        }, 50);
    });
}
async function play() {

    return new Promise((resolve, reject) => {
      setTimeout(() => {
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
      }, 500);
      resolve("song played successfully");
    })

}

async function main() {
    await card2("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpYcfFprQGVA8IlzRT3NaLPD1TtG17iZiLTg&usqp=CAU", "Shinunoga-E-Wa | Fujii Kaze", "Shinunoga-E-Wa | Fujii Kaze");
    await card2("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpYcfFprQGVA8IlzRT3NaLPD1TtG17iZiLTg&usqp=CAU", "Shinunoga-E-Wa | Fujii Kaze", "Shinunoga-E-Wa | Fujii Kaze");
    await card2("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpYcfFprQGVA8IlzRT3NaLPD1TtG17iZiLTg&usqp=CAU", "Shinunoga-E-Wa | Fujii Kaze", "Shinunoga-E-Wa | Fujii Kaze");
    
    await play();
    // Initial card for example
    await card("https://i.scdn.co/image/ab67656300005f1ff9afc453e6cbd2f2f5abaa52", "This is sigma");
}
main();
