$(document).ready(function(){
	$(".first-block").mouseover(function(){
		console.log("мышь на элементе");
		var desc = document.querySelector(".first-block-description");
		if(desc.classList.contains("no-active")){
			console.log("no-active");
			desc.classList.remove("no-active");
			desc.classList.add("active");
		}
	});
	$(".first-block").mouseout(function(){
		console.log("мышь не на элементе");
		var desc = document.querySelector(".first-block-description");
		if(desc.classList.contains("active")){
			console.log("active");
			desc.classList.remove("active");
			desc.classList.add("no-active");
		}
	});

	$(".second-block").mouseover(function(){
		var desc = document.querySelector(".second-block-description");
		if(desc.classList.contains("no-active")){
			desc.classList.remove("no-active");
			desc.classList.add("active");
		}
	});
	$(".second-block").mouseout(function(){
		var desc = document.querySelector(".second-block-description");
		if(desc.classList.contains("active")){
			desc.classList.remove("active");
			desc.classList.add("no-active");
		}
	});

	$(".third-block").mouseover(function(){
		var desc = document.querySelector(".third-block-description");
		if(desc.classList.contains("no-active")){
			desc.classList.remove("no-active");
			desc.classList.add("active");
		}
	});
	$(".third-block").mouseout(function(){
		var desc = document.querySelector(".third-block-description");
		if(desc.classList.contains("active")){
			desc.classList.remove("active");
			desc.classList.add("no-active");
		}
	});

	$(".fourth-block").mouseover(function(){
		var desc = document.querySelector(".fourth-block-description");
		if(desc.classList.contains("no-active")){
			desc.classList.remove("no-active");
			desc.classList.add("active");
		}
	});
	$(".fourth-block").mouseout(function(){
		var desc = document.querySelector(".fourth-block-description");
		if(desc.classList.contains("active")){
			desc.classList.remove("active");
			desc.classList.add("no-active");
		}
	});

	$(".fifth-block").mouseover(function(){
		var desc = document.querySelector(".fifth-block-description");
		if(desc.classList.contains("no-active")){
			desc.classList.remove("no-active");
			desc.classList.add("active");
		}
	});
	$(".fifth-block").mouseout(function(){
		var desc = document.querySelector(".fifth-block-description");
		if(desc.classList.contains("active")){
			desc.classList.remove("active");
			desc.classList.add("no-active");
		}
	});

	$(".sixth-block").mouseover(function(){
		var desc = document.querySelector(".sixth-block-description");
		if(desc.classList.contains("no-active")){
			desc.classList.remove("no-active");
			desc.classList.add("active");
		}
	});
	$(".sixth-block").mouseout(function(){
		var desc = document.querySelector(".sixth-block-description");
		if(desc.classList.contains("active")){
			desc.classList.remove("active");
			desc.classList.add("no-active");
		}
	});
});