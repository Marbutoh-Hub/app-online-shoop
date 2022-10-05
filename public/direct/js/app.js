const touch = document.querySelector(".bi");
const menu = document.querySelector(".menu");
const btnclosesidebar = document.querySelector(".btn-close");
const sidebar = document.querySelector(".sidebar");
const sidebarclick = document.querySelector(".sidebarclick");
const drawerinstagram = document.querySelector(".drawer-instagram");
const iconInstagram = document.querySelector(".icon-instagram");
const iconShopee = document.querySelector(".icon-shopee");
const labelInstagram = document.querySelector(".label-instagram");
const labelShopee = document.querySelector(".label-shopee");
const drawerShoopee = document.querySelector(".drawer-shopee");
const followme = document.querySelector(".fm");
const btnLogin = document.querySelector(".login");
const btnCloseFormLogin = document.querySelector(".form-close-login");
const sosmed = document.querySelector(".sosmed");
const btnProduct = document.querySelector("#product");
const btnCloseFormProduct = document.querySelector(".form-close-product");
const RegisterButton = document.querySelector("#button_registrasi");
const cardLogin = document.querySelector("#card_login");
const labelLogin = document.querySelector("#label_login");
const formLogin = document.querySelector("#form_login");
const cardRegistrasi = document.querySelector("#card_registrasi ");
const labelRegistrasi = document.querySelector("#label_registrasi ");
const formRegistrasi = document.querySelector("#form_registrasi ");
const backLogin = document.querySelector(".back_login");
const menuAbout = document.querySelector("#menu_about");
const search = document.querySelector(".search");
const iconSearch = document.querySelector(".iconsearch");
const thumbnail = document.querySelector(".thumbnail");
const about = document.querySelector(".about");
const closeAbout = document.querySelector(".close-about");

touch.addEventListener("click", function () {
  touch.classList.add("none");
});

menu.addEventListener("click", function () {
  touch.classList.add("none");
  sidebar.classList.replace("sidebar", "sidebarclick");
  menuAbout.style.display = "none";
});

btnclosesidebar.addEventListener("click", function (e) {
  touch.classList.replace("none", "renone");
  sidebar.classList.replace("sidebarclick", "sidebar");
  menuAbout.style.display = "block";
});

drawerinstagram.addEventListener("mouseenter", function () {
  iconInstagram.style.transition = "0.5s";
  iconInstagram.style.marginTop = "-15px";
  followme.style.transition = "0.5s";
  followme.style.marginTop = "-15px";
  drawerShoopee.style.marginLeft = "280px";
  drawerShoopee.style.transition = "0.5s";
  iconShopee.style.marginTop = "-15px";
  labelInstagram.style.display = "block";
  labelInstagram.style.transition = "0.5s";
  labelInstagram.style.marginTop = "-12px";
  labelInstagram.style.opacity = "1";
});

drawerinstagram.addEventListener("mouseleave", function () {
  iconInstagram.style.marginTop = null;
  labelInstagram.style.marginTop = "100px";
  labelInstagram.style.opacity = null;
  drawerShoopee.style.marginLeft = null;
  drawerShoopee.style.transition = "0.5s";
  followme.style.transition = "0.5s";
  followme.style.marginTop = null;
  iconShopee.style.marginTop = null;
  labelShopee.style.display = "none";
});

drawerShoopee.addEventListener("mouseenter", function () {
  drawerShoopee.style.transition = "0.5s";
  drawerShoopee.style.marginLeft = "105px";
  iconInstagram.style.marginTop = "-122px";
  labelShopee.style.display = "block";
  labelShopee.style.transition = "0.5s";
  labelShopee.style.marginTop = "-4px";
  labelShopee.style.marginLeft = "68px";
  labelShopee.style.opacity = "1";
  followme.style.transition = "0.5s";
  followme.style.marginTop = "-15px";
});

drawerShoopee.addEventListener("mouseleave", function () {
  drawerShoopee.style.transition = "0.5s";
  drawerShoopee.style.marginLeft = null;
  iconInstagram.style.marginTop = null;
  labelShopee.style.marginTop = "100px";
  labelShopee.style.opacity = null;
  followme.style.marginTop = null;
  labelShopee.style.display = "none";
});

// js login
btnLogin.addEventListener("click", function () {
  sidebar.style.transition = "1s";
  sidebar.style.display = "none";
  sosmed.style.transition = "1s";
  sosmed.style.display = "none";
});

btnCloseFormLogin.addEventListener("click", function () {
  sidebar.style.transition = "1s";
  sidebar.style.display = null;
  sosmed.style.transition = "1s";
  sosmed.style.display = null;
});
// akhir js login

// js product
btnProduct.addEventListener("click", function () {
  sidebar.style.transition = "1s";
  sidebar.style.display = "none";
  sosmed.style.transition = "1s";
  sosmed.style.display = "none";
});

btnCloseFormProduct.addEventListener("click", function () {
  sidebar.style.transition = "1s";
  sidebar.style.display = null;
  sosmed.style.transition = "1s";
  sosmed.style.display = null;
});

RegisterButton.addEventListener("click", function (e) {
  e.preventDefault();
  labelLogin.style.display = "none";
  cardLogin.style.display = "none";
  formLogin.style.display = "none";
  labelRegistrasi.style.display = "block";
  cardRegistrasi.style.display = "block";
  formRegistrasi.style.display = "block";
});

backLogin.addEventListener("click", function () {
  labelRegistrasi.style.display = "none";
  cardRegistrasi.style.display = "none";
  formRegistrasi.style.display = "none";
  labelLogin.style.display = "block";
  cardLogin.style.display = "block";
  formLogin.style.display = "block";
  type;
});

menuAbout.addEventListener("click", function () {
  about.style.transition = "1s";
  about.style.display = "block";
  sosmed.style.display = "none";
  menu.style.display = "none";
  search.style.display = "none";
  iconSearch.style.display = "none";
  thumbnail.style.display = "none";
});

closeAbout.addEventListener("click", function () {
  about.style.transition = "1s";
  about.style.display = "none";
  sosmed.style.display = null;
  menu.style.display = null;
  search.style.display = null;
  iconSearch.style.display = null;
  thumbnail.style.display = null;
});

// akhir js product

// Beranda JS
// btnTotalCustomer = document.getElementById("total-customer");

// btnTotalCustomer.addEventListener("click", function () {
//   alert("bangsat");
// });

// Akhir Beranda Js
