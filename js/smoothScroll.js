const smoothScroll = () => {
    document.addEventListener('click', (e) => {
        if (e.target.tagName !== 'A') return;
        if (e.target.classList.contains('scroll')) scrollAnchors(e, e.target);

    });
    const scrollAnchors = (e, respond = null) => {
        const distanceToTop = (el) => {
            return Math.floor(el.getBoundingClientRect().top);
        }
        e.preventDefault();
        let targetID = (respond) ? respond.getAttribute('href') : this.getAttribute('href');
        let targetAnchor = document.querySelector(targetID);
        if (!targetAnchor) return;
        let originalTop = distanceToTop(targetAnchor) - 80;
        window.scrollBy({ top: originalTop, left: 0, behavior: 'smooth' });
        let checkIfDone = setInterval(function() {
            let atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
            if (distanceToTop(targetAnchor) === 80 || atBottom) {
                targetAnchor.tabIndex = '-1';
                targetAnchor.focus();
                ('history' in window) ?
                window.history.pushState('', '', targetID):
                    window.location = targetID;
                clearInterval(checkIfDone);
            }
        }, 100);
    }
}

export default smoothScroll;