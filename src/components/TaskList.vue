<template>
  <div class="card-content is-paddingless">
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
        :isActive="isActive"
        :task="task"
        @deleteTask="deleteTask"
        @closeDialogModal="closeDialogModal"
      />
    </transition>
  </div>
</template>

<script lang="ts">
import { mapState, mapGetters } from "vuex";
import TaskItem from "./TaskItem.vue";
import DialogModal from "./DialogModal.vue";

export default {
  name: "TaskList",
  components: {
    TaskItem,
    DialogModal,
  },
  data() {
    return {
      isActive: false,
      task: {},
    };
  },
  computed: {
    ...mapState(["query"]),
    ...mapGetters(["tasks"]),
  },
  methods: {
    deleteTask(task) {
      this.$store.commit("deleteTask", task);
      this.closeDialogModal();
    },
    openDialogModal(task) {
      this.task = task;
      this.isActive = true;
    },
    closeDialogModal() {
      this.task = {};
      this.isActive = false;
    },
  },
};
</script>
