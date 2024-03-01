<template>
    <Transition name="fade">
        <div v-if="blockScreen && open" class="overlay transition-all transition-delay-400 fixed w-full h-full bg-[rgba(0,0,0,0.5)] z-[2] inset-0"></div>
    </Transition>
    <Transition name="slide">
        <div v-if="open" class="modal fixed w-1/3 h-full bg-[rgb(237,237,237)] text-center p-4 rounded-tl-xl rounded-bl-xl right-0 top-0 z-10">
            <div class="modal-nav flex items-center justify-between pl-4 pr-0 pt-0 pb-4;">
                <p>{{ title }}</p>
                <button @click.prevent="closeModal()"><svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" @mouseover="closeHovered = true" @mouseleave="closeHovered = false">
                                                        <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="#49454F" class="transition-all transition-delay-300" :class="{ 'fill-slate-900 scale-105' : closeHovered}" />
                                                        </svg>
                </button>
            </div>
            <div class="container w-4/5 bg-[white] mx-auto my-4 p-4 rounded-xl;">
                    <slot></slot>
            </div>
           
        </div> 
    </Transition>
</template>
<script setup>
import { ref } from 'vue';

const emit = defineEmits(['modalToggled']);

const props = defineProps({ 
    open : {
        type : Boolean,
        required : false,
        default: false
    },
    title : {
        type : String,
        required : false,
        default: ''
    },
    name : {
        type : String,
        required : false,
        default: ''
    },
    blockScreen : {
        type : Boolean,
        required : false,
        default: false
    },


});

const closeHovered = ref(false);

const openVar = ref(props.open);

const closeModal = () => {
    openVar.value = false;
    closeHovered.value = false;
    emit('modalToggled', openVar.value);
}

</script>
<style lang="scss">
.slide-enter-active {
    transition: all 0.1s ease-out;
}

.slide-leave-active { 
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-enter-from,
.slide-leave-to {
    transform: translateX(100%);
}

.fade-enter-active {
    transition: all 0.3s ease-out;
}

.fade-leave-active { 
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

</style>