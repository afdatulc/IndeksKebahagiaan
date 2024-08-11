const scriptURL = 'https://script.google.com/macros/s/AKfycbzKjvGs0nC4-lnNqlTqTcWJaV7pQqHopvJRFCh_JlbA970ioRqjEorHd2t337nJe5pt/exec';
const form = document.forms['happiness-form'];

form.addEventListener('submit', e => {
  e.preventDefault();
  
  // Ambil nilai dari form
  const formData = new FormData(form);

  // Penimbang untuk masing-masing faktor
  const weights = {
    'kepuasan_pendidikan': 0.13,
    'kepuasan_pekerjaan': 0.13,
    'kepuasan_pendapatan': 0.15,
    'kepuasan_kesehatan': 0.10,
    'kepuasan_keharmonisan': 0.07,
    'kepuasan_waktu_luang': 0.07,
    'kepuasan_hub_sosial': 0.07,
    'kepuasan_lingkungan': 0.07,
    'kepuasan_keamanan': 0.07,
    'kepuasan_fas_rumah': 0.13
  };

  // Hitung Indeks Kebahagiaan
  let happinessIndex = 0;
  for (let key in weights) {
    const value = parseFloat(formData.get(key)) || 0;
    happinessIndex += value * weights[key];
  }

  // Tambahkan Indeks Kebahagiaan ke formData
  formData.append('indeks_kebahagiaan', happinessIndex);

  // Kirim data ke Google Sheets
  fetch(scriptURL, { method: 'POST', body: formData })
    .then(response => {
      alert("Terima kasih! Formulir Anda berhasil dikirim."+happinessIndex);
      window.location.reload();
    })
    .catch(error => console.error('Error!', error.message));
});
