window.onload = function() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        console.log('Dispositivo Movel');

        document.querySelector(".addbd").classlist.add("corpo");
    }
}