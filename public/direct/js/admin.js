const btnNotif = document.querySelector("#btnNotif");
const btnOptions = document.querySelector(".btnOptions");
const notif = document.querySelector(".notif");
const options = document.querySelector(".options");
const cardInfo = document.querySelector(".card_info");

btnNotif.addEventListener("click", function () {
  if (notif.style.display === "none") {
    notif.style.display = "block";
    notif.style.zIndex = "3";
    cardInfo.style.zIndex = "-1";
  } else {
    notif.style.display = "none";
  }
});

btnOptions.addEventListener("click", function () {
  if (options.style.display === "none") {
    options.style.display = "block";
    cardInfo.style.zIndex = "-1";
  } else {
    options.style.display = "none";
  }
});
