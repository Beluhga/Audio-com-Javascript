const cover = document.querySelector(".card-image");
const title = document.querySelector(".card-content h5");
const artist = document.querySelector(".artist");
const audio = document.querySelector("audio");

const data = {
    title: "Seraphine",
    artist: "KDA",
    cover: "files/kda-more-dz.jpg",
    file: "files/( 한글 번역 가사 ) KDA - POPSTARS ( Coverd by 세라핀 Seraphine ) ( Full Lyrics ).mp3"
};

cover.style.background = `url('${data.cover}') no-repeat center center / cover`;
title.innerText = data.title;
artist.innerText = data.artist;
audio.src =  data.file;