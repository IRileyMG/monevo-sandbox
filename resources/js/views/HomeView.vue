<template>
  <div class="wrapper grid justify-center items-center min-w-full w-full min-h-screen overflow-x-hidden">
    <div class="head flex flex-wrap justify-center items-center">
        <img src="https://laravel.com/img/logomark.min.svg" alt="laravel logo">
        <img src="https://vitejs.dev/logo.svg" alt="vite logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" alt="vue logo">
        <h2 class="font-bold text-center basis-full p-4">Laravel 10, Vite & Vue 3 Base Project</h2>
        <nav class="mx-4">
            <router-link :to="{name : 'Home'}">Home</router-link>
            <router-link :to="{name : 'Test'}">Test</router-link>
        </nav>
        <button class="bg-transparent hover:bg-emerald-700 text-emerald-700 font-semibold hover:text-white py-2 px-4 border border-emerald-500 hover:border-transparent rounded transition-all duration-300" @click.prevent="getValue">Trigger Endpoint</button>
    </div> 
    <SlideOut :open="open" @modalToggled="modalToggle($event)">
        <h3 v-if="response">{{ response.data }}</h3>
        <button class="bg-transparent hover:bg-emerald-700 text-emerald-700 font-semibold hover:text-white py-2 px-4 border border-emerald-500 hover:border-transparent rounded transition-all duration-300 m-4" @click.prevent="open2 = true">New Modal</button>
    </SlideOut>
    <SlideOut :open="open2" title="Modal 2" :blockScreen="true" @modalToggled="modal2Toggle($event)">
        <h3>Modal 2</h3>
    </SlideOut>
</div>
</template>
<script setup>
import SlideOut from '@/js/components/ModalSlide.vue';
import axios from "axios";
import { ref, computed } from "vue";

const response = ref();
const open = ref(false);
const open2 = ref(false);

const getValue = async () => {
    try {
        response.value = await axios.get("/api/test");
        open.value = true;
    } catch (error) {
        console.log(error);
    }
};

const modalToggle = (modalVal) => { 
    open.value = modalVal;
}
const modal2Toggle = (modalVal) => { 
    open2.value = modalVal;
}
</script>

<style lang="scss">
.wrapper {
    a{
        margin: 0 1rem;
    }
    .head{
        img{
            min-width: 50px;
            width: 70px;
            padding: 1rem;
        }
    }
}
</style>