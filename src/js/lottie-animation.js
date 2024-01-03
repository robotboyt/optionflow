var internet_a = lottie.loadAnimation({
  container: document.getElementById("internet-banner"), // the dom element that will contain the animation
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "../animation/internet-banner.json", // the path to the animation json
});
var internet_b = lottie.loadAnimation({
  container: document.getElementById("internet-anim-01"), // the dom element that will contain the animation
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "../animation/internet-anim-01.json", // the path to the animation json
});
var internet_c = lottie.loadAnimation({
  container: document.getElementById("internet-anim-02"), // the dom element that will contain the animation
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "../animation/internet-anim-02.json", // the path to the animation json
});

internet_a.addEventListener("complete", function () {
  internet_a.destroy();
});

internet_b.addEventListener("complete", function () {
  internet_b.destroy();
});

internet_c.addEventListener("complete", function () {
  internet_c.destroy();
});
