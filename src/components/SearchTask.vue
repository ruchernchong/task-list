<template>
  <div class="control has-icons-left has-icons-right">
    <input
      type="search"
      class="input is-large"
      placeholder="Search tasks"
      v-model="name"
      @keyup="setQuery"
      @keyup.enter="addTask"
    />
    <span class="icon is-large is-left"> <i class="fa fa-search"></i> </span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'SearchTask',
  computed: {
    ...mapGetters(['tasks'])
  },
  data () {
    return {
      name: ''
    }
  },
  methods: {
    setQuery (e) {
      this.$store.commit('setQuery', e.target.value.toLowerCase())
    },
    addTask () {
      const task = {
        name: this.name,
        completed: false
      }

      this.$store.commit('addTask', task)
      this.$store.commit('setQuery', '')
      this.name = ''
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
