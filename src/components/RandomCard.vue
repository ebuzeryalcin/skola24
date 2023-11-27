<template>
  <div class="card-wrapper">
    <v-card-title style="margin-bottom: 3rem;" class="text-h6 text-md-h5 text-lg-h4">Frånvaroanmälningar</v-card-title>
    
  <v-row>
    <v-col v-for="item in displayedData" :key="item.id" cols="12" sm="12" md="4" lg="4">
      <v-card style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3); transition: 0.3s;" class="mb-3 custom-card">
        <v-card-title>{{ formatName(item) }}</v-card-title>
        <v-card-text>{{ formatDateTime(item) }}</v-card-text>
        <v-card-text>{{ item.reasonGuid }}</v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" sm="12" md="4" lg="4">
      <v-card class="mb-3">
        <v-btn @click="showRandomData" class="card-button">
          <img src="../assets/plus.svg" class="card-img" />
        </v-btn>
      </v-card>
    </v-col>
  </v-row>
  </div>
</template>
  
<script>

import '../styles/main.css';
import {
   showRandomData,
   formatName, 
   formatDateTime, 
   isAbsenceUntilFurther, 
   isMultipleDayAbsence,
   isFullDayAbsence, 
   formatAbsenceUntilFurther, 
   formatMultipleDayAbsence, 
   formatFullDayAbsence, 
   formatDefaultDateTime,
   capitalizeFirstLetter
   }
   from '../utils';

export default {
  data() {
    return {
      displayedData: [],
    };
  },
  methods: {
   showRandomData,
   formatName, 
   formatDateTime, 
   isAbsenceUntilFurther, 
   isMultipleDayAbsence, 
   isFullDayAbsence, 
   formatAbsenceUntilFurther, 
   formatMultipleDayAbsence, 
   formatFullDayAbsence, 
   formatDefaultDateTime,
   capitalizeFirstLetter
  }
};
</script>
  