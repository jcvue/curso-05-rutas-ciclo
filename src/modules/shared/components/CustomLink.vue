<template>
    <a v-if="link.external" class="nav-link" :href="link.to" target="_blank">
        {{ link.text }}
    </a>
    <router-link
        v-else
        custom
        :to="link.to"
        v-slot="{ href, isActive, navigate }"
    >
        <a
            :class="['nav-link', isActive && 'active']"
            :href="href"
            @click="navigate"
        >
            {{ link.text }}
        </a>
    </router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { CustomLinkProps } from '../interfaces/CustomLinkProps';

export default defineComponent({
    props: {
        link: {
            type: Object as () => CustomLinkProps,
            required: true,
        }
    }
})
</script>
