export default defineEventHandler(event => {
  if (Math.random() * 100 < 90) {
    throw createError({
      message: 'Something went wrong.',
      statusCode: 400,
      statusMessage: 'Flakey Endpoint'
    });
  }
  return {
    ok: true,
    timeStamp: Date.now()
  };
})