
const form = document.querySelector(".form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  const delay = parseInt(form.delay.value);
  const state = form.state.value;
  
  const promise = new Promise((resolve, reject) => {
    if (state === "fulfilled") {
      setTimeout(() => {
        resolve(delay);
      }, delay);
    } else if (state === "rejected") {
      setTimeout(() => {
        reject(delay);
      }, delay);
    }
  });
  
  promise.then(
    (delay) => {
      iziToast.success({
        title: "Fulfilled promise",
        message: `✅ Fulfilled promise in ${delay}ms`
      });
    },
    (delay) => {
      iziToast.error({
        title: "Rejected promise",
        message: `❌ Rejected promise in ${delay}ms`
      });
    }
  );
});
