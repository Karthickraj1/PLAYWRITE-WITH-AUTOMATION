import{test,expect}from'@playwright/test';
test('create new user and validate',async({request})=>{

const payload={
    name:"Karthick",
    job:"Tester"    
};  
const response=await request.post('https://reqres.in/api/users',{
    headers:{
        'x-api-key':'reqres_184a8927172f43fd903cfdd431d9e7c7',  
        'Content-Type':'application/json'
    },
    data:payload
});
expect(response.status()).toBe(201);
const body=await response.json();
console.log(body);
expect(body.name).toBe(payload.name);
expect(body.job).toBe(payload.job);





});