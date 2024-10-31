function easeOutCubic(x) {
    return 1 - Math.pow(1 - x, 3);
}
function add(p1, p2) {
    return {
        x: p1.x + p2.x,
        y: p1.y + p2.y
    }
}
function randFloat(minInclusive, maxExclusive, seedrandomInstance) {
    if (maxExclusive < minInclusive) {
        // Switch min and max due max being less than min
        const temp = maxExclusive;
        maxExclusive = minInclusive;
        minInclusive = temp;
    }
    // Allow for using unseeded random gen for things that don't require a deterministic result
    let x = seedrandomInstance ? seedrandomInstance.quick() : Math.random();
    return x * (maxExclusive - minInclusive) + minInclusive;
}
function randInt(minInclusive, maxInclusive, seedrandomInstance) {
    if (maxInclusive < minInclusive) {
        // Switch min and max due max being less than min
        const temp = maxInclusive;
        maxInclusive = minInclusive;
        minInclusive = temp;
    }
    return Math.floor(randFloat(minInclusive, maxInclusive + 1, seedrandomInstance))
}
function jitter(pos, maxJitter, random) {
    const jitterX = randInt(-maxJitter, maxJitter, random);
    const jitterY = randInt(-maxJitter, maxJitter, random);
    return add(pos, { x: jitterX, y: jitterY });
}
function distance(coords1, coords2) {
    const dx = coords1.x - coords2.x;
    const dy = coords1.y - coords2.y;
    return Math.sqrt(dx * dx + dy * dy);
}
function similarTriangles(X, Y, D, d) {
    if (D === 0 || d === 0) {
        return { x: 0, y: 0 };
    }
    const hypotenuseRatio = d / D;
    return {
        x: hypotenuseRatio * X,
        y: hypotenuseRatio * Y
    }
}

let elBgGolem = document.querySelector('.bg.golem');
let elBgBlue = document.querySelector('.bg.blue');
let elBgGreen = document.querySelector('.bg.green');
let elBgPriest = document.querySelector('.bg.priest');
let elBgRed = document.querySelector('.bg.red');
let elBgVamp = document.querySelector('.bg.vampire');
function animateMenu() {
    if (!elBgGolem || !elBgBlue || !elBgGreen || !elBgPriest || !elBgRed || !elBgVamp) {
        elBgGolem = document.querySelector('.bg.golem');
        elBgBlue = document.querySelector('.bg.blue');
        elBgGreen = document.querySelector('.bg.green');
        elBgPriest = document.querySelector('.bg.priest');
        elBgRed = document.querySelector('.bg.red');
        elBgVamp = document.querySelector('.bg.vampire');
    }

    [
        { el: elBgGolem, speed: 0.05, maxDriftDist: 40, excludeNegativeJitter: true },
        { el: elBgBlue, speed: 0.05, maxDriftDist: 30 },
        { el: elBgGreen, speed: 0.05, maxDriftDist: 25 },
        { el: elBgPriest, speed: 0.05, maxDriftDist: 25 },
        { el: elBgRed, speed: 0.05, maxDriftDist: 25 },
        { el: elBgVamp, speed: 0.02, maxDriftDist: 10 },

    ].forEach(({ el, speed, maxDriftDist, excludeNegativeJitter }) => {

        if (el) {
            const tx = parseInt(el.dataset.tx || '0');
            const ty = parseInt(el.dataset.ty || '0');
            const x = parseFloat(el.dataset.x || '0');
            const y = parseFloat(el.dataset.y || '0');
            const distToTarget = distance({ x, y }, { x: tx, y: ty });
            // Pick new point to float to
            if (distToTarget <= 1) {
                const newLocation = jitter({ x: 0, y: 0 }, maxDriftDist);
                // The golem image is clipped at the bottom and so shall not drift to negative
                // coordinates or else the clipping will show
                if (excludeNegativeJitter) {
                    newLocation.x = Math.abs(newLocation.x);
                    newLocation.y = Math.abs(newLocation.y);
                }
                const newTx = Math.floor(newLocation.x);
                const newTy = Math.floor(newLocation.y);
                el.dataset.tx = newTx.toString();
                el.dataset.ty = newTy.toString();
                el.dataset.startDist = distance({ x, y }, { x: newTx, y: newTy }).toString();
            }
            const distFromStart = distToTarget / (parseFloat(el.dataset.startDist || '1') || 1);
            const result = similarTriangles(tx - x, ty - y, distToTarget, easeOutCubic(distFromStart) * speed)
            const newX = x + result.x;
            const newY = y + result.y;
            if (!isNaN(newX) && !isNaN(newY)) {
                el.dataset.x = (x + result.x).toString();
                el.dataset.y = (y + result.y).toString();
                el.style.transform = `translate(${x + result.x}px, ${y + result.y}px)`;
            }

        }
    });
    requestAnimationFrame(animateMenu);
}
animateMenu();