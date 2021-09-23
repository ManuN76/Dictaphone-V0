let author = {
  value: "Queen, Queen, Queen, Queen, Queen, Queen, Queen, Grace",
};
let songVal = { value: "s1, s2, s3, S4, s5, S6, S7, S8" };
let img = { value: "" };
let url = {
  value:
    "https://upload.wikimedia.org/wikipedia/en/f/fb/QueenBohemianRhapsody_Opera.ogg, u2, u3, u4, u5, u6, u7, u8",
};

author = author.value ?? "";
songVal = songVal.value ?? "";
image = img.value ?? "";
url = url.value ?? "";

let authors = author.split(",");
let lsongs = songVal.split(",");
let images = image.split(",");
let urls = url.split(",");

let max = Math.max(authors.length, lsongs.length, images.length, urls.length);

let playlists = [];

for (let i = 0; i < max; i++) {
  let lstAuthor;
  let lstSong;
  let lstImage;
  let lstUrl;

  if (i < authors.length) {
    lstAuthor = authors[i];
  }
  if (i < lsongs.length) {
    lstSong = lsongs[i];
  }
  if (i < images.length) {
    lstImage = images[i];
  }

  if (i < urls.length) {
    lstUrl = urls[i];
  }

  let obj = {
    artistName: lstAuthor,
    songName: lstSong,
    image: lstImage,
    url: lstUrl,
  };

  playlists.push(obj);
}

let songs3 = playlists;

let title = "toto Dictaphone";

let configVolume = 0.8;

//let songs = [];

//songs.push(pl);

let songs = [
  {
    artistName: "Queen",
    songName: "Bohemian Rhapsody - Sample",
    image:
      "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/CXyTWOyiEaYVlDjgVh3t/pub/328IlD8rHbLqNIHEWHLi.png",
    url: "https://upload.wikimedia.org/wikipedia/en/f/fb/QueenBohemianRhapsody_Opera.ogg",
  },
  {
    artistName: "Queen",
    songName: "We Will Rock You - Sample",
    image:
      "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/CXyTWOyiEaYVlDjgVh3t/pub/328IlD8rHbLqNIHEWHLi.png",
    url: "https://upload.wikimedia.org/wikipedia/en/b/bc/Wewillrockyou.ogg",
  },
  {
    artistName: "Queen",
    songName: "Don't Stop Me Know - Sample",
    image:
      "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/CXyTWOyiEaYVlDjgVh3t/pub/328IlD8rHbLqNIHEWHLi.png",
    url: "https://upload.wikimedia.org/wikipedia/en/d/db/Queen_-_Don%27t_Stop_Me_Now.ogg",
  },
  {
    artistName: "Queen",
    songName: "I Want To Break Free - Sample",
    image:
      "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/CXyTWOyiEaYVlDjgVh3t/pub/328IlD8rHbLqNIHEWHLi.png",
    url: "https://upload.wikimedia.org/wikipedia/en/7/75/Queen_I_want_to_break_free.ogg",
  },
  {
    artistName: "Queen",
    songName: "Another One Bites The Dust - Sample",
    image:
      "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/CXyTWOyiEaYVlDjgVh3t/pub/328IlD8rHbLqNIHEWHLi.png",
    url: "https://upload.wikimedia.org/wikipedia/en/3/39/Another-one-bites-the-dust--forward.ogg",
  },
  {
    artistName: "Queen",
    songName: "We Are The Champions - Sample",
    image:
      "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/CXyTWOyiEaYVlDjgVh3t/pub/328IlD8rHbLqNIHEWHLi.png",
    url: "https://upload.wikimedia.org/wikipedia/en/1/1c/Wearethechampions.ogg",
  },
  {
    artistName: "Queen",
    songName: "Crazy Little Thing Called Love - Sample",
    image:
      "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/CXyTWOyiEaYVlDjgVh3t/pub/328IlD8rHbLqNIHEWHLi.png",
    url: "https://upload.wikimedia.org/wikipedia/en/0/06/Queen_-_Crazy_Little_Thing_Called_Love.ogg",
  },
  {
    artistName: "Grace Jones",
    songName: "I've Seen That Face Before",
    image: "",
    url: "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/NYAZHlLwtVGH4mAAC5Px/pub/WVx5ycm1Tp2IBSEVVAMF.mp3",
  },
];

let playerAudio = new Audio();

