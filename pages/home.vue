<template>
  <div class="home-container">
    <div class="search-container">
      <input type="text" placeholder="Search" class="search-input" />
    </div>

    <header class="header">
      <h2>Hello, Somsri</h2>
    </header>

    <div class="content">
      <div class="welcome-card">
        <!-- Replace the orange box with any content you need -->
        <div class="orange-box"></div>
      </div>

      <div class="daily-review">
        <h3>Daily Review</h3>
        <ul class="medication-list">
          <li class="medication-item">
            <p>Oxycodone</p>
            <p>10:00 AM</p>
            <!-- <p>10:00 AM</p> -->

          </li>
          <li class="medication-item">
            <p>Naloxone</p>
            <p>04:00 PM</p>
            <!-- <p>10:00 AM</p> -->

          </li>
          <li class="medication-item">
            <p>Oxycodone</p>
            <p>08:00 PM</p>
            <!-- <p>10:00 AM</p> -->

          </li>
        </ul>
      </div>
    </div>

    <footer class="footer">
      <div class="nav-icon"><i class="fas fa-home"></i></div>
      <!-- <div class="icon"> <i class="fas fa-comment-dots"></i></div> -->
      <button @click.prevent="message" class="icon"> <i class="fas fa-comment-dots"></i> </button>
      <button @click.prevent="profile" class="icon"> <i class="fas fa-user-alt"></i> </button>

      <!-- <div class="icon"><i class="fas fa-user-alt"></i></div> -->
    </footer>
    
  </div>
</template>

<script>
export default {
  name: 'HomePage',

    methods: {
      message() {
        // Handle form submission logic
        this.$router.push({ path: '/doctorchat' });
      },
      profile() {
        // Handle form submission logic
        this.$router.push({ path: '/profile' });
      },
      
    }
  };
  </script>


<style scoped>
.home-container {
  background-color: #fefbe9;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.header {
  text-align: left;
  width: 100%;
  margin-bottom: 20px;
}

.search-container {
  width: 100%;
  margin-bottom: 20px;
}

.search-input {
  width: 100%;
  padding: 10px;
  border-radius: 15px;
  border: 2px solid #d5e8d4;
  background-color: #ecf0e9;
}

.content {
  width: 100%;
}

.welcome-card {
  margin-bottom: 20px;
}

.orange-box {
  width: 100%;
  height: 150px;
  background-color: #f49b42;
  border-radius: 20px;
}

.daily-review {
  background-color: #d5e8d4;
  padding: 10px;
  border-radius: 15px;
}

.daily-review h3 {
  margin-bottom: 10px;
}

.medication-list {
  list-style-type: none;
  padding: 0;
}

.medication-item {
  background-color: #c7e2b2;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
}

.footer {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 10px 0;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

.nav-icon {
  width: 40px;
  height: 40px;
  background-color: #96c582;
  border-radius: 30%;
  position: relative;
}

.nav-icon i {
  font-size: 25px;
  position: absolute;
  top: 6px;
  left: 5px;
}

.icon{
  font-size: 25px;
}

.chat-icon {
  background-color: #96c582;
}

.profile-icon {
  background-color: #96c582;
}

</style>
