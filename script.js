"use strict";

const shareBtn = document.querySelector(".share-btn");

const shareLinks = document.querySelector(".share-links-container ");

///Toggle Share Button
shareBtn.addEventListener("click", function () {
  shareLinks.classList.toggle("hidden");
});

/// Press ESC to Close Share link container
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    shareLinks.classList.add("hidden");
  }
});
