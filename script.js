const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElement = document.querySelectorAll('.hidden');
hiddenElement.forEach((el) => observer.observe(el));

const sliderScroll = document.getElementsByClassName("all-card");
const mCardImg = document.createElement("img");
const mCardTitle = document.createElement("h2");

// mengambil data dari json

fetch('member.json')
.then(response => response.json())
.then(jsonData => {
    // Menampilkan informasi siswa ke dalam console dengan forEach
    jsonData.siswa.forEach(siswa => {
        alert(`Nama: ${siswa.NAMA}`);
        console.log(`Tanggal Lahir: ${siswa.TTL}`);
        console.log(`NISN: ${siswa.NISN}`);
        console.log("---------------");
    });
})
.catch(error => console.error('Error fetching data:', error));

 