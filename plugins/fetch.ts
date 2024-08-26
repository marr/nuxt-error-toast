import { ofetch } from 'ofetch';

export default defineNuxtPlugin(() => {
  const fetcher = ofetch.create({
    onResponseError({ response }) {
      const { statusCode, statusMessage, message } = response._data;
      throw createError({
        statusCode,
        statusMessage,
        message: message.replace('Error: ', ''),
      });
    },
    headers: {
      accept: 'application/json'
    }
  });
  return {
    provide: {
      fetcher
    }
  }
})