const grid=document.querySelector(".container");
const button=document.querySelector(".size");

let size=16;
function makeGrid(r,c){
    
    for(let i=0;i<r;i++){
        const col=document.createElement("div");
        for(let j=0;j<c;j++){
            const div=document.createElement("div");
            col.appendChild(div);
            div.className="element";
        }
        col.className="col";
        grid.appendChild(col);
       
    }
    
   
}

makeGrid(size,size);

button.addEventListener("click",()=>{

    grid.replaceChildren();
    size=prompt("Enter size of grid(MAX 100)");
    makeGrid(size,size);
})


