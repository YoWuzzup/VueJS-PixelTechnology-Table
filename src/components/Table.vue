<template>
  <div class="table_wrapper">
    <ul class="table_list">
      <Patient
        v-for="patient of patients"
        v-bind:patient="patient"
        v-bind:medicine="medicine"
        :key="patient.id"
      />
    </ul>
  </div>
</template>

<script>
import Patient from "@/components/Patient";

export default {
  // props are here
  props: ["patients", "medicine"],
  components: {
    Patient,
  },
};
</script>

<style scoped src="@/styles/Table.css"></style>
