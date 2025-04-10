<template>
  <div class="max-w-2xl mx-auto p-4">
    <h1 class="text-3xl font-bold mb-4">Fitness Tracker</h1>
    <WorkoutForm />
    <WorkoutList />
    <ProgressChart />
  </div>
</template>

<script setup>
import WorkoutForm from './components/WorkoutForm.vue'
import WorkoutList from './components/WorkoutList.vue'
import ProgressChart from './components/ProgressChart.vue'
</script>

