/* eslint-disable import/no-extraneous-dependencies */
import { describe, expect, it } from "vitest";
import Navbar from "./Navbar";

describe("navbar", () => {
  it("return nav", () => {
    expect(Navbar).toBeDefined("function");
  });
});
