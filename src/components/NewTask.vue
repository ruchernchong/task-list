<template>
    <div class="box">
        <div class="field">
            <label for="task" class="label">Task</label>
            <input type="text" id="task" class="input" :class="{ 'is-success': name.length > 0 }"
                   placeholder="Enter task" v-model="name" @keyup="notEmpty" @keyup.enter="addTask">
            <p class="content has-text-danger has-text-weight-bold">{{ message }}</p>
        </div>

        <button class="button is-dark is-rounded" @click="addTask">Add Task</button>
    </div>
</template>

<script>
  export default {
    name: 'new-task',
    data () {
      return {
        name: '',
        message: null
      }
    },
    methods: {
      notEmpty () {
        if (this.name.length > 0) this.message = null
      },
      async addTask (ev) {
        const task = {
          name: this.name,
          completed: false
        }

        if (this.name.length > 0) {
          await this.$store.dispatch('addTask', task)
        } else {
          ev.target.classList.add('is-danger')
          this.message = 'Your task cannot be empty.'
        }

        this.name = ''
      }
    }
  }
</script>

<style scoped>

</style>
