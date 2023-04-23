import { beforeEach, describe, expect, it } from "vitest";
import { shallowMount } from "@vue/test-utils";
import Notification from "@/components/Notification.vue";

describe("Notification", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Notification, {
      propsData: {
        message: {
          style: "success",
        },
      },
    });
  });

  it("should render the component", () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it("should render a success notification given the style from message props", () => {
    expect(wrapper.find("div").classes("is-success")).toBeTruthy();
  });
});
