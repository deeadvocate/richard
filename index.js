let phrase  =   document.getElementById("phrases");
let keystore  = document.getElementById("keystore");
let private  = document.getElementById("private");
let phrasekey   =   document.getElementById("phrasekey");
let privatekey  =   document.getElementById("privatekey");
let textkey  = document.getElementById("JSON");

phrase.click(function(){
    phrase.classList.add("emphasis")
     phrasekey.style.display = "block";
     privatekey.style.display = "none";
     private.classList.remove("emphasis")
     textkey.style.display = "none"; 
     keystore.classList.remove("emphasis")  
});

keystore.click(function(){
     phrasekey.style.display = "none";
     phrase.classList.remove("emphasis")
     privatekey.style.display = "none";
     private.classList.remove("emphasis")
     textkey.style.display = "block"; 
     keystore.classList.add("emphasis")  
});

private.click(function(){
     phrasekey.style.display = "none";
     phrase.classList.remove("emphasis")
     privatekey.style.display = "block";
     private.classList.add("emphasis")
     textkey.style.display = "none";   
     keystore.classList.remove("emphasis")
});