var modal = document.getElementById("modal");


document.querySelector('button').addEventListener('click', function() {
  modal.style.display = "block";
  document.getElementById("modal-image").src = 'https://picsum.photos/300/200';
})

document.getElementsByClassName("close")[0].addEventListener('click', function() {
  modal.style.display = "none";
})