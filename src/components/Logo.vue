<template>
  <a :href="link.url" target="_blank" rel="noopener">
    <img
      :src="
        require(`@/assets/logos/${this.link.name
          .toLowerCase()
          .replace(/\s+/g, '-')}.png`)
      "
    />
  </a>
</template>

<script>
export default {
  name: 'Logo',
  props: {
    link: Object
  }
}
</script>
