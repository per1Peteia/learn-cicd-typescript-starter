import { IncomingHttpHeaders } from "http";
import { getAPIKey } from "src/api/auth";
import { it, describe, expect, test } from "vitest";

const person = {
	isActive: true,
	age: 32,
};

const noHeaders = {} satisfies IncomingHttpHeaders;

const badHeaderApi = { authorization: "LolKey getrektnoob" } satisfies IncomingHttpHeaders;

const happyHeader = { authorization: "ApiKey test" } satisfies IncomingHttpHeaders;

describe("person", () => {
	test("person is defined", () => {
		expect(person).toBeDefined();
	});

	test("is active", () => {
		expect(person.isActive).toBeTruthy();
	});

	it("should return null when no auth header is send", () => {
		expect(getAPIKey(noHeaders)).toBe(null);
	});

	it("should return null when auth header is not ApiKey", () => {
		expect(getAPIKey(badHeaderApi)).toBe(null);
	});

	it("should return null when auth header is good", () => {
		expect(getAPIKey(happyHeader)).toBe("test");
	});
});

