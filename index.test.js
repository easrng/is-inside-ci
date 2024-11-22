import isInsideCi from "is-inside-ci";
import * as insideCi from "inside-ci";
import * as isCi from "is-ci";
import { test } from "node:test";
import assert from "node:assert";

test("inside-ci is inside-ci", () => {
  assert(isInsideCi(insideCi));
  assert(isInsideCi(insideCi.default));
  assert(isInsideCi(insideCi.insideCi));
});

test("is-ci is not inside-ci", () => {
  assert(!isInsideCi(isCi));
  assert(!isInsideCi(isCi.default));
});
