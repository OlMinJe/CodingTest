function solution(angle) {

    return angle == 180 ? 4 : (angle > 90 ? 3 : (angle == 90 ? 2 : (angle > 0 ? 1 : -1)));
}