//Button
let previousButton = document.querySelector(".previous");
let playButton = document.querySelector(".play");
//let pauseButton = document.querySelector(".pause");
let recButton = document.querySelector(".rec");
//let stopButton = document.querySelector(".stop");
let nextButton = document.querySelector(".next");
let volumebutton = document.querySelector(".btnvolume");
// Animation
let firstG = document.querySelector(".first-g");
let secondG = document.querySelector(".second-g");
// Info Artist, Song
let artist = document.querySelector(".artist");
let song = document.querySelector(".song");
// Info CurrentTime, Duration
let currentTime = document.querySelector(".currentTime");
let durationTime = document.querySelector(".durationTime");
// PlayList
let playerPlayList = document.querySelectorAll(".player__song");
let playList = document.querySelector(".player__playlist");
// ProgressBar
let progres = document.querySelector(".progres");
let progresFilled = progres.querySelector(".progres__filled");
// Volume
let volBox = document.querySelector(".volume-box");
let volRange = document.querySelector(".volume-range");
// Visualizer
let recVisualizer = document.querySelector(".rec-visualizer");
let canvas = document.querySelector(".visualizer");
let canvasCtx = canvas.getContext("2d");

let currentSongIndex = 0;
let isPlay = false;
let isRec = false;
let audioCtx;

////////////////////////////////////////////
// Init & Start
////////////////////////////////////////////
start();

////////////////////////////////////////////
// Elements Events
////////////////////////////////////////////
// ProgressBar (scurb)
progres.addEventListener("pointerdown", (e) => {
  scurb(e);
  isMove = true;
});

document.addEventListener("pointermove", (e) => {
  if (isMove) {
    scurb(e);
    song.muted = true;
  }
});

document.addEventListener("pointerup", () => {
  isMove = false;
  song.muted = false;
});

// Buttons Events
recButton.addEventListener("click", function () {
  record();
});
/*
stopButton.addEventListener("click", function () {
  stop();
});
*/
playButton.addEventListener("click", function () {
  play();
});

nextButton.addEventListener("click", function () {
  nextSong();
});

previousButton.addEventListener("click", function () {
  previousSong();
});

volumebutton.addEventListener("click", function () {
  volBox.classList.toggle("active");
});

////////////////////////////////////////////
// Audio Events
////////////////////////////////////////////

//audio.onplay = function () {};

//audio.onpause = function () {};

//audio.onchange = function () {};

//audio.oncanplay = function () {};

//audio.onplaying = function () {};

playerAudio.onended = function () {
  if (isPlay) {
    if (currentSongIndex == songs.length - 1) {
      // End playlist
      btnAllOff();
      spinRemove();
      isPlay = false;
    } else {
      nextSong();
    }
  } else {
    playerAudio.currentTime = 0;
  }
};

playerAudio.ontimeupdate = function () {
  progresUpdate();
};

playerAudio.onload = function () {
  // !!!?????????
  //progresUpdate();
};

function play() {
  if (!isPlay) {
    isPlay = true;
    //progresUpdate();

    //playerAudio.play();

    // Show loading animation. (https://goo.gl/LdLk22)
    var playPromise = playerAudio.play();

    if (playPromise !== undefined) {
      playPromise
        .then((_) => {
          // Automatic playback started!
          progresUpdate();
          btnAllOff();
          playButton.classList.add("button-on");
          spin();
        })
        .catch((error) => {
          // Auto-play was prevented
          // Show paused UI.
        });
    }
  } else {
    pause();
  }
}

function pause() {
  isPlay = false;
  playerAudio.pause();
  btnAllOff();
  spinRemove();
}

function stop() {
  pause();
  playerAudio.currentTime = 0;
  btnAllOff();
  stopButton.classList.add("button-on");
  spinRemove();
}

function currentSong(index) {
  if (index === undefined) {
    artist.innerText = songs[cureentSongIndex].artistName;
    song.innerHTML = songs[currentSongIndex].songName;
    return songs[currentSongIndex];
  } else if (index < songs.length) {
    artist.innerText = songs[index].artistName;
    song.innerHTML = songs[index].songName;
  }
}

function nextSong() {
  //

  newSongIndex = currentSongIndex + 1;

  currentSong(newSongIndex);

  if (newSongIndex < songs.length) {
    btnAllOff();

    nextButton.classList.add("button-on");

    if (!isPlay) {
      firstG.classList.add("spinNext");
      secondG.classList.add("spinNext");
      setTimeout(() => {
        firstG.classList.remove("spinNext");
        secondG.classList.remove("spinNext");
        nextButton.classList.remove("button-on");
      }, 300);
    }

    playerAudio.src = songs[newSongIndex].url;
    playerAudio.currentTime = 0.0001;
    playlist_selectOn(newSongIndex);
    progresUpdate();
    if (isPlay) {
      isPlay = false;
      play();
    } else {
      pause();
    }

    return (currentSongIndex = newSongIndex);
  } else {
    //  btnAllOff();
    //  spinRemove();
    //  isPlay = false;
    return currentSongIndex;
  }
}

