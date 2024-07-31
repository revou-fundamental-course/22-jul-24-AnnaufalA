let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// validasi from contact us
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman formulir

    // Ambil nilai dari form
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let interest = document.getElementById('interest').value;

    // Validasi sederhana
    if (name === '' || email === '' || interest === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Log data ke console (bisa diganti dengan pengiriman data ke server)
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Interest:', interest);

    // Anda bisa menambahkan pengiriman data ke server di sini

    // Tampilkan pesan sukses
    alert('Form submitted successfully!');
});
