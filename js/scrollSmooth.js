window.onload = function () {

    let links = document.querySelectorAll('a[href^="#"]');
    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function (e) {
            let linkHash = links[i].getAttribute('href');
            let linkWithoutHash = document.getElementById(linkHash.replace('#', ''));
            setTimeout( function () {
                linkWithoutHash.scrollIntoView({ block: 'start', behavior: 'smooth' });
            }, 500);
            e.preventDefault();
        });
    }

}