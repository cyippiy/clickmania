//distance between two circles can be
//calculated with pythagorean theorem
//distance^2 = a^2 + b^2
//distance = sqrt(a^2 + b^2)
export const distance = (x1, y1, x2, y2) => {
    let xDist = x2 - x1;
    let yDist = y2 - y1;

    return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
};

export const rotate = (dx,dy, angle) => {
    const rotatedVelocities = {
        x: dx * Math.cos(angle) - dy * Math.sin(angle),
        y: dx * Math.sin(angle) + dy * Math.cos(angle)
    };

    return rotatedVelocities;
};

export const resolveCollision = (circle, circle2) => {
    const xVelocityDiff = circle.dx - circle2.dx;
    const yVelocityDiff = circle.dy - circle2.dy;

    const xDist = circle2.x - circle.x;
    const yDist = circle2.y - circle.y;

    // Prevent accidental overlap of circles
    if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {

        // Grab angle between the two colliding circles
        const angle = -Math.atan2(circle2.y - circle.y, circle2.x - circle.x);

        // Store mass in var for better readability in collision equation
        const m1 = 1;
        const m2 = 1;

        // Velocity before equation
        const u1 = rotate(circle.dx,circle.dy, angle);
        const u2 = rotate(circle2.dx,circle2.dy, angle);

        // Velocity after 1d collision equation
        const v1 = { x: u1.x * (m1 - m2) / (m1 + m2) + u2.x * 2 * m2 / (m1 + m2), y: u1.y };
        const v2 = { x: u2.x * (m1 - m2) / (m1 + m2) + u1.x * 2 * m2 / (m1 + m2), y: u2.y };

        // Final velocity after rotating axis back to original location
        const vFinal1 = rotate(v1.x,v1.y, -angle);
        const vFinal2 = rotate(v2.x,v2.y, -angle);

        // Swap circle velocities for realistic bounce effect
        circle.dx = vFinal1.x;
        circle.dy = vFinal1.y;

        circle2.dx = vFinal2.x;
        circle2.dy = vFinal2.y;
    }
};