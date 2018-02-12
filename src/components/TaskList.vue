<template>
    <table class="table is-fullwidth">
        <thead>
        <tr>
            <th>Status</th>
            <th>Task</th>
            <th>Actions</th>
        </tr>
        </thead>

        <tbody>
        <tr :key="task.id" v-for="task in tasks">
            <td class="has-text-centered">
                <i class="fa fa-2x fa-check-circle"
                   :class="[ task.completed ? 'has-text-success' : 'has-text-muted' ]"
                   @click="toggleTaskCompleted(task)"></i>
            </td>
            <td class="task-name"><strong>{{ task.name }}</strong></td>
            <td>
                <task-action :task="task" @editTask="editTask" @deleteTask="deleteTask"/>
            </td>
        </tr>
        </tbody>
    </table>
</template>

<script>
  import { mapState } from 'vuex'
  import TaskAction from '@/components/TaskAction'

  export default {
    name: 'task-list',
    components: {
      TaskAction
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
      async toggleTaskCompleted (task) {
        await this.$store.dispatch('toggleTaskCompleted', task)
      },
      editTask (task) {

      },
      deleteTask (task) {

      }
    }
  }
</script>

<style lang="scss" scoped>
    th {
        text-align: center;
    }

    td {
        vertical-align: middle;

        &.task-name {
            cursor: pointer;
        }
    }

    .fa-check-circle:not(.has-text-success) {
        opacity: 0.5;
    }
</style>
