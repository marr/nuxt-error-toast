import type { NuxtError } from "#app"

export const setError = (error: NuxtError) => {
  useState('error').value = error;
}