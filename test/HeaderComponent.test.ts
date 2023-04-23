import { beforeEach, describe, expect, it } from "vitest";
import { shallowMount } from "@vue/test-utils";
import { createRouter, createWebHistory } from "vue-router";
import HeaderComponent from "@/components/HeaderComponent.vue";
import { routes } from "@/router";
import { store } from "@/store";

describe("HeaderComponent", () => {
  let wrapper;

  const router = createRouter({
    history: createWebHistory(),
    routes,
  });

  beforeEach(() => {
    wrapper = shallowMount(HeaderComponent, {
      global: {
        plugins: [router, store],
      },
    });
  });

  it("navigation links should not be empty", () => {
    expect(wrapper.vm.navs.length).toBeGreaterThanOrEqual(1);
  });

  it("should return the correct route path", () => {
    expect(wrapper.vm.$route.path).toBe(wrapper.vm.navs[0].link);
  });
});
