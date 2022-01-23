const ScrollFunc = () => {

    const links = document.querySelectorAll('.header-menu__item a')
    const linkCharacteristics = document.querySelector('.card-details__link-characteristics')

    const newArray = [...links, linkCharacteristics]
    console.log(linksArray)

    seamless.polyfill();


    newArray.forEach((element) => {
        element.addEventListener('click', (event) => {
            event.preventDefault()

            const id = element.getAttribute('href').substring(1)
            const section = document.getElementById(id)

            if (section) {
                section.elementScrollIntoView(section, {
                    behavior: 'smooth',
                    block: 'start'
                })
            } else {
                seamless.elementScrollIntoView(document.querySelector("#characteristics"), {
                    behavior: "smooth",
                    block: "center",
                    inline: "center",
                });
            }

        })
    })
}
ScrollFunc()