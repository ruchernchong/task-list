<template>
  <a :href="link.url" target="_blank" rel="noopener">
    <img
      :src="
        `../assets/logos/${link.name.toLowerCase().replace(/\s+/g, '-')}.png`
      "
    />
  </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Logo',
  props: ['link']
})
</script>
