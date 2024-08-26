import type { NuxtError } from "#app"

export const useToast = () => useState('toast', () => false);
export const showErrorToast = (error: NuxtError) => {
  const toast = useToast();
  toast.value = true;
  setError(error);
}