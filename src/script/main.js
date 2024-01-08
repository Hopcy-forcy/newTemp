const menu = document.querySelectorAll("menu>ul>li");

for(const element of menu ){
   element.addEventListener("click", () => {
      for ( const items of menu ){
         items.classList.remove("active")
      }
      element.classList.add("active");
   })
}

const changeClass = ({id,oldName,newName}) =>{
   const element = document.getElementById(id);
   element.classList.contains(oldName) &&
   element.classList.replace(oldName,newName);  
   console.log(element);
}
const showTab =({id})=>{
   const tab = document.getElementById(id);
   const tabView = document.querySelectorAll("#tabView section");
   for ( const items of tabView ) {
      items.classList.replace("active","hidden");
   }
   tab.classList.replace("hidden", "active" )
   changeClass({id:'sideBar', newName:'-left-[100vw]',oldName:'left-0'})

}