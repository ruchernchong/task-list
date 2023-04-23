import { beforeEach, describe, expect, it } from "vitest";
import { shallowMount } from "@vue/test-utils";
import { createRouter, createWebHistory } from "vue-router";
import App from "@/App.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import { routes } from "@/router";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

describe("App", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(App, {
      global: {
        plugins: [router],
      },
    });
  });

  it("should contain Header Component", () => {
    expect(wrapper.findComponent(HeaderComponent)).toBeTruthy();
  });

  it("should contain Footer Component", () => {
    expect(wrapper.findComponent(FooterComponent)).toBeTruthy();
  });
});
