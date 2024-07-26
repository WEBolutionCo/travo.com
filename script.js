const menuItems = document.getElementById("MenuItems");
const menubtn = document.getElementById("menubtn");

menuItems.style.maxHeight = "0px";

const onmenu = () => {
    if (menuItems.style.maxHeight === "0px") {
        menuItems.style.maxHeight = "180px";
        menubtn.src = "images/cross.png";
    } else {
        menuItems.style.maxHeight = "0px";
        menubtn.src = "images/menu.png";
    };
};

const ntAvail = () => {
    alert("Sorry, but we haven't to added this feature yet. Please try again later.");
}