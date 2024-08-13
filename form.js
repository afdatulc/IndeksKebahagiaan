const scriptURL = 'https://script.google.com/macros/s/AKfycbzKjvGs0nC4-lnNqlTqTcWJaV7pQqHopvJRFCh_JlbA970ioRqjEorHd2t337nJe5pt/exec';
const form = document.forms['happiness-form'];
const quotes = {
  '0-1': [
    { text: "Jika kita tidak bisa hidup untuk menjadi bahagia, setidaknya kita hidup agar layak untuk itu" },
    { text: "Lepaskan beban yang membuatmu sedih, kamu pantas bahagia" },
    { text: "Kebahagiaan muncul dalam kondisi damai, bukan keributan"},
    { text: "Berbahagialah dengan apa yang kamu miliki. Bersemangatlah dengan apa yang kamu inginkan" }
  ],
  '1-2': [
    { text: "Untuk meraih kesuksesan, kita harus memiliki motivasi yang kuat. Namun untuk bahagia, kita bisa menikmatinya saat beristirahat dan bersyukur" },
    { text: "Janganlah kamu remehkan dirimu karena sebenarnya kamu jauh lebih baik dar apa yang kamu pikirkan" },
    { text: "Ucapkanlah syukur setiap saat, sebab bahagia tidak akan pernah datang untuk seseorang yang tidak dapat menghargai apa yang sudah dimiliki" },
    { text: "Bukan seberapa banyak yang kita miliki, tetapi seberapa banyak yang kita nikmati, yang membuat kebahagiaan"}
  ],
  '2-3': [
    { text: "Tidak ada yang lebih baik dari pulang ke rumah untuk berkumpul bersama keluarga,makan-makanan enak, dan bersantai" },
    { text: "Ketika kehidupan memberimu seratus alasan untuk menangis. Tunjukkanlah bahwa kamu punya seribu alasan untuk bahagia"},
    { text: "Terkadang kegembiraanmu adalah sumber senyummu, tapi terkadang senyummu bisa menjadi sumber kegembiraanmu"},
    { text: "Bahagia itu bukan karena tidak ada masalah, tapi karena kemampuan untuk menghadapi masalah" }
  ],
  '3-4': [
    { text: "Nikmati hidupmu sendiri tanpa membandingkannya dengan yang lain", image: 'assets/img/enjoy.png' },
    { text: "Berbahagialah bukan hanya karena segala sesuatunya baik, tetapi karena kamu masih mampu melihat hal baik dari segala sesuatu yang ada"},
    { text: "Rasa bahagia dan tak bahagia bukan berasal dari apa yang anda miliki, bukan pula berasal dari siapa diri anda, atau apa yang anda kerjakan. Bahagia dan tak bahagia berasal dari pikiran anda"},
    { text: "Hal yang paling penting adalah menikmati hidupmu, menjadi bahagia, apapun yang terjadi"}
  ],
  '4-5': [
    { text: "Ketika kamu menyukai apa yang kamu miliki, kamu memiliki semua yang kamu butuhkan"},
    { text: "Jangan lupa untuk selalu tersenyum meskipun hidupmu sulit karena hanya dengan sebuah senyuman dapat mengubah duka menjadi bahagia" },
    { text: "Kebahagiaan timbul saat kita menerima diri sendiri apa adanya" },
    { text: "Bahagia itu sederhana, kurangi keinginan, penuhi kebutuhan dan perbanyaklah bersyukur" }
  ],
  '5-6': [
    { text: "Jadikan hati kita selalu damai agar kita bisa membahagiakan diri kita sendiri serta membahagiakan sesama"},
    { text: "Hatimu milikmu, kamu tuannya. Mau merasa senang atau tidak, kamulah yang menentukan" },
    { text: "Lupakan yang telah berlalu. Hidup terus berjalan, siapa yang dapat membuatmu bahagia, itulah yang pantas kamu pertahankan" },
    { text: "Bila masih ada yang bisa membuat anda bahagia atau menderita, itu tandanya saklar kehidupan masih di pegang orang lain. Seorang master memegang saklarnya sendiri"},
    { text: "Jika kamu ingin bahagia, jangan biarkan masa lalu mengusikmu. Kamu boleh melihat ke belakang, namun jangan membawanya kembali"},
    { text: "Berjalanlah ambil sisa tawamu yang tertinggal di masa lalu. Semua orang berhak bahagia, termasuk kamu"},
    { text: "Untuk setiap menit Anda marah, Anda kehilangan enam puluh detik kebahagiaan, maka berbahagialah"},
  ],
  '6-7': [
    { text: "Kamu akan lebih mudah untuk merasakan kebahagiaan dengan menerima kekuranganmu daripada mencari bahagia dengan berusaha menjadi orang yang sempurna" },
    { text: "Hidup ini harus ceria, selalu semangat, yakin, berusaha yang terbaik, dan selalu berdoa" },
    { text: "Jangan habiskan waktumu untuk dia yang terus buatmu terluka, ketika ada seseorang di luar sana menunggu tuk buatmu bahagia" },
    { text: "Kau tak akan pernah bahagia jika kau terus mencari kebahagiaan itu seperti apa. Kau pun tak akan pernah hidup jika kau masih mencari makna kehidupan" },
    { text: "Kebahagiaan adalah seni untuk tidak pernah mengingat apa pun yang tidak menyenangkan di benakmu" },
    { text: "Yakinlah bahwa dengan bersyukur, maka kebahagiaan akan terus dan terus bertambah" },
    { text: "Kebahagiaan bisa dicapai dengan tiga hal. Sabar saat diuji, bersyukur saat mendapat nikmat, dan bertaubat saat berbuat dosa" },
    { text: "Kebahagiaan akan datang ketika kamu berhenti mengeluh atas semua masalah yang menimpamu dan mulai bersyukur atas semua masalah yang tidak menimpamu" },
    { text: "Tidak ada yang perlu engkau sesali karena Tuhanmu ada. Rezekimu telah ditentukan dan umurmu telah digariskan. Indahkan saja dirimu, niscaya engkau akan menyaksikan keindahan itu disekelilingmu" },
    { text: "Berbagilah apa yang kamu punya, sesederhana berbagi senyum pada sesama. Mungkin bisa sedikit mengobati kesedihan dan menularkan kebahagiaan pada mereka" }
    ],
  '7-8': [
    { text: "Mengharapkan kesempurnaan, maka kita takkan pernah menemukan rasa puas. Bersyukurlah untuk hal sekecil apapun dalam hidup meski sederhana" },
    { text: "Berbahagialah bukan hanya karena segala sesuatunya baik, tetapi karena kamu masih mampu melihat hal baik dari segala sesuatu yang ada" },
    { text: "Terkadang kita lupa atau bahkan tak menyadari bahwa hidup yang tengah kita keluhkan mungkin adalah hidup yang orang lain perjuangkan" },
    { text: "Hidup ini harus ceria, selalu semangat, yakin, berusaha yang terbaik, dan selalu berdoa" },
    { text: "Mudah saja membahagikan hati, mulailah dengan memaafkan" },
    { text: "Bahagia itu mudah. Berpikirlah dan bertindaklah dengan sederhana" },
    { text: "Berbahagialah tanpa menjadikan kebahagiaan orang lain sebagai syaratnya" },
    { text: "Jangan lupa untuk selalu tersenyum meskipun hidupmu sulit karena hanya dengan sebuah senyuman dapat mengubah duka menjadi bahagia" },
    { text: "Berbahagialah bukan hanya karena segala sesuatunya baik, tetapi karena kamu masih mampu melihat hal baik dari segala sesuatu yang ada" },
    { text: "Ketika kehidupan memberimu seratus alasan untuk menangis. Tunjukkanlah bahwa kamu punya seribu alasan untuk bahagia" }
    ],
  '8-9': [
    { text: "Ketika kamu menyukai apa yang kamu miliki, kamu memiliki semua yang kamu butuhkan" },
    { text: "Bahagia itu sederhana, sesederhana kamu tersenyum dan bersyukur dengan apa yang sudah kamu punya" },
    { text: "Kebahagiaan harus terus dirasakan dalam perjalanan hidup, bukan hanya menjadi tujuan hidup, tetaplah menjadi jiwa yang berbahagia" },
    { text: "Kamu adalah kesuksesan sejati jika kamu dapat memercayai diri sendiri, mencintai diri sendiri, dan menjadi diri sendiri, dan kamu mampu membuktikan hal itu" },
    { text: "Kamu bahagia bukan karena memiliki semua yang kamu cintai. Tapi kamu bahagia karena mencintai semua yang kamu miliki" },
    { text: "Sukses bukanlah kunci menuju kebahagiaan. Kebahagiaan adalah kunci kesuksesan. Kamu menyukai apa yang kamu lakukan, dan kamu berhasil" },
    { text: "Kamu bahagia karena telah berhasil membuat orang lain pun berbahagia" },
    { text: "Aku senang menjadi diriku sendiri. Tak perlu memedulikan orang lain. Dan aku bahagia" },
    { text: "Kamu lebih mudah untuk merasakan kebahagiaan dengan menerima kekuranganmu daripada mencari bahagia dengan berusaha menjadi orang yang sempurna" },
    { text: "Persiapkan hari ini untuk keinginan hari esok, karena anda sedang berbahagia" }
    ],
  '9-10': [
    { text: "Selamat ...anda telah hidup dengan penuh makna, mampu bahagia dengan apa yg anda miliki.....bukan apa yg anda inginkan" },
    { text: "Selamat..anda telah mampu menghargai hidup dan menemukan kebahagiaan sejati" },
    { text: "Aku adalah orang yang lebih bahagia dari pada orang-orang pikir tentang diriku" },
    { text: "Hatimu milikmu, kamu tuannya. Mau merasa bahagia atau tidak, kamu telah mampu menentukannya" },
    { text: "Anda tidak mengkhawatirkan masa depan, karena selalu mensyukuri hari ini, dan hidup dengan sebaik-baiknya" },
    { text: "Kamu mendapat cukup kebahagiaan untuk membuat kamu bahagia, cobaan membuat kamu kuat, penderitaan membuat kamu menjadi manusia yang sesungguhnya, dan harapan membuat kamu positif terhadap kehidupan" },
    { text: "Orang yang bersyukur selalu menghiasi wajah mereka dengan senyuman, terima kasih untuk senyum indahmu hari ini" },
    { text: "Bukanlah harta yang membuatmu bahagia, tapi rasa bersyukurlah yang membuatmu menjadi orang yang merasakan kebahagiaan" },
    { text: "Orang terkaya adalah orang yang menerima pemberian dari Allah dengan senang hati, bersyukurlah karena anda termasuk orang itu" },
    { text: "Yang membuatku terus berkembang adalah tujuan-tujuan hidupku, dan aku bahagia mewujudkannya" },
    { text: "Seberat apapun harimu, kamu tidak pernah biarkan seseorang membuatmu merasa bahwa kamu tak pantas mendapatkan apa yang kamu inginkan, karena kamu orang yang hebat" },
    { text: "Ketika satu pintu kebahagiaan tertutup, maka pintu yang lain akan dibukakan, kamu pun mempercayai itu" }
    ]
};

