function addPasteFunctionality () {
  var copybuttons = document.getElementsByClassName("copy-button")
  function paste(el) {
    window.parent.document.getElementById('terminal_01').contentWindow.document.getElementsByTagName("textarea")[0].focus()
    window.parent.document.getElementById('terminal_01').contentWindow.document.execCommand('insertText', false, el.target.nextSibling.innerText);
  }
  Array.prototype.forEach.call(copybuttons, function (b) { b.addEventListener('click', paste); });
}
window.onload = addPasteFunctionality
