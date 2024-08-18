<template>
    <div class="login-container d-flex justify-content-center align-items-center">
      <div class="login-card card p-4">
        <div class="text-center mb-4">
          <img src="@/assets/medical-team.png" alt="Medical Team" class="img-fluid" />
        </div>
        <form @submit.prevent="onSubmit" class="form">
          <div class="form-group mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" v-model="email" placeholder="Enter your email" required />
          </div>
          <div class="form-group mb-4">
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control" id="password" v-model="password" placeholder="Enter Password" required />
          </div>
          <button id="Signin" type="submit" class="btn btn-success">Log in</button>
        </form>
        <!-- <div class="text-center mt-3">
          <p>Don't have an account? <a href="#" @click.prevent="register">Register</a></p>
        </div> -->
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      onSubmit() {
        // Handle form submission logic
        this.$router.push({ path: '/home' });
      },
      
    }
  };
  </script>
  
  <style scoped>
  .login-container {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f8f9fa;
  }
  
  .login-card {
    width: 100%;
    max-width: 400px;
    border-radius: 15px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
  
  #email {
    border: #9eceff 2px solid;
    border-radius: 5px;
    margin-left: 40px;
  }

    #email::placeholder,
    #password::placeholder {
    font-size: 12px; 
    color: #6c757d; 
    padding: 10px;
    }

  #password{
    border: #9eceff 2px solid;
    border-radius: 5px;
    margin-left: 10px;
  }
  
  #Signin {
    width: 100px;
    height: 35px;
    background-color: #9eceff;
    border-radius: 8px;
    display: block;
    margin: 20px auto; 
    color: #f8f9fa;
  }

  .form{
    margin: 20px;
    margin-left: 50px;
  }
  </style>
  