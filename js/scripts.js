window.addEventListener("load", function() {
  window.portfolioBody = document.body;
  window.iframeTheyalow = document.querySelector(".iframe_theyalow");
  window.iframeRepair = document.querySelector(".iframe_repair");
  window.iframeWrapper = document.querySelector(".iframe_wrapper");
  window.buttonsAll = document.querySelector(".portfolio-buttons");
  window.buttonToMobile = document.querySelector(
    ".portfolio__button-to-mobile"
  );
  window.buttonToDesktop = document.querySelector(
    ".portfolio__button-to-desktop"
  );
  window.buttonBack = document.querySelector(".portfolio__button-back");
});

function showTheyalow() {
  window.iframeTheyalow.style.width = "100%";
  if (window.innerWidth < 640) {
    window.buttonToMobile.style.display = "none";
  }
  window.iframeWrapper.style.display = "block";
  window.iframeTheyalow.style.display = "block";
  window.buttonsAll.style.display = "block";
  window.portfolioBody.classList.add("overflow-hidden");
}

function showRepair() {
  window.iframeRepair.style.width = "100%";
  if (window.innerWidth < 375) {
    window.buttonToMobile.style.display = "none";
  }
  window.iframeWrapper.style.display = "block";
  window.iframeRepair.style.display = "block";
  window.buttonsAll.style.display = "block";
  window.portfolioBody.classList.add("overflow-hidden");
}

function hideIframes() {
  window.iframeRepair.style.display = "none";
  window.iframeTheyalow.style.display = "none";
  window.buttonsAll.style.display = "none";
  window.buttonToMobile.style.display = "block";
  window.buttonToDesktop.style.display = "none";
  window.iframeWrapper.style.display = "none";
  window.portfolioBody.classList.remove("overflow-hidden");
}

function toMobile() {
  window.iframeTheyalow.style.width = "640px";
  window.iframeRepair.style.width = "375px";
  window.buttonToMobile.style.display = "none";
  window.buttonToDesktop.style.display = "block";
}

function toDesktop() {
  window.iframeTheyalow.style.width = "100%";
  window.iframeRepair.style.width = "100%";
  window.buttonToMobile.style.display = "block";
  window.buttonToDesktop.style.display = "none";
}
