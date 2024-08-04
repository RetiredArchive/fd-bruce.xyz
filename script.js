document.addEventListener('DOMContentLoaded', () => {
    const sevenwks = document.getElementById("bgmusic");
    sevenwks.volume = 0.04;

    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercentage = scrollPosition / maxScroll;

        const red = Math.min(255, Math.floor(255 * scrollPercentage));
        const green = 100;
        const blue = Math.min(255, 255 - Math.floor(255 * scrollPercentage));

        document.documentElement.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    });

    const showContent = () => {
        document.getElementById('content').classList.add('show');
    };

    const start = () => {
        setTimeout(function() {
            confetti.start();
            sevenwks.play();
        }, 200);
    };

    const stop = () => {
        setTimeout(function() {
            confetti.stop();
        }, 5000);
    };

    window.start = start;
    window.stop = stop;
    window.showContent = showContent;
});
