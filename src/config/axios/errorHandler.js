export default function errorHandler(error) {
  console.log('error =>', error);
  if (error) {
    let message;
    if (error.response === 500) {
      message = 'Something went wrong';
    } else message = error.response.data.message;

    // toats here
  }

  return Promise.reject(error);
}
