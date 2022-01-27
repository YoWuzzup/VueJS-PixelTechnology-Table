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

<style scoped>
.table_wrapper {
  width: 80%;
  margin: 0 auto 0;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
}

.table_list {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  padding: 2rem 0 0;
  margin: 0;
  width: 100%;
}

@media (max-width: 1250px) {
  .table_wrapper {
    width: 100%;
  }
}


@media (max-width: 800px) {
  .table_list {
    width: 100%;
  }
}
</style>
