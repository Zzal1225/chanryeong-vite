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


  gsap.from("#img1",{
    scrollTrigger:{
      trigger: "#visual",
      scrub:true,
      start: "top center",
      end: "bottom center",
    },
    y: -550,
  })

  gsap.from("#img4",{
    scrollTrigger:{
      trigger: "#visual",
      scrub:true,
      start: "top center",
      end: "bottom center",
    },
    x: 650,
  })

  gsap.from("#img5",{
    scrollTrigger:{
      trigger: "#visual",
      scrub: true,
      start: "top right",
      end: "bottom center",
    },
    x: -650,
  })
