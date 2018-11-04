<template>
  <div class="box">
    <div class="field">
      <label for="task" class="label">Add Task</label>
      <input type="text" id="task" class="input" :class="{ 'is-success': name.length > 0 }"
             placeholder="e.g. Remember to write tests for your project!" v-model="name" @keyup.enter="addTask">
      <p class="content has-text-danger has-text-weight-bold">{{ message }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TaskAdd',
  data () {
    return {
      name: '',
      message: null
    }
  },
  methods: {
    addTask () {
      const task = {
        name: this.name,
        completed: false
      }

      if (this.name.length > 0) {
        this.$store.commit('addTask', task)
      } else {
        this.message = 'Your task cannot be empty.'
      }

      this.name = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
}
</style>
