<template>
<div>
    <ul>
        <li v-for="guild of guilds" :key="guild.id"> <router-link :to="{ name: `server`, params: { id: `${guild.id}` } }">{{guild.name}}</router-link> </li>
    </ul>
</div>
</template>

<script>
import axios from 'axios'

export default {
 name: "app",
 data() {
    return{
        guilds: null,
        request: `/server/asd`
    };
 },
 async created(){
    const response = await axios.get("http://localhost:9000/getguilds/");
  this.guilds = response.data
 }
}
</script>

<style>

</style>