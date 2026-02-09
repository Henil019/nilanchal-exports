const scriptURL = 'https://script.google.com/macros/s/AKfycbyEHMR7VljpJk6hwDZkV7r5z8isXAlALcd8uhuAGg7lydDGbcrgDXIBQcqE_pcKNkv0hw/exec';
const form = document.getElementById('enquiryForm');

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, {
    method: 'POST',
    body: new FormData(form),
    mode: 'no-cors' // to bypass CORS issues
  })
  .then(() => {
    alert("Form submitted successfully!");
    form.reset();
  })
  .catch(error => {
    console.error("Error!", error.message);
  });
});
