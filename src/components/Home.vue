<template>
    <section class="hero is-fullheight">
        <div class="hero-body">
            <div class="container">
                <h1 class="title">Task list</h1>

                <search-task/>

                <!--<div class="content">-->
                <!--<strong>Filter by:</strong>-->

                <!--<task-tag :key="tag.name" :tag="tag" v-for="tag in tags"/>-->
                <!--</div>-->

                <task-list/>
                <new-task/>
            </div>
        </div>
    </section>
</template>

<script>
  import SearchTask from '@/components/SearchTask'
  import TaskTag from '@/components/TaskTag'
  import TaskList from '@/components/TaskList'
  import NewTask from '@/components/NewTask'

  export default {
    name: 'home',
    components: {
      SearchTask, TaskTag, TaskList, NewTask
    },
    data () {
      return {
        tags: [
          {
            name: 'All'
          },
          {
            name: 'Completed'
          },
          {
            name: 'Todo'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
