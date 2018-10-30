window.onload = function () {

    let croc   = Snap.select('#crocodile'),
        head   = croc.select('#upper-head'),
        jaw    = croc.select('#upper-jaw'),
        circle = croc.select('#circle'),
        timer;

    let pivots = [
        [ 44, 147 ],
        [ 92, 126 ]
    ];

    function close() {
        clearTimeout(timer);

        head.animate({
            transform: 'r' + [ 8, pivots[ 0 ] ]
        }, 500, mina.backin);

        jaw.animate({
            transform: 'r' + [ 37, pivots[ 1 ] ]
        }, 500, mina.backin);

        timer = setTimeout(function () {
        }, 400);
    }

    function open() {
        clearTimeout(timer);

        head.animate({
            transform: 'r' + [ 0, pivots[ 0 ] ]
        }, 700, mina.elastic);

        jaw.animate({
            transform: 'r' + [ 0, pivots[ 1 ] ]
        }, 700, mina.elastic);

    }

    timer = setTimeout(close, 50);

    circle.hover(open,
        function () {
            timer = setTimeout(close, 500);
        }
    );

    function anim() {
        circle.animate({
            transform: 'T 0 170, r 20, T -30 0'
        }, 1200).attr({ fill: 'red' });
    }

    circle.click(anim,
        function () {
            timer = setTimeout(close, 1000);
        }
    );
};