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
        <v-container>
          <v-row>
            <v-col v-for="(medication, index) in medications" :key="index" cols="12" md="6" sm="12">
              <v-card class="mb-2">
                <v-card-title>{{ medication.pillsName }}</v-card-title>
                <v-card-subtitle>Number of Pills: {{ medication.numberOfPills }}</v-card-subtitle>
                <v-card-text>
                  <div>Days: {{ medication.days }}</div>
                  <div>Choice: {{ medication.selectedChoice }}</div>
                  <div>Notification Time: {{ medication.notificationTime }}</div>
                </v-card-text>
                <v-card-actions>
                  <v-btn icon @click="editMedication(medication)">
                    <v-icon>mdi-pencil</v-icon>
                  </v-btn>
                  <v-btn icon @click="deleteMedication(medication)">
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
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
import {
  getMedication,
  createMedication,
  deleteMedication,
} from "../services/medication-service.js";

export default {
  name: 'HomePage',

  data() {
    return {
      medications: [],
      medication: {
        pillsName: "",
        numberOfPills: null,
        days: null,
        selectedChoice: "",
        notificationTime: "",
      },
      loading: true,
      editedIndex: -1,
      defaultMedication: {
        pillsName: "",
        numberOfPills: null,
        days: null,
        selectedChoice: "",
        notificationTime: "",
      },
    };
  },

  methods: {
    loadMedications() {
      this.loading = true;
      getMedication().then((result) => {
        this.medications = result;
        this.loading = false;
      });
    },
    save() {
      if (this.editedIndex > -1) {
        this.update();
      } else {
        this.create();
      }
      this.resetForm();
    },
    create() {
      const data = this.medication;
      createMedication(data).then(() => {
        this.loadMedications();
      });
    },
    update() {
      const data = this.medication;
      updateMedication(data).then(() => {
        this.loadMedications();
      });
    },
    deleteMedication(medication) {
      this.editedIndex = this.medications.indexOf(medication);
      this.medication = Object.assign({}, medication);
      deleteMedication(medication).then(() => {
        this.loadMedications();
      });
      this.resetForm();
    },
    editMedication(medication) {
      this.editedIndex = this.medications.indexOf(medication);
      this.medication = Object.assign({}, medication);
    },
    resetForm() {
      this.medication = Object.assign({}, this.defaultMedication);
      this.editedIndex = -1;
    },
    populateMedicationFromQuery() {
      const query = this.$route.query;
      if (query.pillsName) {
        this.medication.pillsName = query.pillsName;
        this.medication.numberOfPills = parseInt(query.numberOfPills, 10);
        this.medication.days = parseInt(query.days, 10);
        this.medication.selectedChoice = query.selectedChoice;
        this.medication.notificationTime = query.notificationTime;
        this.save();
      }
    },
    message() {
      this.$router.push({ path: '/doctorchat' });
    },
    profile() {
      this.$router.push({ path: '/profile' });
    },
  },

  mounted() {
    this.loadMedications();
    this.populateMedicationFromQuery();
  },
};

  </script>


<style scoped>
.home-container {
  background-color: #fefbe9;
  height: 100vh;
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
