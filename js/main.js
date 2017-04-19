window.addEventListener("load", function(){

  var body = document.getElementsByTagName("body")[0];
  var docFrag = document.createDocumentFragment();
  var box = crear("div", "caja-1");

  box.appendChild(crear("div","caja2"));
  box.appendChild(crear("div","caja3","right"));
  box.appendChild(crear("div","caja3", "left"));
  box.appendChild(crear("div","caja4"));
  box.appendChild(crear("div","pelota","ball1"));
  box.appendChild(crear("div","pelota","ball2"));
  box.appendChild(crear("div","pelota","ball3"));
  var span = crear("span","caja5")
  span.textContent = "Laboratoria 2017- Made by Ana"
  box.appendChild(span);

  docFrag.appendChild(box);
  body.insertBefore(docFrag, body.childNodes[0]);
});

function crear(tag, clase, id){
  var elemento = document.createElement(tag);
      elemento.className = clase;
      if(id != ""){
        elemento.id = id;
      }
      return elemento;
}
