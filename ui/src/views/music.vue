<template>
<!--     <div class="container">
     <input type="submit" @click="previous()" value="previous">
     <input type="submit" @click="stop()" value="leave">
     <input type="submit" @click="skip()" value="next">
        <form>
          <label for="fname">Play:</label>
          <input type="text" id="tosendInput" value="osztalytalalkozo"><br><br>
          <input type="submit" @click="play">
      </form>
    </div> -->
  <div class="container">
        <img src="cover.jpg" id="cover">

        <div class="title">
            <h2>{{nowplaying}}</h2>
            <p>{{artist}}</p>
        </div>

        <div class="timeline">
            <p id="leftTime">1:12</p>
            <p id="RightTime">5:18</p>
            <input type="range">
        </div>

        <div class="buttons">
            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-skip-backward-fill" viewBox="0 0 16 16"><path d="M.5 3.5A.5.5 0 0 0 0 4v8a.5.5 0 0 0 1 0V8.753l6.267 3.636c.54.313 1.233-.066 1.233-.697v-2.94l6.267 3.636c.54.314 1.233-.065 1.233-.696V4.308c0-.63-.693-1.01-1.233-.696L8.5 7.248v-2.94c0-.63-.692-1.01-1.233-.696L1 7.248V4a.5.5 0 0 0-.5-.5z"/></svg></a>
            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16"><path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/></svg></a>
            <a href="#"><svg style="transform:rotate(180deg)" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-skip-backward-fill" viewBox="0 0 16 16"><path d="M.5 3.5A.5.5 0 0 0 0 4v8a.5.5 0 0 0 1 0V8.753l6.267 3.636c.54.313 1.233-.066 1.233-.697v-2.94l6.267 3.636c.54.314 1.233-.065 1.233-.696V4.308c0-.63-.693-1.01-1.233-.696L8.5 7.248v-2.94c0-.63-.692-1.01-1.233-.696L1 7.248V4a.5.5 0 0 0-.5-.5z"/></svg></a>
        </div>
    </div>
</template>
<script>
export default {
  name: "Music",
    data() {
    return {
      tosend: "",
      response: "",
      nowplaying: "asd",
      artist: "Rammstein"
    };
    },
  methods:{
	getPlaying () {
		this.Play = setInterval(() => {
			fetch(`http://localhost:9000/music/playing`)
      .then(function(response) {
          console.log("now playing is",response)
        })
		}, 10000)
	},
    play(){
      const tosend = document.getElementById("tosendInput").value;
      fetch(`http://localhost:9000/music/play/${tosend}`)
        .then(function(response) {
          console.log("playing",response)
        })
        .catch(function(error) {
          console.log('Found error: \n', error);
        });
    },
        skip(){
      fetch(`http://localhost:9000/music/skip`)
        .then(function(response) {
          console.log("playing",response)
        })
        .catch(function(error) {
          console.log('Found error: \n', error);
        });
    },
    }
  }
</script>

    <style>
    @import url('https://fonts.googleapis.com/css?family=Josefin Sans');
        body {
            font-family: "Josefin Sans";
        }
        .container {
            height: 75vh;
            width: 30vw;
            background-color: white;
            display: flex;
            justify-content: center;
            margin-left: auto;
            margin-right: auto;
            margin-top: 10%;
            border-radius: 1em;
            box-shadow: 18px 19px 60px -3px rgba(0,0,0,0.51);
            -webkit-box-shadow: 18px 19px 60px -3px rgba(0,0,0,0.51);
            -moz-box-shadow: 18px 19px 60px -3px rgba(0,0,0,0.51);
        }
        .container #cover {
            height: 35vh;
            width: 18vw;
            border-radius: 2vh;
            margin-top: 8vh;
        }
        .title {
            bottom: 20vh;
            left: 40.5vw;
            position: absolute;
        }
        .timeline {
            position: absolute;
            bottom: 18vh;
        }
        .timeline input{
            width: 20vw;
        }

        .timeline #leftTime {
            font-size: x-small;
            position: absolute;
            left: 0em;
            margin-top: 4vh;
        }
        .timeline #RightTime {
            font-size: x-small;
            position: absolute;
            margin-top: 4vh;
            right: 0em;
        }
        .buttons {
            bottom: 10vh;
            position: absolute;
        }
        .buttons svg {
            height: 5vh;
            width: 5vw;
            color: black;
        }
    </style>