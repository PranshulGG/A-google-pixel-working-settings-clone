

const qs = q => document.querySelector(q);
const qsa = q => document.querySelectorAll(q);

let svg;
let svgBox;
let size;
let unit;
let order = 3; // 3 -> 3x3 grid, 4 -> 4x4 grid
let dotRadius = 3;
let points = [];
let currentPattern = [];
let patternPath = "";
let dots;
const threshold = 32;
let loaded = false;

window.onload = () => {
    svg = qs("svg");

    svgBox = svg.getBoundingClientRect();
    svg.addEventListener(
        "touchstart",
        handleTouchStart
    );
    svg.addEventListener(
        "mousedown",
        handleTouchStart
    );

    size = Math.min(innerWidth - 14, 300);
    unit = size / order;
    svg.setAttribute("width", size);
    svg.setAttribute("height", size);
    svg.style.flex = "0 0 " + size + "px";

    createGrid(order);

    dots = [...qsa(".dot")];

    svg.style.opacity = 1;

    loaded = true;
}

window.onresize = () => {

}

// window.ontouchstart = () => {
//     if(loaded)
//     resetPattern();
// }

// window.onmousedown = () => {
//     if(loaded)
//     resetPattern();
// }

function createGrid(order) {
    points = [];
    for (let i = 0; i < order; i++) {
        for (let j = 0; j < order; j++) {
            let x = j * unit + unit / 2;
            let y = i * unit + unit / 2;

            points.push({ x, y });

            let dotHTML = `<circle width='60' class="dot" cx="${x}" cy="${y}" r="${dotRadius}"></circle>`;

            svg.innerHTML += dotHTML;
        }
    }
}


function updatePattern() {
    if (currentPattern.length == 0) return;

    let start = points[currentPattern[0]];
    let d = `M${start.x} ${start.y}`;

    for (let i = 1; i < currentPattern.length; i++) {
        let p = points[currentPattern[i]];
        d += ` L${p.x} ${p.y}`;
    }

    patternPath = d;
}

function drawPattern(x, y) {
    let path;
    if (currentPattern.length >= order ** 2 || !x || !y) {
        path = patternPath;
    } else {
        path = patternPath + ` L${x} ${y}`;
    }

    pattern.setAttribute("d", path);




}






function resetPattern() {
    currentPattern = [];
    patternPath = "";
    pattern.setAttribute("d", "");
    dots.forEach(dot => dot.classList.remove("visited"));
}


function handleTouchStart(e) {
    e.preventDefault();
    window.addEventListener(
        "touchmove",
        handleTouchMove
    );
    window.addEventListener(
        "touchend",
        handleTouchEnd
    );
    window.addEventListener(
        "mousemove",
        handleTouchMove
    );
    window.addEventListener(
        "mouseup",
        handleTouchEnd
    );
}


function handleTouchEnd() {
    drawPattern();
    window.removeEventListener(
        "touchmove",
        handleTouchMove
    );
    window.removeEventListener(
        "touchend",
        handleTouchEnd
    );
    window.removeEventListener(
        "mousemove",
        handleTouchMove
    );
    window.removeEventListener(
        "mouseup",
        handleTouchEnd
    );
}

function connectDot(i) {
    if (i != null && currentPattern.indexOf(i) === -1) {
        dots[i].classList.add("visited");
        currentPattern.push(i);
        document.getElementById('error_messages').innerHTML = 'Release finger when done'



        svg.addEventListener('touchend', () => {
            if (currentPattern.length < 4) {


                document.getElementById('error_messages').innerHTML = 'Connect at least 4 dots. Try again'
                document.getElementById('error_messages').style.color = 'var(--Error)';
                document.getElementById('pattern').style.stroke = 'var(--Error-Container)'
                const visitedElements = document.querySelectorAll('.visited');

                visitedElements.forEach(element => {
                    element.style.stroke = 'var(--Error-Container)';
                });


                setTimeout(() => {
                    document.getElementById('error_messages').innerHTML = 'For added security, set a pattern to unlock the device'
                    document.getElementById('error_messages').style.color = '';
                    document.getElementById('pattern').style.stroke = ''
                    visitedElements.forEach(element => {
                        element.style.stroke = '';
                    });
                    resetPattern();

                }, 1000);
            }
            else {
                    document.getElementById('error_messages').innerHTML = 'Pattern recorded'
                    const visitedElements = document.querySelectorAll('.visited');

                    visitedElements.forEach(element => {
                        element.style.stroke = 'var(--On-Surface)';
                    });
                    document.getElementById('pattern').style.stroke = 'var(--On-Surface) '
                    document.getElementById('next_btn').disabled = false

            }

        });

    }
}






