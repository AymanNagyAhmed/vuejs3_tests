<template>
    <div>
      <h1>The list of schools</h1>
    </div>
  </template>
  
  <script setup>
  import { onMounted } from "vue";
  import { useSchoolStore } from "../../stores/schools";
  
  const schoolStore = useSchoolStore();
  
  onMounted(async () => {
    const { success, status } = await schoolStore.dispatchGetSchools();
  
    if (!success) {
      alert("Ups, something happened 🙂");
      console.log("Api status ->", status);
    }
  });
  </script>
  