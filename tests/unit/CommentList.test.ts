import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import CommentList from "@/components/CommentList.vue";
import type { CommentNode } from "@/types/comments";

describe("CommentList", () => {
  const mockComments: CommentNode[] = [
    {
      id: "1",
      parent_id: null,
      author: {
        id: "author-1",
        name: "Ana Kovač",
        picture: null,
      },
      text: "Prvi komentar",
      timestamp: Date.now(),
      children: [
        {
          id: "1-1",
          parent_id: "1",
          author: {
            id: "author-2",
            name: "Ivan Horvat",
            picture: null,
          },
          text: "Odgovor na prvi komentar",
          timestamp: Date.now(),
          children: [],
        },
      ],
    },
    {
      id: "2",
      parent_id: null,
      author: {
        id: "author-3",
        name: "Marko Marić",
        picture: null,
      },
      text: "Drugi komentar",
      timestamp: Date.now(),
      children: [],
    },
  ];

  it("renders CommentItem for each comment", () => {
    const wrapper = mount(CommentList, {
      props: {
        comments: mockComments,
        onReply: vi.fn(),
      },
    });

    const commentItems = wrapper.findAllComponents({ name: "CommentItem" });
    expect(commentItems.length).toBe(3);
  });
});
