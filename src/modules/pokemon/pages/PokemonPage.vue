<template>
    <h1>Pokemon Page</h1>
    <hr />
    <h2>Pokemon: {{ id }}#</h2>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface PokemonPageData {
    id: number;
}

export default defineComponent({
    name: 'PokemonPage',
    data(): PokemonPageData {
        return {
            id: 0,
        };
    },
    created(): void {
        const { id } = this.$route.params;
        this.id = Number(id);
        console.log(`id: ${id}`);
    },
})
</script>
