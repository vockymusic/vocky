// media controllers
const playPause = document.querySelector("#play-stop");
const backward = document.querySelector("#backward");
const forward = document.querySelector("#forward");

// record player animation
const circleBig = document.querySelector("#circle-bg");
const circleSm = document.querySelector("#circle-sm");

// playing song
const songName = document.querySelector("#song-name");
const audio = document.querySelector("#audio");
const coverArt = document.querySelector("#cover");
const musicbox = document.querySelector("#musicbox");

// control button images
let playImg = "https://disk.gozle.com.tm/api/v1/file-entries/download/NjM2MTN8cGFkZA?shareable_link=2212.png";
let pauseImg = "https://disk.gozle.com.tm/api/v1/file-entries/download/NjM2MTR8cGFkZA?shareable_link=2213.png";

// default controls
playPause.src = playImg;
let isPlaying = true;

const songList = [
    {
        name: "DO OR DIE",
        source: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjYyMDl8cGFkZA?workspaceId=0",
        cover: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjExNjl8cGFkZA?shareable_link=2085.png"
    },
    {
        name: "SXND NXDES 2",    
        source: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjYyMTB8cGFkZA?workspaceId=0",
        cover: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjExNjl8cGFkZA?shareable_link=2085.png"
    },
    {
        name: "BONKERS",
        source: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjYyMDd8cGFkZA?workspaceId=0",
        cover: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjExNjl8cGFkZA?shareable_link=2085.png"
    },
    {
        name: "SXND NXDES",
        source: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjYyMTF8cGFkZA?workspaceId=0",
        cover: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjExNjl8cGFkZA?shareable_link=2085.png"
    },
    {
        name: "I dont give a Fuck",
        source: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjYyMTN8cGFkZA?workspaceId=0",
        cover: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjExNjl8cGFkZA?shareable_link=2085.png",
    },
    {
        name: "Phonky Tribu",
        source: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjYyMTl8cGFkZA?workspaceId=0",
        cover: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjExNjl8cGFkZA?shareable_link=2085.png"
    },
    {
        name: "Close Eyes",
        source: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjYyMjB8cGFkZA?workspaceId=0",
        cover: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjExNjl8cGFkZA?shareable_link=2085.png"
    },
    {
        name: "Prince of Darkness",
        source: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjYyMjF8cGFkZA?workspaceId=0",
        cover: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjExNjl8cGFkZA?shareable_link=2085.png"
    },
    {
        name: "Murder in my mind",
        source: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjYyMjJ8cGFkZA?workspaceId=0",
        cover: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjExNjl8cGFkZA?shareable_link=2085.png"
    },
    {
        name: "БАСЫ ДОЛБЯТ",
        source: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjYyMjN8cGFkZA?workspaceId=0",
        cover: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjExNjl8cGFkZA?shareable_link=2085.png"
    },
    {
        name: "RAVE",
        source: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjYyMjR8cGFkZA?workspaceId=0",
        cover: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjExNjl8cGFkZA?shareable_link=2085.png"
    },
    {
        name: "Live Another Day",
        source: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjYyMjZ8cGFkZA?workspaceId=0",
        cover: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjExNjl8cGFkZA?shareable_link=2085.png"
    },
    {
        name: "Sahara",
        source: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjYyMjd8cGFkZA?workspaceId=0",
        cover: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjExNjl8cGFkZA?shareable_link=2085.png"
    },
    {
        name: "Midnight",
        source: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjYyMjh8cGFkZA?workspaceId=0",
        cover: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjExNjl8cGFkZA?shareable_link=2085.png"
    },
    {
        name: "vendetta!",
        source: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjYyMjl8cGFkZA?workspaceId=0",
        cover: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjExNjl8cGFkZA?shareable_link=2085.png"
    },
    {
        name: "Metamorphosis",
        source: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjYyMzF8cGFkZA?workspaceId=0",
        cover: "https://disk.gozle.com.tm/api/v1/file-entries/download/NjExNjl8cGFkZA?shareable_link=2085.png"
    },

];
// helper function
function createEle(ele) {
    return document.createElement(ele);
}
function append(parent, child) {
    return parent.append(child);
}
// creating track list
const ul = createEle('ul')
function createPlayList() {
    songList.forEach((song) => {
        let h3 = createEle('a');
        let li = createEle('li');

        li.classList.add("track-item");
        h3.innerText = song.name;
        append(li,h3);
        append(ul,li)
    })
    append(musicbox, ul);
}

let songIndex = 0;
// preloaded song
loadMusic(songList[songIndex]);


function loadMusic() {
    coverArt.src = songList[songIndex].cover;
    songName.innerText = songList[songIndex].name;
    audio.src = songList[songIndex].source;
}

function playSong() {
    playPause.src = pauseImg;
    circleBig.classList.add("animate");
    circleSm.classList.add("animate");

    audio.play();
}

function pauseSong() {
    playPause.src = playImg;
    circleBig.classList.remove("animate");
    circleSm.classList.remove("animate");

    audio.pause();
}

function nextPlay() {
    songIndex++;
    if(songIndex > songList.length - 1) {
        songIndex = 0;
    }
    loadMusic(songList[songIndex]);
    playSong()
}

function backPlay() {
    songIndex--;
    if(songIndex < 0) {
        songIndex = songList.length - 1;
    }
    loadMusic(songList[songIndex]);
    playSong()
}
function playHandler() {
    isPlaying = !isPlaying;
    //console.log("Change: ",isPlaying)
    isPlaying ? pauseSong() : playSong();
}


// player event 
playPause.addEventListener("click", playHandler);
backward.addEventListener("click", backPlay);
forward.addEventListener("click", nextPlay);

createPlayList()



/*__________________________________________________________________________________*/


var card = document.getElementById('activator');
        var tl = gsap.timeline({defaults: {ease: "power2.inOut"}})

        var toggle = false;

        tl.to('.activator', {
            background: '#805ad5',
            'borderRadius': '5em 0 0 5em'
        });
        tl.to('nav', {
            'clipPath': 'ellipse(100% 100% at 50% 50%)'
        }, "-=.5")
        tl.to('nav img', {
            opacity: 1,
            transform: 'translateX(0)',
            stagger: .05
        }, "-=.5")
        tl.pause();

        card.addEventListener('click', () => {
            toggle = !toggle;
            if (toggle ? tl.play() : tl.reverse());
        })

   function myFunction() {
      // Declare variables
      var input, filter, span, a, i, txtValue;
      input = document.getElementById('myInput');
      filter = input.value.toUpperCase();
      span = document.getElementById("grid");
      span = span.getElementsByTagName('span');
    
      // Loop through all list items, and hide those who don't match the search query
      for (i = 0; i < span.length; i++) {
        a = span[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          span[i].style.display = "";
        } else {
          span[i].style.display = "none";
        }
      }
    }
