import "mocha";
import * as assert from "assert";
import {SmokeTest} from "../source";

describe("index", () => {
    it("should say 'hello world'", () => {
        SmokeTest.helloWorld();
        assert.ok(true);
    });

    it("should return number string if not null", () => {
        let num: string = SmokeTest.returnNumberString(123);
        assert.equal(num, "123");
    });

    it("should return 'null value' if null", () => {
        let num: string = SmokeTest.returnNumberString(null);
        assert.equal(num, "null value");
    });

    it("should return '0' if 0", () => {
        let num: string = SmokeTest.returnNumberString(0);
        assert.equal(num, "0");
    });
});
