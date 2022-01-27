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

<style scoped>
.patient_wrapper {
  flex-basis: 23%;
  display: flex;
  justify-content: flex-start;
  flex-flow: column;
  margin: 0 auto 30px;
  text-align: left;
  border: 1px solid #fff;
  border-radius: 50px;
}

.info {
  font-size: 18px;
  justify-content: flex-start;
  margin: 0 15px 10px 15px;
  min-width: 250px;
}

.info:last-child {
  margin-bottom: 25px;
}

.patient_name {
  font-size: 24px;
  align-self: center;
  margin-top: 5px;
  text-align: center;
}

.patient_address {
}

.patient_phoneNumber > * {
  color: #fff;
  text-decoration: none;
}

.patient_medicine_block {
  display: flex;
  justify-content: center;
  flex-flow: column;
}
.patient_medicine {
  align-self: center;
}
</style>
