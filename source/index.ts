export module SmokeTest {
    export function helloWorld() {
        console.log("Hello World");
    }

    export function returnNumberString(num: number | null): string {
        return num != null ? num.toString() : 'null value';
    }
}