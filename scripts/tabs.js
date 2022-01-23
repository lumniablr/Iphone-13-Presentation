const TabsFunc = () => {
    const tabs = document.querySelectorAll('.card-detail__change')
    const tabTitle = document.querySelector('.card-details__title')
    const tabPrice = document.querySelector('.card-details__price')
    const tabImage = document.querySelector('.card__image_item')
    const changeTitle = document.getElementsByTagName('title')
    console.log(changeTitle)

    const tabOptions = [
        {
            name: 'Graphite',
            memory: '128',
            price: 60000,
            image: 'img/iPhone-graphite.webp'
        },
        {
            name: 'Silver',
            memory: '256',
            price: 65000,
            image: 'img/iPhone-silver.webp'
        },
        {
            name: 'Sierra Blue',
            memory: '512',
            price: 70000,
            image: 'img/iPhone-sierra_blue.webp'
        }
    ]

    const changeContent = (index) => {
        console.log(tabOptions[index].memory)
        tabTitle.textContent = `Смартфон Apple iPhone 13 Pro ${tabOptions[index].memory}GB ${tabOptions[index].name}`
        tabPrice.textContent = `${tabOptions[index].price}₽`

        tabImage.setAttribute('src', tabOptions[index].image)

    }

    const changeActiveTabs = (indexClickedTab) => {
        tabs.forEach((tab, index) => {
            tab.classList.remove('active')

            if (index === indexClickedTab) {
                tab.classList.add('active')
            }
        })
        changeContent(indexClickedTab)
    }


    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            changeActiveTabs(index)
        })
    })
    changeContent(0)
}
TabsFunc()