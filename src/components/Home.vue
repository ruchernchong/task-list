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

              <footer class="card-footer"></footer>
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

export default {
  name: 'Home',
  components: {
    Notification,
    SearchTask,
    TaskTag,
    TaskList
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
.card {
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
}

.card-footer {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 50px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6,
    0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6,
    0 17px 2px -6px rgba(0, 0, 0, 0.2);
}

.hero {
  padding-top: 50px;
}
</style>
