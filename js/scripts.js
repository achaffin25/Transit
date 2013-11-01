$(document).ready(function(){
    
    $('h1').transition({
        x: '100px',
        y: '100px'
    
    });
    
    $('img').transition({ x: 100 })
  .transition({ y: 100 })
  .transition({ x: 200 })
  .transition({ y: 500 });

    
}); //document.ready end