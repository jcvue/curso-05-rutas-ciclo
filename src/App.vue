<template>
    <Navbar :style="{ 'grid-area': 'header' }" />
    <main class="main text-center">
        <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
        <router-view />
    </main>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from 'vue';

export default defineComponent({
    name: 'App',
    components: {
        Navbar: defineAsyncComponent(() => import(/* webpackChunkName: "Navbar" */ '@/modules/shared/components/Navbar.vue')),
    }
});
</script>

<style>
#app {
    display: grid;
    height: 100vh;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
    grid-template-areas: 'header' 'main';
}

.main {
    grid-area: main;
    min-height: 100%;
}
</style>
