import { test, expect } from '@playwright/test';

test('Get User → Validate Name', async ({ request }) => {

    const response = await request.get('https://reqres.in/api/users/2', {
        headers: {
            'x-api-key': 'reqres_184a8927172f43fd903cfdd431d9e7c7'
        }
    });
    expect(response.status()).toBe(200);

    const body = await response.json();
    console.log(body);

    expect(body.data.first_name).toBe('Janet');
    expect(body.data.last_name).toBe('Weaver');
});







