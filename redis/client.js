//connect to local host port 6379
import { createClient } from 'redis';

const client = createClient();

client.on('error', err => console.log('Redis client Error', err));

await client.connect();

//store and retrieve a simple string

await client.set('key', 'value');
const value = await client.get('key');

//store and retrieve a map

await client.hSet('user-session:123', {
    name: 'John',
    surname: 'Smith',
    company: 'Redis',
    age: 29
});

let userSession = await client.hGetAll('user-session:123');
console.log(JSON.stringify(userSession, null, 2));
/*
{
    "surname": "smith",
    "name": "John",
    "company": "redis",
    "age": "29"
}
*/

