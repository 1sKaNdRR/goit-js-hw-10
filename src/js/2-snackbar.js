
const form = document.querySelector(".form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  const delay = parseInt(form.delay.value);
  const state = form.state.value;
  

const promise = new Promise((resolve, reject) => {
  if (state === "fulfilled" || state === "rejected") {
    setTimeout(() => {
      state === "fulfilled" ? resolve(delay) : reject(delay);
    }, delay);
  } else {
    reject(new Error("Invalid state"));
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
