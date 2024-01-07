const registerServiceWorker = async () => {
  const registration = await navigator.serviceWorker.register("/sw.js", { scope: "/"})
  if (registration.installing) {
    console.log("installing")
  } else if (registration.waiting) {
    console.log("installed")
  } else if (registration.active) {
    console.log("active")
  }
}

registerServiceWorker()

const fetchTest = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
  console.log(await response.json())
}

fetchTest()