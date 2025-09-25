// Sayfa yüklendiğinde kontrol et
window.addEventListener("load", function () {
  const oturum = localStorage.getItem("oturum");

  if (!oturum) {
    alert("Lütfen giriş yapınız!");
    window.location.href = "index.html"; 
  } else {
    // Giriş yapılmışsa kullanıcıyı göster
    const kullanici = JSON.parse(oturum);
    document.getElementById("welcome").textContent = `Hoş geldin, ${kullanici.name}!`;
  }
});

// Çıkış butonu
document.getElementById("logoutBtn").addEventListener("click", function () {
  localStorage.removeItem("oturum");
  window.location.href = "index.html";
});
const fs = require('fs');

// JSON dosyasını oku
let rawData = fs.readFileSync('Derscalisma.json');
let data = JSON.parse(rawData);

// Veriyi değiştir
data.kayitverileri[0].password = "YeniSifre123";

// JSON dosyasına geri yaz
fs.writeFileSync('Derscalisma.json', JSON.stringify(data, null, 2));

alert("Şifre başarıyla güncellendi!");