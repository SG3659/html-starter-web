document.addEventListener("DOMContentLoaded", function() {
   const images = [
     { "image": "a/images.png"},
     { "image": "a/images1.jpeg"},
     {"image": "a/images2.jpeg"},
     {"image": "a/images3.jpeg"},
     {"image": "a/images4.jpeg"},
     {"image": "a/images5.jpeg"},
     {"image": "a/images6.jpeg"},
     {"image": "a/images7.jpeg"},
     {"image": "a/images8.jpeg"},
     {"image": "a/images9.jpeg"},
     {"image": "a/images10.jpeg"},
     {"image": "a/images.png"},
     {"image": "a/images1.jpeg"},
     {"image": "a/images2.jpeg"},
     {"image": "a/images3.jpeg"},
     {"image": "a/images4.jpeg"},
     {"image": "a/images5.jpeg"},
     {"image": "a/images6.jpeg"},
     {"image": "a/images7.jpeg"},
     {"image": "a/images8.jpeg"},
     {"image": "a/images9.jpeg"},
     {"image": "a/images10.jpeg"},
     {"image": "a/images.png"},
     {"image": "a/images1.jpeg"},
     {"image": "a/images2.jpeg"},  
   ];

   const gallery = document.getElementById('gallery');

   images.forEach((image, index) => {
     const img = document.createElement('img');
     img.src = image.image;
     img.alt = `Image ${index + 1}`;
     img.loading = 'lazy';
     gallery.appendChild(img);
   });
 });