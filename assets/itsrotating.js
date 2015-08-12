/**
 * Created by zifle on 12/08/2015.
 */

window.addEventListener('deviceorientation', serapls, true);

var rotater = null;

function serapls(e) {
    if (rotater === null) return;
    var alpha = e.alpha;
    //var beta  = e.beta;
    //var gamma = e.gamma;

    if (alpha > 20 || alpha < -20) {
        // Don't start before the device is rotated some, to prevent regular shakiness from triggering it
        rotater.style['transform'] = 'rotate('+alpha+'deg)';
    } else {
        rotater.style['transform'] = '';
    }
}

window.addEventListener('load', function () {
    rotater = document.querySelector('.rotater');
},true);