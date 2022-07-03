<template>
<div class="server">
    <img style="border-radius: 60em" :src="guild.iconURL">
  <h1>{{guild.name}}</h1>
  <h2>Members: {{guild.memberCount}}</h2>

</div>
</template>

<style scoped>
.server{
    background-color: rgb(255, 255, 255);
    color: rgb(0, 0, 0);
    width: 30%;
    padding: 2em;
    margin-left: auto;
    margin-right: auto;
    margin-top: 30vh;
    border-radius: 5em;
    box-shadow: 57px 91px 400px -49px rgba(0,0,0,1);
-webkit-box-shadow: 57px 91px 400px -49px rgba(0,0,0,1);
-moz-box-shadow: 57px 91px 400px -49px rgba(0,0,0,1);
    box-shadow: -57px -91px -400px 49px rgba(0,0,0,1);
-webkit-box-shadow: -57px -91px -400px 49px rgba(0,0,0,1);
-moz-box-shadow: -57px -91px -400px 49px rgba(0,0,0,1);

}

</style>
<script>
import { useRoute } from 'vue-router'
import axios from 'axios';

export default {
name: "server",
data() {
    return{
        guild: null
    };
 },
 async created(){
      const route = useRoute();
    const response = await axios.get(`http://localhost:9000/getguild/${route.params.id}`);
  this.guild = response.data
 }
}

</script>

<style>

</style>