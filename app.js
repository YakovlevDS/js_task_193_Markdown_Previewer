let $editor = document.getElementById("editor"),
  $preview = document.getElementById("preview");

function update() {
  $preview.innerHTML = marked($editor.value);
}

$editor.addEventListener("keyup", update);

window.onload = update;