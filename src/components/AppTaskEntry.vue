<template>
  <form @submit.prevent="onSubmit">
    <input
      v-model.trim="taskName"
      type="text"
      placeholder="Nombre de la tarea"
    />
    <input
      v-model="taskDuration"
      type="number"
      placeholder="Duración de la tarea"
    />
    <input type="submit" value="Guardar tarea" />
  </form>
</template>

<script>
export default {
  name: "AppTaskEntry",
  data() {
    return {
      taskName: "",
      taskDuration: 0,
    };
  },
  methods: {
    onSubmit() {
      this.$store.commit("addTask", {
        name: this.taskName,
        duration: this.taskDuration,
      });

      this.taskName = this.taskDuration = "";
    },
  },
};
</script>

<style>
</style>