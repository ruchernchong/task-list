<template>
    <div class="field">
        <div class="control has-icons-left">
            <span class="icon is-left"><i class="fas fa-search"></i></span>
            <input type="search" class="input" placeholder="Search tasks" @keyup="setQuery"/>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'search-task',
    methods: {
      setQuery (ev) {
        this.$store.commit('setQuery', ev.target.value.toLowerCase())
      }
    }
  }
</script>

<style scoped>

</style>
