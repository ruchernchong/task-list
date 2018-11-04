<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="column is-half is-offset-one-quarter">
            <transition enter-active-class="animated flipInX">
              <Notification :key="message.content" :message="message" v-if="Object.keys(message).length > 0"/>
            </transition>

            <div class="card">
              <SearchTask/>

              <div class="card-content">
                <TaskList/>
              </div>

              <footer class="card-footer">
                <TaskAdd/>
              </footer>
            </div>

            <!--<div class="content">-->
            <!--<strong>Filter by:</strong>-->

            <!--<task-tag :key="tag.name" :tag="tag" v-for="tag in tags"/>-->
            <!--</div>-->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import Notification from '@/components/Notification'
import SearchTask from '@/components/SearchTask'
import TaskTag from '@/components/TaskTag'
import TaskList from '@/components/TaskList'
import TaskAdd from '@/components/TaskAdd'

export default {
  name: 'Home',
  components: {
    Notification,
    SearchTask,
    TaskTag,
    TaskList,
    TaskAdd
  },
  computed: {
    ...mapState(['message'])
  },
  data () {
    return {
      tags: [{ name: 'All' }, { name: 'Completed' }, { name: 'Todo' }]
    }
  }
}
</script>

<style lang="scss" scoped>
.hero {
  padding-top: 50px;
}
</style>
