<template>
    <div class="box">
        <div class="field">
            <label for="task" class="label">Task</label>
            <input type="text" id="task" class="input" placeholder="Enter task" v-model="name"
                   @keyup.enter="addTask">
        </div>

        <button class="button is-dark" @click="addTask">Add Task</button>
    </div>
</template>

<script>
  export default {
    name: 'new-task',
    data () {
      return {
        name: null
      }
    },
    methods: {
      async addTask (ev) {
        ev.preventDefault()

        const task = {
          name: this.name,
          completed: false
        }

        await this.$store.dispatch('addTask', task)

        this.name = null
      }
    }
  }
</script>

<style scoped>

</style>