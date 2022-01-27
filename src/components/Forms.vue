<template>
  <div class="wrapper">
    <div class="mainForm forms">
      <label for="filter" class="mainForm_label label">Choose a filter:</label>

      <select id="filter" v-on:change="changeFilter" class="mainForm_select">
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
      <form class="sideForm" v-on:submit="submitData">
        <label for="chosenAge" class="sideForm_ageLabel sideForm_label" min="1"
          >Choose age:</label
        >

        <input
          id="chosenAge"
          name="chosenAge"
          class="sideForm_age input"
          v-on:change="changeData"
          type="number"
        />

        <input type="submit" value="Submit" />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    changeFilter: function (event) {
      const { value } = event.target;
      this.$emit("changeFilter", value);
    },
    changeData: function (e) {
      this.$emit("changingData", e.target);
    },
    submitData: function (event) {
      this.$emit("submittingData", event);
      event.preventDefault();
    },
  },
};
</script>

<style scoped src="@/styles/Forms.css"></style>
