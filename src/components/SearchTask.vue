<template>
  <div class="control has-icons-left has-icons-right">
    <input type="search" class="input is-large" placeholder="Search tasks" @keyup="setQuery"/>
    <span class="icon is-large is-left">
        <i class="fa fa-search"></i>
      </span>
  </div>
</template>

<script>
export default {
  name: 'SearchTask',
  methods: {
    setQuery (e) {
      this.$store.commit('setQuery', e.target.value.toLowerCase())
    }
  }
}
</script>

<style lang="scss" scoped>
.field {
  width: 100%;
}

.input {
  border-radius: 0;
  border: none;
  box-shadow: none;
}
</style>