function previousSong() {
  newSongIndex = currentSongIndex - 1;

  currentSong(newSongIndex);

  if (newSongIndex < 0) {
    return currentSongIndex;
  } else {
    btnAllOff();
    previousButton.classList.add("button-on");

    if (!isPlay) {
      firstG.classList.add("spinPrevious");
      secondG.classList.add("spinPrevious");
      setTimeout(() => {
        firstG.classList.remove("spinPrevious");
        secondG.classList.remove("spinPrevious");
        previousButton.classList.remove("button-on");
      }, 300);
    }

    playerAudio.src = songs[newSongIndex].url;
    playerAudio.currentTime = 0.0001;
    playlist_selectOn(newSongIndex);
    progresUpdate();
    if (isPlay) {
      isPlay = false;
      play();
    } else {
      pause();
    }
    return (currentSongIndex = newSongIndex);
  }
}

////////////////////////////////////////////
// Record
////////////////////////////////////////////
let mediaRecorder;

function record() {
  if (!isRec) {
    // Start Record

    if (isPlay) {
      pause();
    }

    // Test Media Recorder
    if (navigator.mediaDevices.getUserMedia) {
      // Record is ok
      isRec = true;
      console.log("record ok");
      const constraints = { audio: true };
      let chunks = [];

      let onSuccess = function (stream) {
        mediaRecorder = new MediaRecorder(stream);
        // Disabled all button & playlist
        btnAllOff();
        recButton.classList.add("rec-on");
        previousButton.disabled = true;
        playButton.disabled = true;
        nextButton.disabled = true;
        volumebutton.disabled = true;

        //playList.disabled = true;
        //playerPlayList.disabled = true;

        recVisualizer.classList.add("active");
        spin();

        visualize(stream);

        mediaRecorder.start();
        console.log(mediaRecorder.state);
        console.log("recorder started");

        mediaRecorder.onstop = function (e) {
          console.log("data available after MediaRecorder.stop() called.");

          const blob = new Blob(chunks, { type: "audio/ogg; codecs=opus" });
          chunks = [];
          const audioURL = window.URL.createObjectURL(blob);

          console.log("url", audioURL);
          let newsong = {
            artistName: "Dictaphone",
            songName: "Record #1",
            image: "",
            url: audioURL,
          };
          songs.push(newsong);

          currentSong(songs.length - 1);
          currentSongIndex = songs.length - 1;
          playList_update();
          playlist_selectOn(currentSongIndex);

          playerAudio.src = songs[currentSongIndex].url;
          playerAudio.currentTime = 0.0001;
        };

        mediaRecorder.ondataavailable = function (e) {
          console.log("chunks push");
          chunks.push(e.data);
        };
      };

      let onError = function (err) {
        console.log("The following error occured: " + err);
      };

      navigator.mediaDevices.getUserMedia(constraints).then(onSuccess, onError);
    } else {
      // getUserMedia not supported on your browser!
      console.log("getUserMedia not supported on your browser!");
      spinRemove();
      btnAllOff();
      recButton.classList.remove("rec-on");
      recButton.disabled = true;
      previousButton.disabled = false;
      playButton.disabled = false;
      nextButton.disabled = false;
      volumebutton.disabled = false;

      //playList.disabled = false;
      //playerPlayList.disabled = false;
      isRec = false;
      recVisualizer.classList.remove("active");
    }
  } else {
    if (mediaRecorder != undefined) {
      console.log("media stop");
      mediaRecorder.stop();
    }
    spinRemove();
    btnAllOff();
    recButton.classList.remove("rec-on");
    previousButton.disabled = false;
    playButton.disabled = false;
    nextButton.disabled = false;
    volumebutton.disabled = false;

    // playList.disabled = false;
    // playerPlayList.disabled = false;
    isRec = false;
    recVisualizer.classList.remove("active");
  }
}

