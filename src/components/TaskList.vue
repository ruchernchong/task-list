<template>
    <div class="columns">
        <div class="column">
            <table class="table is-fullwidth">
                <thead>
                <tr>
                    <th>Status</th>
                    <th>Task</th>
                    <th>Actions</th>
                </tr>
                </thead>

                <tbody>
                <tr :class="{ 'is-completed': task.completed }" :key="task.id" v-for="task in tasks">
                    <td class="has-text-centered">
                        <i class="fa fa-2x fa-check-circle"
                           :class="[ task.completed ? 'has-text-success' : 'has-text-muted' ]"
                           @click="toggleTaskCompleted(task)"></i>
                    </td>
                    <td class="task-name" :class="{ 'is-completed': task.completed }"><strong>{{ task.name }}</strong>
                    </td>
                    <td>
                        <task-action :task="task" @editTask="editTask" @openDialogModal="openDialogModal(task)"/>
                    </td>
                </tr>
                </tbody>
            </table>

            <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
                <dialog-modal :key="isActive" :isActive="isActive" :task="task" @deleteTask="deleteTask"
                              @closeDialogModal="closeDialogModal"/>
            </transition>
        </div>
    </div>
</template>

<script>
  import { mapState } from 'vuex'
  import TaskAction from '@/components/TaskAction'
  import DialogModal from '@/components/DialogModal'

  export default {
    name: 'task-list',
    components: {
      TaskAction, DialogModal
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
        const filteredTasks = tasks.filter(task => task.name.toLowerCase().includes(this.query))

        return this.query ? filteredTasks : tasks
      }
    },
    methods: {
      toggleTaskCompleted (task) {
        this.$store.dispatch('toggleTaskCompleted', task)
      },
      editTask (task) {

      },
      deleteTask (task) {
        this.$store.dispatch('deleteTask', task)
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

<style lang="scss" scoped>
    th {
        text-align: center;
    }

    tr {
        &.is-completed {
            background-color: rgba(204, 204, 204, 0.5);
        }
    }

    td {
        vertical-align: middle;

        &.is-completed {
            text-decoration: line-through;
        }

        &.task-name {
            cursor: pointer;
        }
    }

    .fa-check-circle:not(.has-text-success) {
        opacity: 0.5;
    }
</style>
