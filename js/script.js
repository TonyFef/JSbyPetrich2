const tabs = document.querySelectorAll(".tabheader__item");
// console.log(tabs);
// const tabDescr = document.querySelectorAll(".tabcontent__descr");
const tabContent = document.querySelectorAll(".tabcontent");

const tabsParent = document.querySelector(".tabheader__items");

const hideTabContent = () => {
    tabContent.forEach((tab) => (tab.style.display = "none"));
    tabs.forEach((item) => item.classList.remove("tabheader__item_active"));
};

const showTabContent = (i = 0) => {
    tabContent[i].style.display = "block";
    tabs[i].classList.add("tabheader__item_active");
};

tabsParent.addEventListener("click", (e) => {


    if (e.target && e.target.classList.contains("tabheader__item")) {
        tabs.forEach((item, index) => {
            if (item === e.target) {
                hideTabContent();
                showTabContent(index);
            }
        });
    }
});

hideTabContent();
showTabContent();
// tabsToggler();
