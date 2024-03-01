<template>
<header class="w-full border-b-2 border-grey-200 p-4">
    <nav>
        <router-link :to="{name : 'Home'}">Home</router-link>
        <router-link :to="{name : 'Test'}">Test</router-link>
    </nav>
</header>

</template>
<script>
export default {
    
}
</script>
<style lang="scss">
    a{
        margin: 0 1rem;

        &.router-link-exact-active{
            color: rgb(0, 128, 64);
            font-weight: 700;
        }
    }
</style>