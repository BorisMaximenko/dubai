const toggleNavigation = () => {
    const toggleButton = document.querySelector(".header__burger");
    const nav = document.querySelector(".navigation--close");

    toggleButton.addEventListener("click", (event) => {
        event.preventDefault();

        const isClose = toggleButton.classList.contains("header__burger--close");

        if (isClose) {
            toggleButton.classList.remove("header__burger--close");
            toggleButton.classList.add("header__burger--open");
            nav.classList.remove("navigation--close");
        } else {
            toggleButton.classList.add("header__burger--close");
            toggleButton.classList.remove("header__burger--open");
            nav.classList.add("navigation--close");
        }

    }) 
    
};

toggleNavigation();

