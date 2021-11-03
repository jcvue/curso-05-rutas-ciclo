<template>
    <Navbar />
    <main class="container-fluid text-center mt-2">
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
