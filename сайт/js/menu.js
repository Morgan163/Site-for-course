var menu_list;
function menuFunction(){
	menu_list  = document.querySelector(".menu-list-block");
	console.log(menu_list)
	if(menu_list.classList.contains("active")){
		menu_list.classList.remove("active");
	}else{
		menu_list.classList.add("active");
	}
}