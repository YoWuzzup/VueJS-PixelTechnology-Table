<template>
  <div id="app">
    <h1 class="h1">Patients Table for Pixel Technology</h1>

    <div class="mainForm forms">
      <label for="filter" class="mainForm_label label">Choose a filter:</label>

      <select id="filter" v-model="filter" class="mainForm_select">
        <option value="all" class="mainForm_option">All patients</option>
        <option value="over30" class="mainForm_option">
          Patients over 30 with medicine
        </option>
        <option value="lower60" class="mainForm_option">
          Patients lower 60 with medicine and strength
        </option>
      </select>
    </div>

    <div class="sideForm_wrapper forms">
      <form class="sideForm">
        <label for="age" class="sideForm_ageLabel label">Choose age:</label>
        <input class="sideForm_age input" />
      </form>
    </div>

    <!-- v-bind is for sending data, like props in react  -->
    <Table v-bind:patients="filtering" v-bind:medicine="medicine" />
  </div>
</template>

<script>
import { fetchPatients, fetchMedicine } from "@/api/index";
import Table from "@/components/Table";

export default {
  name: "App",

  data() {
    return {
      patients: [],
      medicine: [],
      filter: "all",
    };
  },
  computed: {
    filtering() {
      if (this.filter === "over30") {
        return this.patients.filter((p) => p.age >= 30);
      }

      if (this.filter === "lower60") {
        return this.patients.filter((p) => p.age < 60);
      }

      return this.patients;
    },
  },

  // analogue of react's componentDidMount
  mounted() {
    // fetching patients
    fetchPatients().then((response) => {
      this.patients = response.data;
    });
    // fetching medicine
    fetchMedicine().then((response) => {
      this.medicine = response.data;
    });
  },
  // have to import ^, and register the components here
  components: {
    Table,
  },

  // this watches for a variable changes, in this case 'filter'
  // but better to use computed, pretty much like useEffect with dependences in React
  // watch: {
  //   filter(value) {
  //     console.log(value);
  //   },
  // },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  margin: 0 auto 0;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: flex-start;
  align-items: flex-start;
  background-color: #222831;
}

.h1 {
  flex-basis: 100%;
  margin: 60px auto 30px;
}

.forms {
  flex-basis: 35%;
  display: flex;
  align-content: center;
  align-items: center;
  flex-flow: row wrap;
}

.mainForm {
  justify-content: flex-start;
}

.label {
  margin-right: 20px;
}

.sideForm_wrapper {
  justify-content: flex-end;
}

.mainForm_select {
  border: none;
  outline: none;
}
</style>
