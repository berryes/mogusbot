<template>
    <div class="container">
     <input type="submit" @click="previous()" value="previous">
     <input type="submit" @click="stop()" value="leave">
     <input type="submit" @click="skip()" value="next">
        <form>
          <label for="fname">Play:</label>
          <input type="text" id="tosendInput" value="osztalytalalkozo"><br><br>
          <input type="submit" @click="play">
      </form>
    </div>
</template>

<script>
export default {
  name: "Music",
    data() {
    return {
      tosend: "",
      response: "",
    };
    },
  methods:{
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
.container{
margin-left: 1em;
margin-top: 1em;
width: 3em;
height: 3em;
}
</style>