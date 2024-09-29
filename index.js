function clicou() {
  let horas = Number(prompt("que horas são ?"));
  let msg = document.getElementById("msg");
  let img = document.getElementById("photo");

  if (horas < 12) {
    img.src = "fotos/fotodamanhã.jpeg";
    msg.innerText = `agora são ${horas} da manhã`;
    document.body.style.backgroundColor = "bisque";
  } else if (horas < 18) {
    img.src = "fotos/fotodatarde.jpeg";
    msg.innerText = `agora são ${horas} da tarde`;
    document.body.style.backgroundColor = "darkorange";
  } else if (horas < 24) {
    img.src = "fotos/fotodanoite.jpeg";
    msg.innerText = `agora são ${horas} da noite`;
    document.body.style.backgroundColor = "slategray";
  } else {
    alert("tente novamente, apenas números cheios ex: 20");
  }
}
