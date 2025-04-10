import { defineStore } from 'pinia'

export const useWorkoutStore = defineStore('workout', {
  state: () => ({
    workouts: []
  }),
  actions: {
    addWorkout(workout) {
      this.workouts.push(workout)
    }
  }
})

