import { menu } from "./menu.js";
import { port } from "./port.js";
import { link } from "./link.js";
import { smooth } from "./smooth.js";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

window.addEventListener("load", function () {
  menu();
  port();
  link();
  smooth();
});

const bgm = document.getElementById("bgm");
const playButton = document.getElementById("playButton");
const pauseButton = document.getElementById("pauseButton");

playButton.addEventListener("click", () => {
  bgm.play();
});

pauseButton.addEventListener("click", () => {
  bgm.pause();
});

gsap.registerPlugin(ScrollTrigger);

gsap.from("#img1", {
  scrollTrigger: {
    trigger: "#visual",
    scrub: true,
    start: "top center",
    end: "bottom center",
  },
  y: -550,
});

gsap.from("#img4", {
  scrollTrigger: {
    trigger: "#visual",
    scrub: true,
    start: "top center",
    end: "bottom center",
  },
  x: 650,
});

gsap.from("#img5", {
  scrollTrigger: {
    trigger: "#visual",
    scrub: true,
    start: "top right",
    end: "bottom center",
  },
  x: -650,
});

const targets = gsap.utils.toArray(".split");

targets.forEach((target) => {
  let SplitClient = new SplitType(target, { type: "lines, words, chars" });
  let lines = SplitClient.lines;
  let words = SplitClient.words;
  let chars = SplitClient.chars;

  gsap.from(chars, {
    yPercent: 100,
    autoAlpha: 0,
    duration: 1,
    ease: "circ.out",
    stagger: {
      amount: 1,
      from: "random",
    },
    scrollTrigger: {
      trigger: target,
      start: "top bottom",
      end: "+=400",
      markers: false,
    },
  });
});

gsap.utils.toArray(".parallax__item__desc").forEach(item => {
  gsap.to(item, {
      yPercent: -100,
      ease: "none",
      duration: 0.5,
      scrollTrigger: {
          trigger: item,
          start: "top bottom", 
          end: "bottom top",
          scrub: 0.5
      },  
  });
});

