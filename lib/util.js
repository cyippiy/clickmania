//distance between two circles can be
//calculated with pythagorean theorem
//distance^2 = a^2 + b^2
//distance = sqrt(a^2 + b^2)
export const distance = (x1, y1, x2, y2) => {
    let xDist = x2 - x1;
    let yDist = y2 - y1;

    return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
};

export const rotate = (velocity, angle) => {
    const rotatedVelocities = {
        x: velocity.x * Math.cos(angle) - velocity.y * Math.sin(angle),
        y: velocity.x * Math.sin(angle) + velocity.y * Math.cos(angle)
    };

    return rotatedVelocities;
};

export const resolveCollision = (circle, circle2) => {
    const xVelocityDiff = circle.velocity.x - circle2.velocity.x;
    const yVelocityDiff = circle.velocity.y - circle2.velocity.y;

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
        const u1 = rotate(circle.velocity, angle);
        const u2 = rotate(circle2.velocity, angle);

        // Velocity after 1d collision equation
        const v1 = { x: u1.x * (m1 - m2) / (m1 + m2) + u2.x * 2 * m2 / (m1 + m2), y: u1.y };
        const v2 = { x: u2.x * (m1 - m2) / (m1 + m2) + u1.x * 2 * m2 / (m1 + m2), y: u2.y };

        // Final velocity after rotating axis back to original location
        const vFinal1 = rotate(v1, -angle);
        const vFinal2 = rotate(v2, -angle);

        // Swap circle velocities for realistic bounce effect
        circle.velocity.x = vFinal1.x;
        circle.velocity.y = vFinal1.y;

        circle2.velocity.x = vFinal2.x;
        circle2.velocity.y = vFinal2.y;
    }
};