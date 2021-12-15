var vidas = 3;
var validate = 0;

function onDragStart(event) {
  event
    .dataTransfer
    .setData('text/plain', event.target.id);
  event
    .currentTarget
    .style
    .backgroundColor = 'white';
}
function onDrop(event) {
  const id = event
    .dataTransfer
    .getData('text');
    const draggableElement = document.getElementById(id);
    console.log(draggableElement)
    console.log(event.target.id)
    if((draggableElement.id == "draggable-2" && event.target.id == "a")||(draggableElement.id == "draggable-3" && event.target.id == "c")||(draggableElement.id == "draggable-1" && event.target.id == "b")){
      if(draggableElement.id == "draggable-1" && event.target.id == "b"){
        document.getElementById("draggable-1").style.marginLeft = '-21px';
        document.getElementById("draggable-1").style.marginTop = '0px';
      }
      if(draggableElement.id == "draggable-3" && event.target.id == "c"){
        document.getElementById("draggable-3").style.marginLeft = '-21px';
        document.getElementById("draggable-3").style.marginTop = '0px';
      }
      if (draggableElement.id == "draggable-2" && event.target.id == "a"){
        document.getElementById("draggable-2").style.marginLeft = '-21px';
        document.getElementById("draggable-2").style.marginTop = '0px';
      }
      if(event){
        validate = validate +1
      }
      const dropzone = event.target;
      dropzone.appendChild(draggableElement);
    }
    else{
      vidas = vidas-1;
      alert("Ups cuidado te quedan "+vidas+" vidas.")
    }
    if(vidas == 0){
      alert("Game Over");
      window.location.href = './prueba.html';
    }
    if(validate == 3){
      alert("FELICIDADES!!!! TERMNASTE EL JUEGO!!!");
      window.location.href = './prueba.html';
    }
    event
    .dataTransfer
    .clearData();
}
function onDragOver(event) {
  event.preventDefault();
}
