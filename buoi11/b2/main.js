function changeImage() {
    let url = document.getElementById("url").value;
    let width = document.getElementById("width").value + "px";
    let height = document.getElementById("height").value + "px";
    let borderRadius = document.getElementById("border-radius").value + "px";
    let alt = document.getElementById("alt").value;

    let image = document.getElementById("image");
    image.src = url;
    image.style.width = width;
    image.style.height = height;
    image.style.borderRadius = borderRadius;
    image.alt = alt;
  }