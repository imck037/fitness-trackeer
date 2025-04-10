<template>
  <Line :data="chartData" />
</template>

<script setup>
import { Line } from 'vue-chartjs'
import { useWorkoutStore } from '@/stores/workoutStore'
import { computed } from 'vue'

const { workouts } = useWorkoutStore()

const chartData = computed(() => ({
  labels: workouts.map(w => new Date(w.date).toLocaleDateString()),
  datasets: [
    {
      label: 'Calories Burned',
      backgroundColor: '#3b82f6',
      borderColor: '#3b82f6',
      data: workouts.map(w => w.calories)
    }
  ]
}))
</script>

