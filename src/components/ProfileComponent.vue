<template>
    <div class="profile">
      <h2>User Profile</h2>
      <div v-if="user">
        <p><strong>Name:</strong> {{ user.name }}</p>
        <p><strong>Email:</strong> {{ user.email }}</p>
        <!-- Add more user information fields as needed -->
      </div>
      <div v-else>
        <p>Loading user information...</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProfileComponent',
    data() {
      return {
        user: null
      };
    },
    mounted() {
      // Assume you have a method to fetch user information from an API or elsewhere
      this.fetchUserInfo();
    },
    methods: {
      fetchUserInfo() {
        // Example: Fetch user information from an API (replace with actual logic)
        // Here we're just simulating a delay with setTimeout
        setTimeout(() => {
          // Replace this with your actual user data
          this.user = {
            name: 'Pwint Thiri Khin',
            email: 'gracethirikhin13@gmail.com'
            // Add more user information fields as needed
          };
        }, 1000); // Simulated delay of 1 second
      }
    }
  };
  </script>
  
  <style scoped>
  .profile {
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  </style>
  