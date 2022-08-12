document.title = "ToDo List without localStorage";

let mainInput = document.querySelector('.mainInput');
let addText = document.querySelector('.addText');
let form2 = document.querySelector('.form2');
mainInput.focus();
let arr = [];

let xul = document.createElement("ul");
addText.addEventListener('click', function() {

    if(mainInput.value.trim() !== ""){

    let xli = document.createElement("li");
    let xH3 = document.createElement("h3");
    xH3.innerHTML = `${mainInput.value}`;
    let xDiv = document.createElement("div");
    xDiv.classList.add("xDiv");

    let xDel = document.createElement("button");
    xDel.classList.add("deleteText");
    xDel.innerHTML = "Delete"
    xDel.addEventListener("click",function(){
        xli.remove();
    })

    let xEdit = document.createElement("button");
    xEdit.classList.add("xEdit");
    xEdit.innerHTML = "Edit";
    xEdit.addEventListener("click", function() {
        xli.classList.add('active');//
        mainInput.focus();
        mainInput.value = xH3.innerHTML ;

            let xSave = document.createElement("button");
            xSave.classList.add("xSave");
            xSave.innerHTML = "Save";
            xSave.addEventListener("click", function() {
                xH3.innerHTML = mainInput.value;
                xSave.remove();
                xli.classList.remove('active');//
                mainInput.value = "";
            })
            xDiv.appendChild(xSave);

    });

        xli.appendChild(xH3);
        xDiv.appendChild(xDel);
        xDiv.appendChild(xEdit);
        xli.appendChild(xDiv);
        xul.appendChild(xli);        
        mainInput.focus();
        arr.push(xul);
        mainInput.value = "";
    }
    })

form2.appendChild(xul);

mainInput.addEventListener('keydown', function(e) {
    if(e.keyCode === 13){
        addText.click();
    }});

    if (xul.innerHTML === ""){
        form2.style.padding = 0;
    }

    mainInput.addEventListener("blur", function() {
        mainInput.style.border = 5 +"px solid #ccc";
        mainInput.style.transition = "all 0.5s";
    })
    mainInput.addEventListener("focus", function() {
        mainInput.style.border = 5 +"px solid #7b6fcf";
        mainInput.style.transition = "all 0.5s";
    }
    )
