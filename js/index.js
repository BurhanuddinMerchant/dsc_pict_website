let showNav = true;
const onClickShow = () => {
  if (showNav) {
    document.getElementById("nav-ul").style.display = "flex";
  } else {
    document.getElementById("nav-ul").style.display = "none";
  }
  showNav = !showNav;
};
const handleResize = () => {
  if (window.innerWidth > 765) {
    document.getElementById("nav-ul").style.display = "flex";
    showNav = false;
  } else {
    document.getElementById("nav-ul").style.display = "none";
    showNav = true;
  }
};
