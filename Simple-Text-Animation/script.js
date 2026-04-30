function breakTheText() {
  let h1 = document.querySelector("h1");
  let h1Text = h1.textContent;

  let splittedText = h1Text.split("");
  let halfText = Math.floor(splittedText.length / 2);

  let clutter = "";

  splittedText.forEach(function (elem, idx) {
    if (idx < halfText) {
      clutter += `<span class="a">${elem}</span>`;
    } else {
      clutter += `<span class="b">${elem}</span>`;
    }
  });

  h1.innerHTML = clutter;
}

breakTheText();

gsap.from("h1 .a", {
  y: 200,
  duration: 0.5,
  delay: 0.5,
  opacity: 0,
  stagger: 0.2,
});

gsap.from("h1 .b", {
  y: 200,
  duration: 0.5,
  delay: 0.5,
  opacity: 0,
  stagger: -0.2,
});