function visualize(stream) {
  if (!audioCtx) {
    audioCtx = new AudioContext();
  }

  const source = audioCtx.createMediaStreamSource(stream);

  const analyser = audioCtx.createAnalyser();
  analyser.fftSize = 2048;
  const bufferLength = analyser.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);

  source.connect(analyser);
  //analyser.connect(audioCtx.destination);

  draw();

  function draw() {
    const WIDTH = canvas.width;
    const HEIGHT = canvas.height;

    requestAnimationFrame(draw);

    analyser.getByteTimeDomainData(dataArray);

    canvasCtx.fillStyle = "#ebebeb";
    canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);

    canvasCtx.lineWidth = 2;
    canvasCtx.strokeStyle = "rgb(0, 0, 0)";

    canvasCtx.beginPath();

    let sliceWidth = (WIDTH * 1.0) / bufferLength;
    let x = 0;

    for (let i = 0; i < bufferLength; i++) {
      let v = dataArray[i] / 128.0;
      let y = (v * HEIGHT) / 2;

      if (i === 0) {
        canvasCtx.moveTo(x, y);
      } else {
        canvasCtx.lineTo(x, y);
      }

      x += sliceWidth;
    }

    canvasCtx.lineTo(canvas.width, canvas.height / 2);
    canvasCtx.stroke();
  }
}

////////////////////////////////////////////
// Animation & Buttons Display
////////////////////////////////////////////
function spin() {
  firstG.classList.add("spin");
  secondG.classList.add("spin");
}

function spinRemove() {
  firstG.classList.remove("spin");
  secondG.classList.remove("spin");
}

function btnAllOff() {
  previousButton.classList.remove("button-on");
  playButton.classList.remove("button-on");
  // pauseButton.classList.remove("button-on");
  nextButton.classList.remove("button-on");
  recButton.classList.remove("button-rec-on");
  //stopButton.classList.remove("button-on");
}

////////////////////////////////////////////
// Progress Bar & info CurrentTime, Duration
////////////////////////////////////////////
let isMove = false;

function progresUpdate() {
  const progresFilledWidth =
    (playerAudio.currentTime / playerAudio.duration) * 100 + "%";
  if (progresFilledWidth == "NaN%") {
    progresFilled.style.width = 0;
    currentTime.textContent = "0:00";
    durationTime.textContent = "0:00";
  } else {
    progresFilled.style.width = progresFilledWidth;
    currentTime.textContent = formatTime(playerAudio.currentTime);
    durationTime.textContent = formatTime(playerAudio.duration);
  }
}

function formatTime(sec) {
  if (sec == Infinity || sec == NaN) return "";
  let minutes = Math.floor(sec / 60);
  let seconds = Math.floor(sec - minutes * 60);
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  return minutes + ":" + seconds;
}

function scurb(e) {
  // If we use e.offsetX, we have trouble setting the song time, when the mousemove is running
  const currentTime =
    ((e.clientX - progres.getBoundingClientRect().left) / progres.offsetWidth) *
    playerAudio.duration;
  playerAudio.currentTime = currentTime;
}

////////////////////////////////////////////
// Init & Start
////////////////////////////////////////////
function start() {
  // Chargement PlayList
  let y = (document.querySelector(".header_title").textContent = title);
  playList_update();
  playlist_selectOn(0);
  currentSong(0);
  playerAudio.src = songs[currentSongIndex].url;
  playerAudio.currentTime = 0.0001;
  playerAudio.volume = configVolume;
  //playlistsongclick(currentSongIndex);
  progresUpdate();

  let x = document.querySelector(".volume-range");
  x.value = configVolume * 100;
}

////////////////////////////////////////////
// PlayList
////////////////////////////////////////////

function playList_update() {
  playList.innerHTML = "";
  for (let i = 0; i < songs.length; i++) {
    let htmlli = "";
    htmlli =
      '<li class="player__song" onclick="playlistsongclick(this.id)" id=' +
      i +
      ">";

    if (songs[i].image) {
      htmlli +=
        '<img class="player__img img" src="' + songs[i].image + '" alt="">';
    } else {
      htmlli += '<div class="player__img img"></div>';
    }

    htmlli +=
      '<p class="player__context"><b class="player__song-name">' +
      songs[i].artistName +
      '</b><span class="flex"><span class="player__title">' +
      songs[i].songName +
      '</span></p><div class="player__song-on"><i class="fas fa-volume-up"></i></div></li>';
    playList.innerHTML += htmlli;
  }
}

function playlistsongclick(index) {
  let i = parseInt(index);
  currentSongIndex = i;
  currentSong(i);

  playerAudio.src = songs[i].url;
  playerAudio.currentTime = 0.0001;
  playlist_selectOn(i);
  progresUpdate();
  if (isPlay) {
    isPlay = false;
    play();
  } else {
    pause();
  }
}

function playlist_selectOn(index) {
  for (let i = 0; i < songs.length; i++) {
    let x = document.getElementById(i);
    if (i == index) {
      let y = x
        .querySelector(".player__song-on")
        .classList.remove("player__song-off");
    } else {
      let y = x
        .querySelector(".player__song-on")
        .classList.add("player__song-off");
    }
  }
}
