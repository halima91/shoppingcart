   function plus(i){
    let x=parseInt(document.getElementById("nbr"+i).value);
    x++;
         document.getElementById("nbr"+i).value=x;
        
       let price=parseInt(document.getElementById("prix_unit"+i).textContent);
       let val=x*price;
        document.getElementById("prix"+i).innerHTML=(String(val))
        let prixf1=parseInt(document.getElementById("prix1").textContent);
        let prixf2=parseInt(document.getElementById("prix2").textContent);
       let prixf3=parseInt(document.getElementById("prix3").textContent);
       let totalf= prixf1  + prixf2 + prixf3;
        document.getElementById("totala").innerHTML= (String(totalf)+'DT');
      
   }
   function min(i){
       let x=parseInt(document.getElementById("nbr"+i).value);
       x--;
       if(x<0) x=0;
       document.getElementById("nbr"+i).value=x;
       
       let price=parseInt(document.getElementById("prix_unit"+i).textContent);
       let val=x*price;
        document.getElementById("prix"+i).innerHTML=(String(val))
        let prixf1=parseInt(document.getElementById("prix1").textContent);
        let prixf2=parseInt(document.getElementById("prix2").textContent);
       let prixf3=parseInt(document.getElementById("prix3").textContent);
       let totalf= prixf1  + prixf2 + prixf3;
        document.getElementById("totala").innerHTML= (String(totalf)+'DT');
      
      }
      function myFunction(i){
     document.getElementById("item"+i).remove();

      }
      function likeFunction(i){
        document.getElementById("likebtn"+i).style.color="#ff0000";
      }