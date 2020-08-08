function initMap() {
    const myLatLng = {
        lat: 37.782293,
        lng: -122.391240
    };
    const map = new google.maps.Map(
        document.getElementById('map'), {
            center: myLatLng,
            scrollwheel: false,
            zoom: 18
        }
    );
    const marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'GitHub'
    });
}

(function (window, document) {
    'use strict';
    const $toggles = document.querySelectorAll('.toggle'); // Node List
    const $toggleBtn = document.getElementById('toggle-btn');

    $toggleBtn.addEventListener('click', () => {
        toggleElements();
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 1024) {
            offElements();
        }
    })
    
    function toggleElements() {
        [].forEach.call($toggles, (toggle) => {
            toggle.classList.toggle('on');
        });
    }

    function offElements() {
        [].forEach.call($toggles, (toggle) => {
            toggle.classList.remove('on');
        });
    }
})(window, document)
