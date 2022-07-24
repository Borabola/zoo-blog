import { screen, waitFor } from "@testing-library/react";
import { testPosts } from "../__mock__/posts";
import { getFeaturedPosts } from "./posts-util";

describe("Post utils functions", () => {
	const expected = [{
		title: "Test title 1",
		date: "2022-06-10",
		slug: "test-title-1",
		image: "/test.jpg",
		isFeatured: true,
	}];
	test("getFeaturedPosts should filtered correctly ", () => {
        expect(getFeaturedPosts(testPosts)).toEqual(expect.arrayContaining(expected));

})
})

