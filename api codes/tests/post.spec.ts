import { test, expect } from '@playwright/test';

test('Create User API', async ({ request }) => {

    const response = await request.post('https://reqres.in/api/users', {
        headers: {
            'x-api-key': 'reqres_184a8927172f43fd903cfdd431d9e7c7',
            'Content-Type': 'application/json'
        },
        data: {
            name: "Karthick",
            job: "Tester"

      
        }
    });

    const body = await response.json();
    console.log(body);

    expect(response.status()).toBe(201);
    expect(body.name).toBe("Karthick");
});