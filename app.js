const registerServiceWorker = async () => {
  const registration = await navigator.serviceWorker.register('/sw.js', { scope: './'})
  if (registration.installing) {
    console.log('installing')
  } else if (registration.waiting) {
    console.log('installed')
  } else if (registration.active) {
    console.log('active')
  }
}

registerServiceWorker()