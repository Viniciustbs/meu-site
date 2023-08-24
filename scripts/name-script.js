        // IsMobile pergunta ao navegador se o dispositivo é mobile ou móvel, de acordo com a resolução apresentada.
        //Se retornado mobile, apresenta a variável com o BR, se retornado desktop, apresenta a variável sem o BR.  
        var isMobile = window.orientation > -1; 
        if (isMobile)
            document.getElementById("identifier").innerHTML = 'Eu sou <br> <span id="span"></span>';
        else
            document.getElementById("identifier").innerHTML = 'Eu sou <span id="span"></span>';
            
        //A variável abaixo determina o nome apresentado após o "eu sou".
        var typed = new Typed("#span",{
            strings:["Vinicius Teixeira","Designer","Videomaker","Fotógrafo"],
            typeSpeed: 70,
            backSpeed: 60,
            loop: true
        });