import { test, expect } from "@playwright/test";

test("GET user", async ({ request }) => {
    const response = await request.get("/api/users/2");
    const test = JSON.parse(await response.text());

    expect(response.status()).toBe(200);

    expect(test.data.email).toBe("janet.weaver@reqres.in");
    expect(test.data.first_name).toBe("Janet");
    expect(test.data.last_name).toBe("Weaver");

});

test("Login Successfull", async ({ request }) => {
    const response = await request.post("/api/login", {
        data: {
            email: "eve.holt@reqres.in",
            password: "cityslicka"
        },
    });
const test = JSON.parse(await response.text());

expect(response.status()).toBe(200);
expect(test.token).toBe("QpwL5tke4Pnpja7X4");

});

test("Login Unsuccessfull", async ({ request }) => {
    const response = await request.post("/api/login", {
        data: {
            email: "peter@klaven"
        },
    });
const test = JSON.parse(await response.text());

expect(response.status()).toBe(400);
expect(test.error).toBe("Missing password");

});