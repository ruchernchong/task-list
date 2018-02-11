<template>
    <a :href="link.url" target="_blank" rel="noopener"><img :src="require(`@/assets/logos/${logo}.png`)"/></a>
</template>

<script>
  export default {
    name: 'logo',
    props: {
      link: Object
    },
    computed: {
      logo () {
        return this.link.name.toLowerCase().replace(' ', '-')
      }
    }
  }
</script>