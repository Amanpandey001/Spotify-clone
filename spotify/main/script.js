function card(thumbnail, play_name){ 
    let card = ` <div class="card" style="background-color: transparent;">
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
card("https://i.scdn.co/image/ab67656300005f1ff9afc453e6cbd2f2f5abaa52","This is sigma");

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
