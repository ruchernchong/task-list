<template>
  <span class="tag" @click="setFilterBy">{{ tag.name }}</span>
</template>

<script>
export default {
  name: 'TaskTag',
  props: {
    tag: Object
  },
  methods: {
    setFilterBy (ev) {
      ev.target.classList.add('is-success')
    }
  }
}
</script>
