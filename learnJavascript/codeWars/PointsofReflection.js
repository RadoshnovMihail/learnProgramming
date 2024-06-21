function symmetricPoint(p, q) {
 
    const dx = q[0] - p[0];
    const dy = q[1] - p[1];

    const xP1 = q[0] + dx;
    const yP1 = q[1] + dy;

    return [xP1, yP1];
}