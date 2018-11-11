<template>
  <div>
    <TaskItem
      :key="task.name"
      :task="task"
      @confirmDelete="openDialogModal(task)"
      v-for="task in tasks"
    />
    <div class="columns is-vcentered" v-if="tasks.length === 0">
      <div class="column has-text-centered">
        <h2>
          No results found. Press <code>Enter</code> to add to the task list.
        </h2>
      </div>
    </div>

    <transition
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >
      <DialogModal
        :key="isActive"
        :isActive="isActive"
        :task="task"
        @deleteTask="deleteTask"
        @closeDialogModal="closeDialogModal"
      />
    </transition>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import TaskItem from '@/components/TaskItem'
import DialogModal from '@/components/DialogModal'

export default {
  name: 'TaskList',
  components: {
    TaskItem,
    DialogModal
  },
  data () {
    return {
      isActive: false,
      task: {}
    }
  },
  computed: {
    ...mapState(['query']),
    ...mapGetters(['tasks'])
  },
  methods: {
    deleteTask (task) {
      this.$store.commit('deleteTask', task)
      this.closeDialogModal()
    },
    openDialogModal (task) {
      this.task = task
      this.isActive = true
    },
    closeDialogModal () {
      this.task = {}
      this.isActive = false
    }
  }
}
</script>
