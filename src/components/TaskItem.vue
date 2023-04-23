<template>
  <div
    class="columns is-vcentered is-marginless"
    :class="{ 'is-completed': task.completed }"
    @mouseover="onMouseOver"
    @mouseleave="onMouseLeave"
  >
    <div class="column is-1">
      <i
        class="fa fa-2x fa-check-circle"
        :class="[task.completed ? 'has-text-success' : 'has-text-muted']"
        @click="toggleTaskCompleted(task)"
        v-show="!isEditing"
      ></i>
    </div>

    <div class="column is-task-name" @dblclick="editTask">
      <label for="task" v-if="!isEditing">{{ task.name }}</label>
      <input
        type="text"
        id="task"
        class="input"
        v-model="name"
        @blur="stopEditing"
        @keyup.enter="doneEditing"
        ref="input"
        v-else
      />
    </div>

    <div class="column is-1 is-right">
      <i
        class="fa fa-trash is-delete"
        @click="confirmDelete(task)"
        v-show="showDelete && !isEditing"
      ></i>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "TaskItem",
  props: ["task"],
  data() {
    return {
      isEditing: false,
      name: this.task.name,
      showDelete: false,
    };
  },
  methods: {
    toggleTaskCompleted(task) {
      this.$store.commit("toggleTaskCompleted", task);
    },
    editTask() {
      if (!this.task.completed) {
        this.isEditing = true;
      }
    },
    doneEditing() {
      this.stopEditing();
    },
    stopEditing() {
      this.isEditing = false;
    },
    confirmDelete(task) {
      this.$emit("confirmDelete", task);
    },
    onMouseOver() {
      this.showDelete = true;
    },
    onMouseLeave() {
      this.showDelete = false;
    },
  },
});
</script>

<style lang="scss" scoped>
.is-completed {
  background-color: rgba(204, 204, 204, 0.5);
  text-decoration: line-through;
}

.fa-check-circle {
  &:not(.has-text-success) {
    opacity: 0.5;
  }
}
</style>
