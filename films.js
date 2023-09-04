// Videos
var videos = document.querySelectorAll('.video-element');

// Fungsi untuk menghentikan semua video kecuali video yang sedang diputar
function stopOtherVideos(currentVideo) {
   videos.forEach(function (video) {
      if (video !== currentVideo) {
         video.pause();
      }
   });
}

// Tambahkan event listener untuk setiap video
videos.forEach(function (video) {
   video.addEventListener('play', function () {
      stopOtherVideos(video);
   });
});


