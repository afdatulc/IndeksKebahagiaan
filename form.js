const scriptURL = 'https://script.google.com/macros/s/AKfycbzKjvGs0nC4-lnNqlTqTcWJaV7pQqHopvJRFCh_JlbA970ioRqjEorHd2t337nJe5pt/exec';
const form = document.forms['happiness-form'];

document.addEventListener("DOMContentLoaded", function () {
    const formSections = document.querySelectorAll(".form-section");
    const nextButtons = document.querySelectorAll(".next");
    const prevButtons = document.querySelectorAll(".previous");
    const submitButton = document.querySelector("button[type='submit']");
    const warningMessage = document.getElementById("warning-message");

    let currentSectionIndex = 0;

    // Fungsi untuk memperbarui tampilan bagian form
    function updateFormSections() {
        formSections.forEach((section, index) => {
            section.classList.toggle("current", index === currentSectionIndex);
        });

        // Update Progress Bar
        const progress = (currentSectionIndex + 1) / formSections.length * 100;
        document.querySelector('.progress-bar').style.width = progress + '%';
        document.querySelector('.progress-bar').setAttribute('aria-valuenow', progress);

    
        // Sembunyikan tombol Previous di bagian pertama
        prevButtons.forEach(button => {
            button.style.display = currentSectionIndex === 0 ? "none" : "inline-block";
        });
    
        // Sembunyikan tombol Next di bagian terakhir
        nextButtons.forEach(button => {
            button.style.display = currentSectionIndex === formSections.length - 1 ? "none" : "inline-block";
        });
    
        // Tampilkan tombol Submit hanya di bagian terakhir
        submitButton.style.display = currentSectionIndex === formSections.length - 1 ? "inline-block" : "none";
    }
    

    // Fungsi untuk memeriksa validitas form pada bagian yang aktif
    function isValidSection(index) {
        const currentSection = formSections[index];
        let valid = true;
        currentSection.querySelectorAll('input, select').forEach(field => {
            if (field.required && !field.value) {
                valid = false;
                field.focus();
                return;
            }
        });
        return valid;
    }

    // Event listener untuk tombol Next
    nextButtons.forEach(button => {
        button.addEventListener("click", function () {
            if (isValidSection(currentSectionIndex)) {
                warningMessage.classList.add("d-none");
                currentSectionIndex = Math.min(currentSectionIndex + 1, formSections.length - 1);
                updateFormSections();
            } else {
                warningMessage.classList.remove("d-none");
                warningMessage.textContent = "Harap jawab semua pertanyaan";
            }
        });
    });

    // Event listener untuk tombol Previous
    prevButtons.forEach(button => {
        button.addEventListener("click", function () {
            warningMessage.classList.add("d-none");
            currentSectionIndex = Math.max(currentSectionIndex - 1, 0);
            updateFormSections();
        });
    });

    // Inisialisasi tampilan form
    updateFormSections();
});


const mojis = ['😢', '😞', '😟', '😕', '😐', '🙂', '😊', '😃', '😄', '🤩'];
  function updateEmoji(emojiId, value) {
    const emojiElement = document.getElementById(emojiId);
    const index = Math.max(0, Math.min(mojis.length - 1, value - 1)); 
    emojiElement.textContent = mojis[index];
  }

  form.addEventListener('submit', e => {
    e.preventDefault();
    
    // Ambil nilai dari form
    const formData = new FormData(form);
    
    // Penimbang untuk masing-masing faktor
    const weights = {
      'kepuasan_pendidikan': 0.1308,
      'kepuasan_pekerjaan': 0.1312,
      'kepuasan_pendapatan': 0.1464,
      'kepuasan_kesehatan': 0.0985,
      'kepuasan_keharmonisan': 0.0721,
      'kepuasan_waktu_luang': 0.0743,
      'kepuasan_hub_sosial': 0.073,
      'kepuasan_lingkungan': 0.0701,
      'kepuasan_keamanan': 0.0714,
      'kepuasan_fas_rumah': 0.1322
    };
    
    // Hitung Indeks Kebahagiaan
    let happinessIndex = 0;
    for (let key in weights) {
      const value = parseFloat(formData.get(key)) || 0;
      happinessIndex += value * weights[key];
    }
    
    // Tentukan kategori berdasarkan Indeks Kebahagiaan
    let happinessCategory = '';
    let imageUrl = ''; // URL gambar default
    
    if (happinessIndex < 0) {
      happinessCategory = 'Tidak Bahagia';
      imageUrl = 'assets/img/details-2.png'; // Ganti dengan URL gambar yang sesuai
    } else if (happinessIndex >= 0 && happinessIndex <= 10) {
      happinessCategory = 'Sedang';
      imageUrl = 'assets/img/details-2.png'; // Ganti dengan URL gambar yang sesuai
    } else {
      happinessCategory = 'Bahagia';
      imageUrl = 'assets/img/details-2.png'; // Ganti dengan URL gambar yang sesuai
    }
    
    // Tambahkan Indeks Kebahagiaan ke formData
    formData.append('indeks_kebahagiaan', happinessIndex);
    
    // Kirim data ke Google Sheets
    fetch(scriptURL, { method: 'POST', body: formData })
      .then(response => {
        // Tampilkan modal dengan hasil
        document.getElementById('happinessIndex').textContent = happinessIndex.toFixed(2);
        document.getElementById('happinessCategory').textContent = "Kategori: "+happinessCategory;
        document.getElementById('happinessImage').src = imageUrl;
  
        const modal = new bootstrap.Modal(document.getElementById('happinessModal'));
        modal.show();
      })
      .catch(error => console.error('Error!', error.message));
  });
  