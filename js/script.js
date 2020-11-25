window.scrollBy({
    top: 1, // could be negative value
    left: 0,
    behavior: 'smooth'
  });
  var arrow = document.getElementById("arrow");
  var sentence_container = document.getElementById("sentence-container");
  arrow.addEventListener('click', ()=>{
    sentence_container.scrollIntoView({behavior: "smooth", block: "start"});
  })
