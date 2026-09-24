document.addEventListener('DOMContentLoaded', function () {
  var videos = Array.from(document.querySelectorAll('.result-video'));

  videos.forEach(function (video) {
    video.muted = true;
  });

  if (!('IntersectionObserver' in window)) return;

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      var video = entry.target;
      if (entry.isIntersecting) {
        video.play().catch(function () {});
      } else {
        video.pause();
      }
    });
  }, { threshold: 0.55 });

  videos.forEach(function (video) {
    observer.observe(video);
  });

  document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
      videos.forEach(function (video) { video.pause(); });
    }
  });
});
