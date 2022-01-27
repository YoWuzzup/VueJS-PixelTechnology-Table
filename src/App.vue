<template>
  <div id="app">
    <h1 class="h1">Patients Table for Pixel Technology</h1>

    <!-- v-on:EVENTNAME, eventname is in the child -->
    <Forms
      v-on:changeFilter="updateFilter($event)"
      v-on:changingData="updateChosenData($event)"
      v-on:submittingData="submitForm($event)"
    />

    <!-- v-bind is for sending data, props in react  -->
    <Table v-bind:patients="filtering" v-bind:medicine="medicine" />
  </div>
</template>

<script>
import { fetchPatients, fetchMedicine } from "@/api/index";
import Table from "@/components/Table";
import Forms from "@/components/Forms";

export default {
  name: "App",

  data() {
    return {
      patients: [],
      medicine: [],
      filter: "all",
      chosen: {
        chosenAge: null,
      },
    };
  },
  methods: {
    updateFilter: function (value) {
      this.filter = value;
    },
    updateChosenData: function (data) {
      this.chosen[data.name] = data.value;
    },
    submitForm: function () {
      fetchPatients(this.chosen).then((response) => {
        this.patients = response.data;
      });
    },
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
    fetchPatients(this.chosen).then((response) => {
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
    Forms,
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
</style>
