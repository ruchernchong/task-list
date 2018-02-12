<template>
    <div class="buttons is-centered">
        <button class="button is-warning" @click="editTask(task)"><i class="fa fa-fw fa-edit"></i></button>
        <button class="button is-danger"><i class="fa fa-fw fa-trash"></i></button>
    </div>
</template>

<script>
  export default {
    name: 'task-action',
    props: {
      task: Object
    },
    data () {
      return {}
    },
    methods: {
      editTask (task) {
        this.$emit('editTask', task)
      }
    }
  }
</script>

<style scoped>

</style>
