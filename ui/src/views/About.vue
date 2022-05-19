<template>
    <div class="container">
      <form>
          <label for="fname">Send message:</label>
          <input type="text" id="tosendInput" v-model="tosend" ><br><br>
          <input type="submit" @click="sendmessage">
      </form>
      <h3>Get data</h3>
      <p id="data1"></p>
      <select id="selector">
          <option value="reply">Current reply chanche</option>
          <option value="type">Current reply type</option>
          <option value="imagecount">Amount of images stored</option>
        </select>
          <input type="submit" @click="getCustom">
    </div>
</template>

<script>
export default {
  name: "Home",
    data() {
    return {
      tosend: "",
      response: "",
    };
    },
  methods:{
    sendmessage(){
      const tosend = document.getElementById("tosendInput").value;
      fetch(`http://localhost:9000/send/${tosend}`)
        .then(function(response) {
          console.log("sent",response)
        })
        .catch(function(error) {
          console.log('Found error: \n', error);
        });
    },
    getCustom(){
      const whatget = document.getElementById('selector').value
      console.log(whatget)
          fetch(`http://localhost:9000/chance/get/${whatget}`)
        .then(function(response) {
          console.log("got",response)

          document.getElementById('data1').innerHTML = `${response}`
        })
        .catch(function(error) {
          console.log('Found error: \n', error);
        });
      }
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