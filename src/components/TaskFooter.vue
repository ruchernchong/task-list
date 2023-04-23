<template>
  <footer class="card-footer">
    <div class="card-footer-item">
      <small>{{ remaining }} {{ remaining > 1 ? "tasks" : "task" }} left</small>
    </div>
    <div class="card-footer-item">
      <div class="tags">
        <span
          class="tag is-link"
          :key="filter.name"
          @click="setFilter(filter)"
          v-for="filter in filters"
        >
          {{ filter.name }}
        </span>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { mapState } from "vuex";

export default {
  name: "TaskFooter",
  data() {
    return {
      filters: [{ name: "All" }, { name: "Completed" }, { name: "Todo" }],
    };
  },
  computed: {
    ...mapState(["tasks"]),
    remaining() {
      return this.tasks.filter((task) => task.completed === false).length;
    },
  },
  methods: {
    setFilter(filter) {
      this.$store.commit("setFilter", filter);
    },
  },
};
</script>

<style lang="scss" scoped>
.card-footer {
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6,
    0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6,
    0 17px 2px -6px rgba(0, 0, 0, 0.2);
}

.tag {
  cursor: pointer;
}
</style>
