function initCanliDestek() {
  const input = document.getElementById("userInput");
  const chatBox = document.getElementById("chat-messages");

  input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      sendMessage();
    }
  });

  window.sendMessage = function () {
    const message = input.value.trim();
    if (!message) return;

    const userMessage = document.createElement("div");
    userMessage.className = "canlidestek-message canlidestek-user";
    userMessage.textContent = message;
    chatBox.appendChild(userMessage);
    input.value = "";

    setTimeout(() => {
      const botMessage = document.createElement("div");
      botMessage.className = "canlidestek-message canlidestek-bot";
      botMessage.textContent = generateSmartResponse(message);
      chatBox.appendChild(botMessage);
      chatBox.scrollTop = chatBox.scrollHeight;
    }, 600);
  }

  function generateSmartResponse(message) {
    const lower = message.toLowerCase();

    if (lower.includes("kargo")) {
      return "Kargolarımız genellikle 2-3 iş günü içerisinde teslim edilmektedir.";
    } else if (lower.includes("iade")) {
      return "İade sürecimiz 14 gün içerisinde gerçekleşmektedir.";
    } else if (lower.includes("ürün")) {
      return "Ürünle ilgili bilgi verirseniz daha iyi yardımcı olabilirim.";
    } else if (lower.includes("fiyat") || lower.includes("ücret")) {
      return "Fiyatlarımız ürün özelliklerine göre değişmektedir.";
    } else if (lower.includes("teşekkür") || lower.includes("sağol")) {
      return "Rica ederim, memnuniyetle yardımcı olurum!";
    } else if (lower.includes("merhaba") || lower.includes("selam")) {
      return "Merhaba! Size nasıl yardımcı olabilirim?";
    } else {
      const genelCevaplar = [
        "Bu konuda daha fazla bilgi verebilir misiniz?",
        "Sorunuzu inceliyorum, lütfen bekleyin...",
        "Size en kısa sürede dönüş yapılacaktır.",
        "Elimden geldiğince yardımcı olacağım.",
        "Sorununuzla ilgileniyoruz. Lütfen birkaç saniye bekleyin..."
      ];
      return genelCevaplar[Math.floor(Math.random() * genelCevaplar.length)];
    }
  }
}

// Model serisi detaylarını gösteren fonksiyon
function initModeller() {
  // Tüm detay div'lerini seç
  const allDetails = document.querySelectorAll('.modeller_details');
  
  // Hepsinin aktif sınıfını kaldır
  allDetails.forEach(detail => detail.classList.remove('active'));
  
  // Tıklanan modelin detay div'ine 'active' sınıfını ekle
  document.getElementById(id).classList.add('active');
  
  // Sayfanın üst kısmına kaydırarak ilgili detaya odaklan
  window.scrollTo({ 
    top: document.getElementById(id).offsetTop - 100, 
    behavior: 'smooth' 
  });
}

// Sayfa yüklendiğinde tüm detayların gizli olduğunu kontrol et
document.addEventListener('DOMContentLoaded', () => {
  const allDetails = document.querySelectorAll('.modeller_details');
  
  // İlk başta hiçbir detay görünmesin
  allDetails.forEach(detail => detail.classList.remove('active'));
});