function handleTouchMove(e) {
    e.preventDefault();
    svgBox = svg.getBoundingClientRect();
    let x, y;
    if (e.touches && e.touches.length > 0) {
        x = e.touches[0].clientX.toFixed(0) - svgBox.x;
        y = e.touches[0].clientY.toFixed(0) - svgBox.y;
    } else {
        x = e.clientX.toFixed(0) - svgBox.x;
        y = e.clientY.toFixed(0) - svgBox.y;
    }

    let i = getNearestPoint(x, y);
    if (i != null && currentPattern.indexOf(i) == -1) {

        if (currentPattern.length > 0) {
            let j = currentPattern[currentPattern.length - 1];

            let cur = {
                x: i % order,
                y: Math.floor(i / order)
            };

            let last = {
                x: j % order,
                y: Math.floor(j / order)
            };

            let minX = Math.min(cur.x, last.x);
            let maxX = Math.max(cur.x, last.x);
            let minY = Math.min(cur.y, last.y);
            let maxY = Math.max(cur.y, last.y);
            let dx = (cur.x - last.x);
            let dy = (cur.y - last.y);

            if (cur.x == last.x) {
                for (let y = minY + 1; y < maxY; y++) {
                    let p = y * order + cur.x;
                    connectDot(p);
                }

            } else if (cur.y == last.y) {
                for (let x = minX + 1; x < maxX; x++) {
                    let p = cur.y * order + x;
                    connectDot(p);
                }

            } else if (Math.abs(dx) == Math.abs(dy)) {
                if (dx >= 0 && dy >= 0) {
                    let x = minX + 1, y = minY + 1;
                    for (x, y; x < maxX && y < maxY; x++, y++) {
                        let p = y * order + x;
                        connectDot(p);
                    }
                } else if (dx < 0 && dy >= 0) {
                    let x = minX + 1, y = maxY - 1;

                    for (x, y; x < maxX && y > minY; x++, y--) {
                        let p = y * order + x;
                        connectDot(p);
                    }
                } else if (dx >= 0 && dy < 0) {
                    let x = minX + 1, y = maxY - 1;

                    for (x, y; x < maxX && y > minY; x++, y--) {
                        let p = y * order + x;
                        connectDot(p);
                    }
                } else if (dx < 0 && dy < 0) {
                    let x = minX + 1, y = minY + 1;

                    for (x, y; x < maxX && y < maxY; x++, y++) {
                        let p = y * order + x;
                        connectDot(p);
                    }
                }
            }




        }

        connectDot(i);
        updatePattern();
    }

    if (currentPattern.length != 0) {
        drawPattern(x, y);
    }
}



function getNearestPoint(x, y) {
    let nearPoint;
    let minDist = Infinity;
    points.forEach((p, i) => {
        let dist = distance(x, p.x, y, p.y);

        if (minDist > dist) {
            minDist = dist;
            nearPoint = i;
        }
    });

    if (minDist <= threshold) {
        return nearPoint;
    }
    return null;
}


function distance(x1, x2, y1, y2) {
    return Math.sqrt(
        (x2 - x1) ** 2 + (y2 - y1) ** 2
    );
}


function clear_pattern_btn() {
    window.location.reload();
}


