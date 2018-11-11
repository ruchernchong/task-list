<template>
  <div class="modal" :class="{ 'is-active': isActive }">
    <div class="modal-background" @click="closeDialogModal"></div>

    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Confirm Delete</p>
        <button
          class="delete"
          aria-label="close"
          @click="closeDialogModal"
        ></button>
      </header>

      <section class="modal-card-body">
        Are you sure you want to delete the task "<span
          class="has-text-weight-bold"
          >{{ task.name }}</span
        >"?
      </section>

      <footer class="modal-card-foot is-paddingless">
        <div class="column has-text-centered is-paddingless">
          <a
            class="icon is-large has-text-success"
            title="Yes"
            @click="confirmDelete(task)"
          >
            <i class="fa fa-2x fa-check-circle"></i>
          </a>
          <a class="icon is-large has-text-danger" title="No" @click="cancel">
            <i class="fa fa-2x fa-times-circle"></i>
          </a>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DialogModal',
  props: {
    isActive: Boolean,
    task: Object
  },
  methods: {
    confirmDelete (task) {
      this.$emit('deleteTask', task)
    },
    cancel () {
      this.closeDialogModal()
    },
    closeDialogModal () {
      this.$emit('closeDialogModal')
    }
  }
}
</script>