function getFormattedTimestamp() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

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

      currentSection.querySelectorAll('input, select,number,option').forEach(field => {
        if (field.name === 'umur') {
          const umur = field.value.trim(); // Menghapus spasi dari nilai input
          if (umur === "" || isNaN(umur) || umur < 0 || umur > 100) {
              valid = false;
              warningMessage.classList.remove("d-none");
              if (umur === "") {
                  warningMessage.textContent = "Harap jawab semua pertanyaan";
              } else {
                  warningMessage.textContent = "Umur harus di antara 0 hingga 100";
              }
              field.focus();
              return;
          }
          } else if (field.type === 'radio' && field.required) {
            const radioGroup = currentSection.querySelectorAll(`input[name="${field.name}"]`);
            const isRadioChecked = Array.from(radioGroup).some(radio => radio.checked);
            if (!isRadioChecked) {
                valid = false;
                warningMessage.classList.remove("d-none");
                warningMessage.textContent = "Harap jawab semua pertanyaan";
                field.focus();
                return;
            }
        } else if (field.required && !field.value) {
            valid = false;
            warningMessage.classList.remove("d-none");
            warningMessage.textContent = "Harap jawab semua pertanyaan";
            field.focus();
            return;
        }
      });

      if (valid) {
          warningMessage.classList.add("d-none");
      }
      return valid;
  }

      // Event listener untuk tombol Next
      nextButtons.forEach(button => {
        button.addEventListener("click", function () {
            if (isValidSection(currentSectionIndex)) {
                currentSectionIndex = Math.min(currentSectionIndex + 1, formSections.length - 1);
                updateFormSections();
            }
        });
    });

    // Event listener untuk tombol Previous
    prevButtons.forEach(button => {
        button.addEventListener("click", function () {
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

    const submitButton = document.querySelector("button[type='submit']");
    const spinner = submitButton.querySelector(".spinner-border");
    spinner.classList.remove("d-none");
    submitButton.disabled = true;
    
    // Ambil nilai dari form
    const formData = new FormData(form);
    
    // Penimbang untuk masing-masing faktor
    // const weights = {
    //   'kepuasan_pendidikan': 0.1308,
    //   'kepuasan_pekerjaan': 0.1312,
    //   'kepuasan_pendapatan': 0.1464,
    //   'kepuasan_kesehatan': 0.0985,
    //   'kepuasan_keharmonisan': 0.0721,
    //   'kepuasan_waktu_luang': 0.0743,
    //   'kepuasan_hub_sosial': 0.073,
    //   'kepuasan_lingkungan': 0.0701,
    //   'kepuasan_keamanan': 0.0714,
    //   'kepuasan_fas_rumah': 0.1322,
    //   'afeksi(R301)': 0.30,
    //   'afeksi(R302)': 0.59,
    //   'afeksi(R303)': 0.11,
    //   'eudaimonia(1)': 0.12,
    //   'eudaimonia(2)': 0.09,
    //   'eudaimonia(3)': 0.06,
    //   'eudaimonia(4)': 0.07,
    //   'eudaimonia(5)': 0.11,
    //   'eudaimonia(6)': 0.55,
    //   'kepuasan': 0.18,
    //   'afeksi':0.55,
    //   'eudaimonia': 0.27
    // };
    
    // // Hitung Indeks Kebahagiaan
    // let happinessIndex = 0;
    // for (let key in weights) {
    //   const value = parseFloat(formData.get(key)) || 0;
    //   happinessIndex += value * weights[key];
    // }
    const weights = {
      'kepuasan': 0.18,
      'afeksi': 0.55,
      'eudaimonia': 0.27
    };
    
    let kepuasanIndex = 0;
    let afeksiIndex = 0;
    let eudaimoniaIndex = 0;
    
    // Menghitung indeks kepuasan
    kepuasanIndex += (parseFloat(formData.get('kepuasan_pendidikan')) || 0) * 0.1308;
    kepuasanIndex += (parseFloat(formData.get('kepuasan_pekerjaan')) || 0) * 0.1312;
    kepuasanIndex += (parseFloat(formData.get('kepuasan_pendapatan')) || 0) * 0.1464;
    kepuasanIndex += (parseFloat(formData.get('kepuasan_kesehatan')) || 0) * 0.0985;
    kepuasanIndex += (parseFloat(formData.get('kepuasan_keharmonisan')) || 0) * 0.0721;
    kepuasanIndex += (parseFloat(formData.get('kepuasan_waktu_luang')) || 0) * 0.0743;
    kepuasanIndex += (parseFloat(formData.get('kepuasan_hub_sosial')) || 0) * 0.073;
    kepuasanIndex += (parseFloat(formData.get('kepuasan_lingkungan')) || 0) * 0.0701;
    kepuasanIndex += (parseFloat(formData.get('kepuasan_keamanan')) || 0) * 0.0714;
    kepuasanIndex += (parseFloat(formData.get('kepuasan_fas_rumah')) || 0) * 0.1322;
    
    // Menghitung indeks afeksi
    afeksiIndex += (parseFloat(formData.get('afeksi(R301)')) || 0) * 0.30;
    afeksiIndex += (parseFloat(formData.get('afeksi(R302)')) || 0) * 0.59;
    afeksiIndex += (parseFloat(formData.get('afeksi(R303)')) || 0) * 0.11;
    
    // Menghitung indeks eudaimonia
    eudaimoniaIndex += (parseFloat(formData.get('eudaimonia(1)')) || 0) * 0.12;
    eudaimoniaIndex += (parseFloat(formData.get('eudaimonia(2)')) || 0) * 0.09;
    eudaimoniaIndex += (parseFloat(formData.get('eudaimonia(3)')) || 0) * 0.06;
    eudaimoniaIndex += (parseFloat(formData.get('eudaimonia(4)')) || 0) * 0.07;
    eudaimoniaIndex += (parseFloat(formData.get('eudaimonia(5)')) || 0) * 0.11;
    eudaimoniaIndex += (parseFloat(formData.get('eudaimonia(6)')) || 0) * 0.55;
    
    // Menghitung Indeks Kebahagiaan akhir
    let happinessIndex = (kepuasanIndex * weights['kepuasan'] + afeksiIndex * weights['afeksi'] + eudaimoniaIndex * weights['eudaimonia']) * 10;    
    
    // Tentukan kategori berdasarkan Indeks Kebahagiaan
    let imageUrl = 'assets/img/details-2.png'; // URL gambar default
    
     // Tentukan kategori dan kutipan berdasarkan Indeks Kebahagiaan
     let range = '';
     if (happinessIndex <= 10) {
      range = '0-1';
      } else if (happinessIndex <= 20) {
          range = '1-2';
      } else if (happinessIndex <= 30) {
          range = '2-3';
      } else if (happinessIndex <= 40) {
          range = '3-4';
      } else if (happinessIndex <= 50) {
          range = '4-5';
      } else if (happinessIndex <= 60) {
          range = '5-6';
      } else if (happinessIndex <= 70) {
          range = '6-7';
      } else if (happinessIndex <= 80) {
          range = '7-8';
      } else if (happinessIndex <= 90) {
          range = '8-9';
      } else if (happinessIndex <= 100) {
          range = '9-10';
      } else {
          range = 'Di luar rentang yang diharapkan';
      }
     
     // Pilih kutipan dan gambar secara acak dari rentang yang sesuai
     const quotesArray = quotes[range];
     const randomQuote = quotesArray[Math.floor(Math.random() * quotesArray.length)];
 
     // Tambahkan Indeks Kebahagiaan ke formData
     formData.append('indeks_kebahagiaan', happinessIndex);
	 
	 const timestamp = getFormattedTimestamp();
    formData.append('timestamp', timestamp);
     
     // Kirim data ke Google Sheets
     fetch(scriptURL, { method: 'POST', body: formData })
       .then(response => {
         // Tampilkan modal dengan hasil
         document.getElementById('happinessIndex').textContent = happinessIndex.toFixed(2);
         document.getElementById('happinessCategory').textContent = randomQuote.text;
         document.getElementById('happinessImage').src = imageUrl;
 
    const modalElement = document.getElementById('happinessModal');
    const modal = new bootstrap.Modal(modalElement, {
      backdrop: 'static',  // Mengatur backdrop agar tidak menutup modal saat diklik di luar
      keyboard: false  // Menonaktifkan penutupan dengan keyboard (opsional)
    });
    modal.show();

    // Event listener untuk mereload halaman saat modal ditutup
    modalElement.addEventListener('hidden.bs.modal', function () {
      location.reload();
    });
  })
  .catch(error => console.error('Error!', error.message));
    });


  document.addEventListener('DOMContentLoaded', function() {
    var sliders = document.querySelectorAll('.form-range');
    
    sliders.forEach(function(slider) {
      var rangeValue = slider.nextElementSibling;
      
      function updateValue() {
        var thumbWidth = 24; // Ukuran thumb slider
        var sliderWidth = slider.offsetWidth;
        var valuePosition = ((slider.value - slider.min) / (slider.max - slider.min)) * (sliderWidth - thumbWidth);
        
        rangeValue.textContent = slider.value;
        rangeValue.style.left = `calc(${valuePosition}px + ${thumbWidth / 2}px)`; 
      }
      
      slider.addEventListener('input', updateValue);
      
      // Set initial value to a specific position, e.g., 6
      slider.value = 6; // Set initial value
      updateValue(); // Update the label position
    });
  });
  

  