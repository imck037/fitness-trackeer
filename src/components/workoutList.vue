<template>
  <div class="mt-4">
    <h2 class="text-xl font-bold mb-2">Workout History</h2>
    <ul>
      <li v-for="(w, index) in workouts" :key="index" class="mb-2">
        {{ w.date.toLocaleDateString() }} - {{ w.activity }} ({{ w.duration }} min, {{ w.calories }} cal)
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useWorkoutStore } from '@/stores/workoutStore'
const { workouts } = useWorkoutStore()
</script>

