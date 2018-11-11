<template>
  <div>
    <TaskItem
      :key="task.name"
      :task="task"
      @confirmDelete="openDialogModal(task)"
      v-for="task in tasks"
    />

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
import { mapState } from 'vuex'
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
    tasks () {
      const tasks = this.$store.state.tasks
      const filteredTasks = tasks.filter(task =>
        task.name.toLowerCase().includes(this.query)
      )

      return this.query ? filteredTasks : tasks
    }
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
