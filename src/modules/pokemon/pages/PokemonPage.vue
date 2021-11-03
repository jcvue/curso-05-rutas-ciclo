<template>
    <h1>Pokemon Page</h1>
    <hr />
    <div v-if="pokemon">
        <h2>Pokemon: {{ id }}#</h2>
        <img :src="pokemon.sprites.front_default" :alt="pokemon.name" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
    name: 'PokemonPage',
    props: {
        id: {
            type: Number,
            required: true,
        },
    },
    data() {
        return {
            pokemon: null,
        };
    },
    methods: {
        async getPokemon() {
            try {
                const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.id}`).then(res => res.json());
                this.pokemon = pokemon;
            } catch (e) {
                this.$router.push('/');
            }
        }
    },
    watch: {
        id() {
            this.getPokemon();
        }
    },
    created() {
        this.getPokemon();
    },
})
</script>
