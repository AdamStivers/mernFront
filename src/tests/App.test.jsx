import { describe, it, expect } from "vitest";
import { truncate } from "../utils/formatters";

describe("truncate()", () => {
    it("doesn't change the lenght if characters < limit", () => {
    expect(truncate("Test", 10)).toBe("Test");
  });

    it("doesn't change when the text matches the limit", () => {
    expect(truncate("Test", 4)).toBe("Test");
  });

    it("truncates text and adds ... when text exceeds the limit", () => {
    expect(truncate("Hello World", 5)).toBe("Hello...");
  });

    it("returns empty strings as is", () => {
    expect(truncate("", 10)).toBe("");
  });
});

