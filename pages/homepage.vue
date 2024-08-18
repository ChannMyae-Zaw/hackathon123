<template>
    <v-container class="mb-8">
      <!-- Back Button -->
      <v-btn icon class="back-button" @click="goBack">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
  
      <!-- Title -->
      <h4 class="text-h4">Add Plan</h4>
      <br />
  
      <!-- Pills Name Input -->
      <v-container class="pa-5">
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              class = "input"
              v-model="medication.pillsName"
              label="Pills Name"
              placeholder="Enter the name of the pills"
              outlined
              dense
              rounded
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
  
      <!-- Medication Card -->
  
      <!-- Amount & How Long -->
      <p>Amount & How long?</p>
      <v-row>
        <v-col cols="6">
            <v-number-input
  v-model="medication.numberOfPills"
  control-variant="stacked"
  label="Number of Pills"
  class="input"
></v-number-input>
        </v-col>
        <v-col cols="6">
          <v-number-input
            v-model="medication.days"
            control-variant="stack"
            label="Days"
            class="input"
          />
        </v-col>
      </v-row>
  
      <!-- Food & Pills Choices -->
      <p>Food & pills</p>
      <br>
      <v-row>
        <v-col cols="4">
          <VBtn @click="selectChoice('Before Meal')"> Before Meal</VBtn>
        </v-col>
        <v-col cols="4">
          <VBtn @click="selectChoice('With Meal')"> With Meal</VBtn>
        </v-col>
        <v-col cols="4">
          <VBtn @click="selectChoice('After Meal')"> After Meal </VBtn>
        </v-col>
      </v-row>
  
      <!-- Notification -->
      <p>Notification</p>

    <v-time-picker
      v-model="medication.notificationTime"
      landscape
      full-width
      class="mb-4 input"
    ></v-time-picker>


  
      <!-- Done Button -->
      <v-btn @click="saveMedication">
        Done
      </v-btn>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        medication: {
          pillsName: '',
          numberOfPills: null,
          days: null,
          selectedChoice: '',
          notificationTime: '',
        },
      };
    },
    methods: {
      selectChoice(choice) {
        this.medication.selectedChoice = choice;
      },
      saveMedication() {
        this.$router.push({
          path: '/index2',
          query: {
            pillsName: this.medication.pillsName,
            numberOfPills: this.medication.numberOfPills,
            days: this.medication.days,
            selectedChoice: this.medication.selectedChoice,
            notificationTime: this.medication.notificationTime,
          },
        });
      },
      goToMedicationPage() {
    // After any actions on the intermediate page, redirect to the medication page
    this.$router.push({
      path: '/medication',
    });
  },
      goBack() {
        this.$router.go(-1);
      },
    },
  };
  </script>
  
  <style scoped>
  .input {
    border-radius: 15px;
    background-color: #D5ED9F;
  }
  </style>
  