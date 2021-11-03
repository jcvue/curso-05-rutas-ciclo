<template>
    <nav class="navbar navbar-expand navbar-dark bg-dark">
        <div class="container-fluid">
            <span class="navbar-brand fw-bold">Vue App</span>
            <ul class="navbar-nav">
                <li v-for="link in links" class="nav-item" :key="link.text">
                    <CustomLink :link="link">
                        {{ link.text }}
                    </CustomLink>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from 'vue';
import { CustomLinkProps } from '../interfaces/CustomLinkProps';

export default defineComponent({
    data() {
        return {
            links: [
                { to: { name: 'pokemon-home' }, text: 'Home' },
                { to: { name: 'pokemon-id', params: { id: 56 } }, text: 'Pokemon', },
                { to: { name: 'pokemon-about' }, text: 'About', },

                { to: { name: 'dbz-characters' }, text: 'Personajes', },
                { to: { name: 'dbz-about' }, text: 'DBZ About', },

                { to: 'https://github.com/jcpalma', text: 'Github', external: true, },
            ] as CustomLinkProps[],

        };
    }
    ,
    components: {
        CustomLink: defineAsyncComponent(() => import('./CustomLink.vue'))
    }
})
</script>
