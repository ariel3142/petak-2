const dataToga = {
    terong: {
        title: "Terong",
        text: "Terong bermanfaat untuk menjaga kesehatan jantung, membantu pencernaan, dan kaya antioksidan. Daunnya juga sering dimanfaatkan sebagai obat tradisional."
    },
    kemangi: {
        title: "Kemangi",
        text: "Kemangi berfungsi untuk mengurangi bau badan, melancarkan pencernaan, serta memiliki sifat antibakteri dan antiinflamasi."
    }
};

function goDetail(tanaman) {
    window.location.href = "detail.html?tanaman=" + tanaman;
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}
