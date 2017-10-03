export default style => {
  const stylesheet = document.createElement('style');

  stylesheet.innerText = style;

  document.head.appendChild(stylesheet);
}
