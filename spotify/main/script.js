function card(thumbnail, play_name){ 
    let card = ` <div class="card" style="background-color: transparent;">
                                <img src="${thumbnail}" alt="">
                                <div class="text-card" style="background-color: transparent;">
                                    <h3 style="background-color: transparent;">${play_name}</h3>
                                    <div class="ant" style="background-color: transparent;">
                                        <h3 style="background-color: transparent;">Playlist</h3>
                                        <div id="separator" class="style-scope ytd-video-meta-block"
                                        style="background-color: transparent;">•</div>
                                        <h3 style="background-color: transparent;">Spotify</h3>
                                    </div>
                                </div>
                            </div>`

    document.querySelector(".cards").insertAdjacentHTML("beforeend", card);
}
card("https://i.scdn.co/image/ab67656300005f1ff9afc453e6cbd2f2f5abaa52","This is sigma")
