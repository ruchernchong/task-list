<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="column is-half is-offset-one-quarter">
            <transition enter-active-class="animated flipInX">
              <Notification
                :key="message.content"
                :message="message"
                v-if="Object.keys(message).length > 0"
              />
            </transition>

            <div class="card">
              <SearchTask />

              <TaskList />

              <TaskFooter />
            </div>

            <!-- <div class="content"> -->
            <!-- <strong>Filter by:</strong> -->

            <!-- <task-tag :key="tag.name" :tag="tag" v-for="tag in tags"/> -->
            <!-- </div> -->
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
import TaskFooter from '@/components/TaskFooter'

export default {
  name: 'Home',
  components: {
    Notification,
    SearchTask,
    TaskTag,
    TaskList,
    TaskFooter
  },
  computed: {
    ...mapState(['message'])
  }
}
</script>

<style lang="scss" scoped>
.card {
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
}

.hero {
  padding-top: 50px;
}
</style>
