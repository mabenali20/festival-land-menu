// تفعيل مؤثرات الحركة عند النزول بالصفحة
AOS.init({
    duration: 800,
    once: true,
    offset: 50
});

// كود نافذة التكبير (Lightbox)
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const images = document.querySelectorAll(".zoomable");
const closeBtn = document.getElementsByClassName("close-modal")[0];

// فتح الصورة وتكبيرها عند الضغط عليها
images.forEach(img => {
    img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        document.body.style.overflow = "hidden"; // منع التمرير في الخلفية
    }
});

// إغلاق الصورة عند الضغط على (X)
closeBtn.onclick = function() {
    modal.style.display = "none";
    document.body.style.overflow = "auto"; 
}

// إغلاق الصورة عند الضغط في أي مكان فارغ بالشاشة
modal.onclick = function(e) {
    if (e.target === modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
}
