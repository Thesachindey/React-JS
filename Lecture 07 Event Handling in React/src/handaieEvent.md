## NOTE:event handaleing-y sob somy function likty hoy, like: ()=>alert("any thing");
## function na likly like: alert("any thing"); aytaky emediate invocation boly. aykhytry event kaj kory na.
### same way-
- kokhono "Functions passed to event handlers must be passed, not called".
                
## Example: 
                 
                 function handaleClick(){
                    aleart('The button was clicked');
                 }
---                 
                 <button onClick={handaleClick}> //correct
                 click me
                 </button>
                 // aikhany function "pass" kora hoycy onClick={handaleClick}  -y jyno button click-y aleart msg asy.
---                  
                 <button onClick={handaleClick()}> click me </button> //wrong;
                 // NOTE:aikhany function invock kora hoycy; tai without button click function kaz korby.
                 
                  

---

### event:
- e.preventDefult
- e.stopPropagation
