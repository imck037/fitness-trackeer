<template>
  <form @submit.prevent="addWorkout" class="p-4 bg-white rounded shadow">
    <input v-model="activity" placeholder="Activity (e.g., Running)" class="input" />
    <input v-model.number="duration" type="number" placeholder="Duration (min)" class="input" />
    <input v-model.number="calories" type="number" placeholder="Calories Burned" class="input" />
    <button type="submit" class="btn">Add Workout</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { useWorkoutStore } from '@/stores/workoutStore'

const activity = ref('')
const duration = ref(0)
const calories = ref(0)
const store = useWorkoutStore()

const addWorkout = () => {
  store.addWorkout({ activity: activity.value, duration: duration.value, calories: calories.value, date: new Date() })
  activity.value = ''
  duration.value = 0
  calories.value = 0
}
</script>

<style scoped>
.input { @apply mb-2 p-2 border rounded w-full; }
.btn { @apply bg-blue-500 text-white px-4 py-2 rounded; }
</style>

