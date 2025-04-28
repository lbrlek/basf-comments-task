import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import CommentItem from "@/components/CommentItem.vue";
import type { CommentNode } from "@/types/comments";

describe("CommentItem", () => {
  const mockComment: CommentNode = {
    id: "1",
    parent_id: null,
    author: {
      id: "user-1",
      name: "John Doe",
      picture: null,
    },
    text: "This is a test comment",
    timestamp: Date.now(),
    children: [],
  };

  it("renders author name and comment text", () => {
    const wrapper = mount(CommentItem, {
      props: {
        comment: mockComment,
        onReply: vi.fn(),
      },
    });

    expect(wrapper.text()).toContain(mockComment.author.name);
    expect(wrapper.text()).toContain(mockComment.text);
  });

  it("calls onReply when Reply button is clicked", async () => {
    const onReply = vi.fn();

    const wrapper = mount(CommentItem, {
      props: {
        comment: mockComment,
        onReply,
      },
    });

    const replyButton = wrapper.find("button");
    await replyButton.trigger("click");

    expect(onReply).toHaveBeenCalledTimes(1);
    expect(onReply).toHaveBeenCalledWith(mockComment);
  });
});
