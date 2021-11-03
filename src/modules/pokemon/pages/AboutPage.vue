<template>
    <h1>About Page</h1>
    <hr />
    <h2>{{ name }}</h2>
    <button class="btn btn-primary" @click="onChangeName">
        Cambiar nombre
    </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'AboutPage',
    data() {
        return {
            name: 'José Palma'
        };
    },
    methods: {
        onChangeName() {
            this.name = 'José Carlos Palma';
        }
    },
    beforeCreate() {
        console.log('AboutPage.beforeCreate');
    },
    created() {
        console.log('AboutPage.created');
    },
    beforeMount() {
        console.log('AboutPage.beforeMount');
    },
    mounted() {
        console.log('AboutPage.mounted');
    },
    beforeUpdate() {
        console.log('AboutPage.beforeUpdate');
    },
    updated() {
        console.log('AboutPage.updated');
    },
    activated() {
        console.log('AboutPage.activated');
    },
    deactivated() {
        console.log('AboutPage.deactivated');
    },
    beforeUnmount() {
        console.log('AboutPage.beforeUnmount');
        setTimeout(() => {
            console.clear();
        }, 1000);
    },
    unmounted() {
        console.log('AboutPage.unmounted');
    },
    errorCaptured() {
        console.log('AboutPage.errorCaptured');
    },
    renderTracked() {
        console.log('AboutPage.renderTracked');
    },
    renderTriggered() {
        console.log('AboutPage.renderTriggered');
    },
})
</script>
