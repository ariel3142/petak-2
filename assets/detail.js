const dataToga = {
    terong: {
        nama: "Temu Kunci",
        latin: "Boesenbergia pandurata",
        gambar: "assets/img/temu-kunci.jpg",
        deskripsi: [
            "Temu kunci atau Boesenbergia pandurata adalah tanaman semak yang berumur tahunan. Tanaman ini termasuk ke dalam rempah-rempah yang kaya manfaat, biasa digunakan sebagai obat tradisional dan bumbu penyedap makanan.",
            "Tanaman temu kunci memiliki rimpang yang berbentuk seperti jahe, dengan kulit berwarna coklat muda dan daging berwarna putih kekuningan. Daunnya berbentuk lonjong dengan tepi yang bergerigi.",
            "Selain digunakan dalam masakan, temu kunci juga dikenal memiliki berbagai khasiat kesehatan berkat kandungan senyawa bioaktifnya."
        ],
        manfaat: [
            "Sebagai penangkal masuk angin",
            "Meluruhkan dahak",
            "Merangsang keluarnya gas pada tubuh",
            "Menghilangkan lendir yang menyumbat",
            "Pereda panas dalam",
            "Penambah stamina tubuh"
        ]
    },
};


const params = new URLSearchParams(window.location.search);
const tanaman = params.get("tanaman");

if (dataToga[tanaman]) {
    document.getElementById("namaTanaman").innerText = dataToga[tanaman].nama;
    document.getElementById("latinTanaman").innerText = dataToga[tanaman].latin;
    document.getElementById("gambarTanaman").src = dataToga[tanaman].gambar;
    const deskripsiContainer = document.getElementById("deskripsiTanaman");
    deskripsiContainer.innerHTML = "";

    dataToga[tanaman].deskripsi.forEach(paragraf => {
        const p = document.createElement("p");
        p.textContent = paragraf;
        deskripsiContainer.appendChild(p);
    });

    const manfaatList = document.getElementById("manfaatTanaman");
    dataToga[tanaman].manfaat.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        manfaatList.appendChild(li);
    });
}

function goBack() {
    window.history.back();
}
