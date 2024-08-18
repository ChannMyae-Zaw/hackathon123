<template>
  <div class="chat-container">
    <div class="search-container">
      <input type="text" placeholder="Search" class="search-input" />
    </div>

    <div class="chat-list">
      <div v-for="patient in patients" :key="patient.id" class="chat-item">
        <img :src="patient.img" alt="Somchai" class="avatar" />
        <span class="patient-name">{{ patient.name }}</span>
        <font-awesome-icon icon="arrow-right" class="arrow-icon" />
      </div>
    </div>

    <!-- <footer class="footer">
      <font-awesome-icon icon="home" class="nav-icon home-icon" />
      <font-awesome-icon icon="comments" class="nav-icon chat-icon active" />
      <font-awesome-icon icon="user" class="nav-icon profile-icon" />
    </footer> -->
  </div>
</template>

  
<script>
export default {
  name: 'DoctorChat',
  data() {
    return {
      patients: [
        { id: 1, name: 'Somchai', img: require('@/assets/somchai.png') },
        { id: 2, name: 'Chaba', img: require('@/assets/chaba.png') },
        { id: 3, name: 'Buabaan', img: require('@/assets/buabaan.png') },
      ],
    };
  },
};
</script>

  
  <style scoped>
  .chat-container {
    background-color: #fefbe9;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
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
  
  .chat-list {
    width: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  
  .chat-item {
    display: flex;
    align-items: center;
    background-color: #d5e8d4;
    padding: 10px;
    border-radius: 15px;
  }
  
  .avatar {
    width: 40px;
    height: 40px;
    margin-right: 15px;
    border-radius: 50%;
  }
  
  .patient-name {
    flex-grow: 1;
  }
  
  .arrow-icon {
    color: #3b3b3b;
  }
  
  .footer {
    display: flex;
    justify-content: space-around;
    width: 100%;
    background-color: #3b3b3b;
    padding: 10px 0;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }
  
  .nav-icon {
    width: 30px;
    height: 30px;
    color: #96c582;
  }
  
  .nav-icon.active {
    color: #62935d;
  }
  </style>
  