<template>
  <div class="patient_wrapper">
    <div class="patient_name info">
      {{ patient.name }} {{ patient.lastName }}
    </div>
    <div class="patient_age info">Age: {{ patient.age }}</div>
    <div class="patient_address info">
      Address: <br />
      {{ patient.adress }}
    </div>
    <div class="patient_phoneNumber info">
      Click to call:
      <a :href="`tel:${patient.phoneNumber}`">{{ patient.phoneNumber }}</a>
    </div>
    <div class="patient_gender info">Gender: {{ patient.gender }}</div>
    <div class="patient_medicine_block info">
      Medicine:
      <div
        class="patient_medicine"
        v-for="med of findingTheMedicine"
        v-bind="med"
        :key="med.id"
      >
        {{ med.medicationName }} ({{ med.strength }})
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["patient", "medicine"],
  computed: {
    findingTheMedicine() {
      return this.medicine.filter((med) =>
        med.patientIds.includes(this.patient.id)
      );
    },
  },
};
</script>

<style scoped src="@/styles/Patient.css"></style>
