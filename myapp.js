
    function store()
            {    

                
                var one=document.getElementById("name").value;
                var table=document.getElementById("table");
                var two=document.getElementById("phone").value;
                var count= document.getElementsByTagName('input');
                if( two=="")
                {
                    return false;
                }
                var row=document.createElement("tr");
                var data1=document.createElement("td");
                var data2=document.createElement("td");
                var button=document.createElement("button");
                button.setAttribute("class","btn");
                var text = document.createTextNode("delete");       
                button.appendChild(text); 

                data1.innerHTML=one;
                data2.innerHTML=two;
                var store=document.getElementById("store");
                row.appendChild(data1);
                row.appendChild(data2);
                row.appendChild(button);
                table.appendChild(row);
                button.addEventListener("click", del);
                 document.getElementById("form").reset();

            document.getElementById("showbutton").style.display="block"
            document.getElementById('form').style.display='none';
            document.getElementById('mybackbutton').style.display='none';
            document.getElementById('table').style.display='table';
            document.getElementById('databinding2').style.display='none';
            document.getElementById('databinding').style.display='none';
             document.getElementById('printbox').innerHTML=null;
            document.getElementById('printbox2').innerHTML=null;
             }    
            
            function del()
            {
                
                let deleteBtn = document.getElementsByClassName("btn");
                
                Array.prototype.slice.call(deleteBtn).forEach(function(item) {
                  
                      item.addEventListener("click", function(e) {
                                e.target.parentNode.remove()
                          });

                    })
            }

            function show()
        {   document.getElementById("showbutton").style.display="none"
            document.getElementById('form').style.display='block';
            document.getElementById('mybackbutton').style.display='block';
            document.getElementById('table').style.display='none';
             document.getElementById('databinding').style.display='block';
             document.getElementById('databinding2').style.display='block';
        }
        
        function showbutton()
        {   document.getElementById("showbutton").style.display="block"
            document.getElementById('form').style.display='none';
            document.getElementById('mybackbutton').style.display='none';
              document.getElementById('databinding').style.display='none';
             document.getElementById('databinding2').style.display='none';
            

        }

        var inputBox1 = document.getElementById('name');
            var inputBox2= document.getElementById('phone');
            inputBox1.onkeyup = function(){
                    document.getElementById('printbox').innerHTML = inputBox1.value;
                }
            inputBox2.onkeyup = function(){
                    document.getElementById('printbox2').innerHTML = inputBox2.value;
                }
            