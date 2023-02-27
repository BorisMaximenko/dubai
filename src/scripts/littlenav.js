const toggleDropdown = () => {
    const activator = document.querySelector(".estr");
    const dropdown = document.querySelector(".mst");


    activator.addEventListener('click', (event) =>{
        event.preventDefault();

        const isOpen = activator.classList.contains("menu__link--active");
        
        if (isOpen) {
            activator.classList.remove("menu__link--active");
            dropdown.classList.add("menu__drop-down-list--close");
        } else {
            activator.classList.add("menu__link--active");
            dropdown.classList.remove("menu__drop-down-list--close");
        }
    })  
};

toggleDropdown();
