document.addEventListener("DOMContentLoaded", ( ) => {
    
    console.log(`the page is loaded`);

    const panels = document.querySelectorAll('.panel');

    panels.forEach( panel => {

        panel.addEventListener("click", ( e )=> {

            e.preventDefault();

            panel.classList.toggle('open');

        });

        panel.addEventListener('transitionend', ( e ) => {

            e.preventDefault();

            if (e.propertyName.includes('flex')) {

                panel.classList.toggle('open-active');

            }

        });

    });

});
