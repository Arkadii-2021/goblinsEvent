(()=>{"use strict";class e{constructor(){this.activecell=1}static makeCell(){const e=document.querySelector(".cell-game");for(let t=1;t<=16;t+=1){const l=document.createElement("div");l.id=`cell${t}`,l.classList="cell",e.appendChild(l)}}static getCell(e){return document.getElementById(`cell${e}`)}static deactivateCell(t){e.getCell(t).classList="cell"}static activatecell(t){e.getCell(t).classList.toggle("cell_has-goblin")}nextCell(){const t=()=>setTimeout((()=>{e.deactivateCell(this.activecell),this.activecell=Math.floor(1+16*Math.random()),e.activatecell(this.activecell),t()}),1e3);t()}}const t=new e,l=new class{constructor(){this.dead=document.getElementById("dead"),this.lost=document.getElementById("lost"),this.activeCell=document.getElementsByClassName("cell_has-goblin")}newCount(){this.dead.innerHTML=0,this.lost.innerHTML=0}onStart(e,t){e.innerHTML=parseInt(e.innerHTML,10)+1,5===parseInt(e.innerHTML,10)&&(alert(t),this.newCount())}hasGoblin(e){e.classList.contains("cell_has-goblin")?(this.activeCell[0].classList="cell",this.onStart(this.dead,"Победа!")):this.onStart(this.lost,"Вы проиграли!")}iterCell(){for(let e=1;e<=16;e+=1){const t=document.getElementById(`cell${e}`);t.onclick=()=>{this.hasGoblin(t)}}}};e.makeCell(),t.nextCell(),l.iterCell()})();