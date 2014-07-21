container = document.createElement("DIV");
container.style.visibility = "hidden";
container.style.position = "fixed";
container.style.bottom = 0;
container.style.right = 0;
container.style.zIndex = 99;
container.style.backgroundColor = "#CACACA";
container.style.borderTopLeftRadius = 5;
container.style.paddingBottom = 5;
container.style.paddingLeft = 5;
container.style.paddingRight = 5;
container.style.paddingTop = 5;
container.innerHTML = "Hello!";

document.body.appendChild(container);

function sizemattersMouseEvent(e) {
	if (e.srcElement.nodeName == "IMG" && e.altKey) {
		container.innerHTML = e.srcElement.width + "x" + e.srcElement.height;
		container.style.visibility = "visible";
	}
	
	else {
		container.style.visibility = "hidden";
	}
}


document.addEventListener("mousemove", sizemattersMouseEvent, false);