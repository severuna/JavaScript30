document.addEventListener("DOMContentLoaded", ( ) => {

    const hour = document.querySelector("#hour");
    const min = document.querySelector("#min");
    const second = document.querySelector("#second");

    function setDate() {

        const now = new Date();

        const sec = now.getSeconds();

        const secondsDeg = ((sec / 60) * 360) + 90;

        second.style.transform = `rotate(${secondsDeg}deg)`;

        const mins = now.getMinutes();

        const minsDeg = ((mins / 60) * 360) + ((sec/60)*6) + 90;

        min.style.transform = `rotate(${minsDeg}deg)`;

        const hours = now.getHours();
        const hoursDeg = ((hours / 12) * 360) + ((mins/60)*30) + 90;
        hour.style.transform = `rotate(${hoursDeg}deg)`;
    }

    setInterval(setDate, 1000);

    setDate();
});