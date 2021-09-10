"use strict";

const shareBtn = document.querySelector(".share-btn");

const shareLinks = document.querySelector(".share-links-container ");

shareBtn.addEventListener("click", function () {
  shareLinks.classList.toggle("hidden");
});
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    shareLinks.classList.add("hidden");
  }
});
