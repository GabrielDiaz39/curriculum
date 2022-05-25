if('serviceWorker' in navigator){
    navigator.serviceWorker.register('https://gabrieldiaz39.github.io/curriculum/serviceworker.js')
    .then(reg => console.log( reg))
    .catch(error => console.warn(error))
}
