
const axios = require('axios');

async function testGetUsers() {
    try {
        const response = await axios.post('http://localhost:8000/getUsers');
        const users = response.data;
        console.log('Users fetched:', users.length);
        console.log('First user:', users[0]);

        if (users.length > 0 && users[0].hasOwnProperty('job')) {
            console.log('SUCCESS: "job" field is present.');
        } else {
            console.log('FAILURE: "job" field is missing or no users found.');
        }
    } catch (error) {
        console.error('Error fetching users:', error.message);
    }
}

testGetUsers();
