const burger = document.querySelector(".navbar-burger")
burger.onclick = () => {
    document.querySelector(".navbar-right__items").classList.toggle("is-active")
}