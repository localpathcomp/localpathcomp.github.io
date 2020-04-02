const devTime = () => {
    const now = new Date();
    const then = new Date('sep,13,2018,12:00:00');
    const difference = (now - then);
    const days = Math.floor(difference / (60 * 60 * 1000 * 24) * 1);
    const hours = Math.floor((difference % (60 * 60 * 1000 * 24)) / (60 * 60 * 1000) * 1);
    const mins = Math.floor(((difference % (60 * 60 * 1000 * 24)) % (60 * 60 * 1000)) / (60 * 1000) * 1);
    const secs = Math.floor((((difference % (60 * 60 * 1000 * 24)) % (60 * 60 * 1000)) % (60 * 1000)) / 1000 * 1);
    document.querySelector('#devTime > p:nth-child(3)').innerHTML =
        `${days} Days  ${hours} Hours  ${mins} Mins  ${secs} Secs`;
    requestAnimationFrame(devTime);
}

export default devTime;