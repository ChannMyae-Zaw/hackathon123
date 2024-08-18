<template>
    <v-container fluid>
      <v-card class="border" variant="flat" rounded="l">
        <v-card-title class="d-flex">
          Medication Management
          <v-spacer />
          <v-btn class="mb-2" color="primary" dark @click="save">
            Save Medication
          </v-btn>
        </v-card-title>
  
        <v-container>
          <v-row>
            <v-col cols="12" md="6" sm="12">
              <v-text-field
                v-model="medication.pillsName"
                label="Pills Name"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6" sm="12">
              <v-text-field
                v-model="medication.numberOfPills"
                label="Number of Pills"
                type="number"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6" sm="12">
              <v-text-field v-model="medication.days" label="Days" type="number"></v-text-field>
            </v-col>
            <v-col cols="12" md="6" sm="12">
              <v-text-field
                v-model="medication.selectedChoice"
                label="Choice"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6" sm="12">
              <v-time-picker
                v-model="medication.notificationTime"
                label="Notification Time"
              ></v-time-picker>
            </v-col>
          </v-row>
        </v-container>
  
        <!-- List of Medication Cards -->
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
      </v-card>
    </v-container>
  </template>
  
  <script>
  import {
    getMedication,
    createMedication,
    deleteMedication,
  } from "../services/medication-service.js";
  
  export default {
    data: () => ({
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
    }),
  
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
    },
  
    mounted() {
      this.loadMedications();
      this.populateMedicationFromQuery();
    },
  };
  </script>
  
  <style scoped>
  
  .v-btn {
    margin-right: 8px;
  }
  </style>
  