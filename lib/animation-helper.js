exports.speed = function speed(distance) {
    return Math.min(0.4 * distance, 1) + 's';
};