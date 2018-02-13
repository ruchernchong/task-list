<template>
    <div class="buttons" :class="{ 'is-completed': task.completed }">
        <button class="button is-info is-rounded" @click="editTask(task)">
            <i class="fa fa-fw fa-edit"></i>
        </button>

        <button class="button is-danger is-rounded" @click="deleteTask(task)">
            <i class="fa fa-fw fa-trash"></i>
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

<style lang="scss" scoped>
    .is-completed {
        opacity: 0.5;
    }
</style>
