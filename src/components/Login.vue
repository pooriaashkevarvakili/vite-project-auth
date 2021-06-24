<template>
  <form @submit.prevent="handleSubmit">
  <label>
  email
  <a-input v-model="email"/>
  </label>
   <label>
  password
  <a-input v-model="password"/>
  </label>
  </form>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import axios from 'axios'
export default defineComponent({
data(){
    return{
        email:'',
        password:''
    }
},
methods:{
    async handleSubmit(){
const response=await axios.post('login',{
    email:this.email,
    password:this.password
})
localStorage.setItem('token',response.data.token)
    }
}
})
</script>

<style>

</style>