const scrollSpy = () => {
    const sections = document.querySelectorAll('span.observe');
    const sectionsArr = [...sections];
    const navItems = document.querySelectorAll('nav li');
    const activateNavByIndex = (index) => {
        if (sections[index].classList.contains('active')) return;
        const currentActive = document.querySelectorAll('nav .active');
        for (let i = currentActive.length - 1; i >= 0; i--) {
            currentActive[i].classList.remove('active');
        }
        navItems[index].classList.add('active');
    }
    const intersectionCallback = (entries, observer) => {
        if (entries[0].intesectionRatio <= 0) return;
        if (entries[0].intersectionRatio > 0.75) activateNavByIndex(sectionsArr.indexOf(entries[0].target))

    };
    const intersectionOptions = {
        threshold: [0, 0.5, 1],
        rootMargin: '60px 0px 0px 0px'
    };
    const intersectionObserver = new IntersectionObserver(intersectionCallback, intersectionOptions);
    sections.forEach((el, i) => {
        intersectionObserver.observe(sections[i]);
    })
}

export default scrollSpy;