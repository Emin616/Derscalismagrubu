document.getElementById("girisform").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("name").value.trim();
    const password = document.getElementById("password").value.trim();
    const alertBox = document.getElementById("alert-box");

    fetch("Derscalisma.json")
        .then(response => {
            if (!response.ok) throw new Error("JSON dosyası yüklenemedi");
            return response.json();
        })
        .then(data => {
            const kayitlar = data.kayitverileri;
            const kullanici = kayitlar.find(k => k.name === username && k.password === password);

            if (kullanici) {
                alertBox.className = "alert success";
                alertBox.textContent = "Giriş başarılı! Yönlendiriliyorsunuz...";
                alertBox.classList.remove("hidden");

                localStorage.setItem("oturum", JSON.stringify(kullanici));
                setTimeout(() => {
                    window.location.href = "Anasayfa.html";
                }, 1500);
            } else {
                alertBox.className = "alert error";
                alertBox.textContent = "Kullanıcı adı veya şifre hatalı!";
                alertBox.classList.remove("hidden");
            }
        })
        .catch(error => {
            console.error("Hata:", error);
            alertBox.className = "alert error";
            alertBox.textContent = "Bir hata oluştu. Lütfen tekrar deneyin.";
            alertBox.classList.remove("hidden");
        });
});

// Şifreyi göster/gizle butonu
document.getElementById("togglePassword").addEventListener("click", function () {
    const passwordInput = document.getElementById("password");
    const type = passwordInput.type === "password" ? "text" : "password";
    passwordInput.type = type;
});