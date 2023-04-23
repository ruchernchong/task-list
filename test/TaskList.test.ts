import { beforeEach, describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { createStore } from "vuex";
import TaskList from "@/components/TaskList.vue";
import TaskItem from "@/components/TaskItem.vue";
import DialogModal from "@/components/DialogModal.vue";

describe("TaskList", () => {
  let wrapper;
  let store, state, mutations;
  let computed;

  beforeEach(() => {
    state = {
      tasks: [
        { name: "First task", completed: true },
        { name: "Second task", completed: false },
      ],
      query: null,
    };

    mutations = {
      addTask: vi.fn(),
      deleteTask: vi.fn(),
      toggleTaskCompleted: vi.fn(),
    };

    store = createStore({
      state,
      mutations,
    });

    computed = {
      tasks() {
        const filteredTasks = state.tasks.filter((task) =>
          task.name.toLowerCase().includes(state.query)
        );

        return state.query ? filteredTasks : state.tasks;
      },
    };

    wrapper = mount(TaskList, {
      global: {
        plugins: [store],
      },
      computed,
    });
  });

  it("should delete task when delete button is clicked", () => {
    wrapper.findComponent(DialogModal).vm.$emit("deleteTask");

    expect(mutations.deleteTask).toHaveBeenCalled();

    expect(wrapper.vm.task).toEqual({});
    expect(wrapper.vm.isActive).toBeFalsy();
  });

  it("should open dialog modal when button is clicked", () => {
    const task = { name: "First task", completed: true };

    wrapper.findAllComponents(TaskItem).at(0).vm.$emit("confirmDelete", task);

    expect(wrapper.vm.task).toEqual(task);
    expect(wrapper.vm.isActive).toBe(true);
  });

  it("should close dialog modal when button is clicked", () => {
    const task = {};

    wrapper
      .findAllComponents(TaskItem)
      .at(0)
      .vm.$emit("closeDialogModal", task);

    expect(wrapper.vm.task).toEqual(task);
    expect(wrapper.vm.isActive).toBe(false);
  });
});
