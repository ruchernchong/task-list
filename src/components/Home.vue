<template>
    <section class="hero is-fullheight">
        <div class="hero-body">
            <div class="container">
                <transition enter-active-class="animated flipInX">
                    <message-box :key="message.content" :message="message" v-if="Object.keys(message).length > 0"/>
                </transition>

                <h1 class="title">Task list</h1>

                <search-task/>

                <!--<div class="content">-->
                <!--<strong>Filter by:</strong>-->

                <!--<task-tag :key="tag.name" :tag="tag" v-for="tag in tags"/>-->
                <!--</div>-->

                <task-list/>
                <task-add/>
            </div>
        </div>
    </section>
</template>

<script>
  import { mapState } from 'vuex'
  import MessageBox from '@/components/MessageBox'
  import SearchTask from '@/components/SearchTask'
  import TaskTag from '@/components/TaskTag'
  import TaskList from '@/components/TaskList'
  import TaskAdd from '@/components/TaskAdd'

  export default {
    name: 'home',
    components: {
      MessageBox, SearchTask, TaskTag, TaskList, TaskAdd
    },
    computed: {
      ...mapState(['message'])
    },
    data () {
      return {
        tags: [
          {name: 'All'}, {name: 'Completed'}, {name: 'Todo'}
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
    .hero {
        padding-top: 50px;
    }
</style>
