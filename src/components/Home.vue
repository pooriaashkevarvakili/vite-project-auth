<template>
<div class="grid justify-center mt-40">
<p class="text-center text-white p-2 font-extrabold bg-green-500 text-base uppercase">page login</p>
<div class="grid">
<form @submit.prevent="handleSubmit" class="inline">
<label>
firstName

<a-input v-model="firstName" class=""/>
</label>
<label>
lastName

<a-input v-model="lastName" class=""/>
</label>
<label>
email

<a-input v-model="email" class="bg-red-500"/>
</label>
<label>

password
<a-input  v-model="password" class="bg-green-500"/>

</label>
<button class="bg-green-500 ml-2 w-full py-2 uppercase mt-10  text-white">login</button>
</form>
</div>


</div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, UnwrapRef } from 'vue';
import Axios from "axios"
export default defineComponent({
    name:"Home",
    data(){
        return{
            firstName:'',
            lastName:'',
            email:'',
            password:''
        }
    },
    methods:{
        async handleSubmit(){
            
            await Axios.post('http://localhost:3005/authLogin ',{
                 firstName:this.firstName,
                lastName:this.lastName,
                password:this.password,
                email:this.email
            })
            this.$router.push('/login')
        }
    },
    setup(){
   
    }
 
});
</script>

<style>
.ant-form-item{
    display:inline
}
</style>