<template>
    <div class="buttons has-addons is-centered">
        <button class="button is-info is-rounded" @click="editTask(task)">
            <i class="fa fa-fw fa-edit"></i>Edit
        </button>

        <button class="button is-danger is-rounded" @click="deleteTask(task)">
            <i class="fa fa-fw fa-trash"></i>Delete
        </button>
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
      },
      deleteTask (task) {
        this.$emit('openDialogModal', task)
      }
    }
  }
</script>

<style scoped>

</style>
