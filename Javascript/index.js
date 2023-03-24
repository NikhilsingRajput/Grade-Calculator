const English = document.getElementsByTagName("input")[0];
const Math = document.getElementsByTagName("input")[1];
const Physics = document.getElementsByTagName("input")[2];
const Chemistry = document.getElementsByTagName("input")[3];
const Computer = document.getElementsByTagName("input")[4];
const btn = document.getElementsByTagName("button")[0];



btn.addEventListener("click", (e)=>{
    e.preventDefault();
    
    if(English.value > 100 || Math.value > 100 || Physics.value > 100 || Chemistry.value > 100 || Computer.value > 100){
        alert("please enter marks in range of 100");
        
    }else{
        let total = Number(English.value) + Number(Math.value) + Number(Physics.value) + Number( Chemistry.value) + Number(Computer.value);
        let Average = (total / 500)*100;
        Average = parseFloat(Average).toFixed(2)
          if(Average > 90){
           const ave = document.getElementById('grad');
           ave.innerText = "You Got A Grade"
          }else if(Average > 80){
            const ave = document.getElementById('grad');
            ave.innerText = "You Got B Grade"
           }
           else if(Average > 70){
            const ave = document.getElementById('grad');
            ave.innerText = "You Got C Grade"
           }
           else if(Average > 60){
            const ave = document.getElementById('grad');
            ave.innerText = "You Got D Grade"
           }else if(Average < 60){
            const ave = document.getElementById('grad');
            ave.innerText = "You Got F Grade"
           }

           const Averagedisplay = document.getElementById('average');
           const Totalsum = document.getElementById('totals');

           Averagedisplay.innerText = ` Your Average Marks are : ${Average}`
           Totalsum.innerText = `Totol Marks : ${total}`


    }

})