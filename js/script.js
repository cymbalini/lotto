'use strict'
const btn=document.querySelector('button')
const out=document.querySelector('#out')
btn.addEventListener('click',()=>{
        out.innerHTML=''
        let y=6
        const array =[]
        for(let i =0;i<y;i++){
        let licz = Math.floor(Math.random() * 30)
                            out.innerHTML+=`<div class='ball'>${licz}</div>`
                array.push(licz)
        }
        
})



// const btn=document.querySelector('button')
// const out=document.querySelector('#out')

// const addElement=(elem,num)=>{
//     const elem = document.createElement(elem)
//     elem.textContent=num
//     out.appendChild(elem)
// }
// btn.addEventListener('click',()=>{
//     const i =6
//     out.innerText=''
//     const max=42
//     const tabnumbers=[]
//     const tabfinnumb=[]
    // for(let ind=0;ind=i;ind++){
//  console.log(ind)
    // }else{

    // }
// })