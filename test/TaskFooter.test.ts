import { beforeEach, describe, expect, it } from "vitest";
import { shallowMount } from "@vue/test-utils";
import { createStore } from "vuex";
import TaskFooter from "@/components/TaskFooter.vue";

describe("TaskFooter", () => {
  let wrapper;
  let store, state, mutations;

  beforeEach(() => {
    state = {
      tasks: [
        { name: "First task", completed: true },
        { name: "Second task", completed: false },
      ],
      query: "",
    };

    mutations = {
      setFilter: vi.fn(),
    };

    store = createStore({
      state,
      mutations,
    });

    wrapper = shallowMount(TaskFooter, {
      attachToDocument: true,
      global: {
        plugins: [store],
      },
    });
  });

  it("should render the component", () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it("should set the filter based on the value it was clicked", () => {
    wrapper.find("span").trigger("click");
    expect(mutations.setFilter).toHaveBeenCalled();
  });
});
