function toggleDrawer(elem) {
  let drawer = document.querySelector(elem);

  drawer.hasAttribute('open')
  ? drawer.removeAttribute("open")
  : (drawer.removeAttribute("open"),
    drawer.setAttribute("open", true))
}
