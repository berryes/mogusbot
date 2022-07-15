<template>
  <div>
    {{guild.channels}}
</div>
</template>

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
    const response = await axios.get(`http://localhost:9000/getChannels/${route.params.id}`);
  this.guild = response.data
 }
}

</script>

<style>

</style>