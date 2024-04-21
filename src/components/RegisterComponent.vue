<template>
    <div>
        <h2>Register</h2>
        <input v-model="email" type="email" placeholder="Email">
        <input v-model="password" type="password" placeholder="Password">
        <button @click="register">Register</button>
    </div>
</template>

<script>

import ApiService from '@/services/ApiService.js';

export default {
    name: 'RegisterComponent',
    data() {
        return {
            email: '',
            password: ''
        };
    },
    methods: {
        async register() {
            try {
                await this.$auth.register(this.email, this.password);
                alert('Registration successful');
            } catch (error) {
                console.error('Error registering user:', error);
                alert('An error occured during registration.');
            }
        },
        async registerUser() {
            const userData = {
                email: this.email,
                password: this.password,
                provider: this.userProvider
            };
            // await CSVService.saveUserDataToCSV(userData, 'user_data.csv');
            try {
                const response = await ApiService.registerUser(userData);
                console.log('Registration successful:', response.data);
            } catch (error) {
                console.error('Error registering user:', error);
                alert('An error occured during registration.');
            }
        }
        
    }
}
</script>