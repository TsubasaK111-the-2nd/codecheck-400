"use strict";

let assert = require("chai").assert;
let codecheck = require("codecheck");
let app = codecheck.consoleApp(process.env.APP_COMMAND);

describe("Technology specialist challenge 1-1", () => {
  let testcases = require("./test_exam1-1.json");
  testcases.forEach((testcase) => {
    it(testcase.title, () => {
      return app.codecheck("1", testcase.input)
      .then(result => {
        if (testcase.code == 0) {
          assert.equal(result.code, testcase.code);
          assert.equal(result.stdout.join("\\n"), testcase.output.join("\\n"));
        } else {
          assert.equal((result.code >= testcase.code), true);
          // Ignore output lines when status code is greater than 0.
        }
      });
    });
  });
});
describe("Technology specialist challenge 1-2", () => {
  let testcases = require("./test_exam1-2.json");
  testcases.forEach((testcase) => {
    it(testcase.title, () => {
      return app.codecheck("2", testcase.input)
      .then(result => {
        if (testcase.code == 0) {
          assert.equal(result.code, testcase.code);
          assert.equal(result.stdout.join("\\n"), testcase.output.join("\\n"));
        } else {
          assert.equal((result.code >= testcase.code), true);
          // Ignore output lines when status code is greater than 0.
        }
      });
    });
  });
});
describe("Technology specialist challenge 1-3", () => {
  let testcases = require("./test_exam1-3.json");
  testcases.forEach((testcase) => {
    it(testcase.title, () => {
      return app.codecheck("3", testcase.input)
      .then(result => {
        if (testcase.code == 0) {
          assert.equal(result.code, testcase.code);
          assert.equal(result.stdout.join("\\n"), testcase.output.join("\\n"));
        } else {
          assert.equal((result.code >= testcase.code), true);
          // Ignore output lines when status code is greater than 0.
        }
      });
    });
  });
});
