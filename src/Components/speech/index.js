import El from "../../utils/EL";
import "./style.css";

const  speechText =()=>{
const textEl = El ({
    element:'div',
    className:'cadr voiceinator flex item-center  ',
    style:'border:2px solid #cccc;border-radius:15px;padding:15px; margin-top:100px;margin-left:100px;width:800px;text-align: center;',
    children:[
  El({
 element:'h1',
 className:' flex item-center ',
 style:'font-size:28px;padding:15px; font-weight: bold;color:#3071A9;',
  innerText:'Convert Text To Speech',   
 }),
 El({
    element:'select',
    name:'voice',
    className:'p-5 ' ,
    style:'border:2px solid #3071A9;border-radius:4px;margin:10px; padding:5px ',
    id:"voices",
}),
El({
    element:'br',
}),El({
    element:'label',
    for:'rate',
    innerText:"Rate:",
 }),
El({
   element:'input',
   name:'rate',
   type:'range',
   min:'0',
   max:'5',
   value:'1',
   step:'0.1',
   style:'border:solid 2px black;border-radius:4px;margin:20px;width:400px',
}),
El({
    element:'br',
}),
El({
    element:'label',
    for:'pitch',
    innerText:'Pitch:',
 }),
 El({
    element:'input',
    name:'pitch',
    type:'range',
    min:'0',
    max:'2',
    step:'0.1',
    style:'border:solid 2px black;border-radius:4px;margin:20px;width:400px',
 }),
 El({
   element:'br',
}),
 El({
    element:'textarea',
    name:'text',
    placeholder:'type something here!',
    className:'',
    style:'border:solid 2px black;border-radius:4px;width:500px;margin:20px;padding:7px',
   
 }),
 El({
   element:'br',
}),
El({
    element:'button',
    id:'stop',
    innerText:'Stop',
    className:'button1',
    style:''
 }),
 El({
    element:'button',
    id:'speack',
    className:'button1',
    innerText:'Speack'
 }),
]   

})
return textEl;
}






export default speechText;