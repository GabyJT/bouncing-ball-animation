// U54107257

// Ball class to create and manage the properties of the ball
class Ball {
    constructor(x, y, radius, dx, dy, color) {
        // Initial position of the ball
        this.x = x;
        this.y = y;
        // Radius of the ball
        this.radius = radius;
        // Change in x and y coordinates (speed and direction)
        this.dx = dx;
        this.dy = dy;
        // Color of the ball
        this.color = color;
    }

    // Method to draw the ball on the canvas
    draw(context) {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        context.fillStyle = this.color;
        context.fill();
        context.closePath();
    }

    // Method to update the ball's position and check for collisions
    update(canvas) {
        // Reverse direction if the ball hits the left or right edge
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        // Reverse direction if the ball hits the top or bottom edge
        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
        // Update ball position
        this.x += this.dx;
        this.y += this.dy;
    }
}

// Setting up the canvas and context for drawing
const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');

// Creating an instance of the Ball class
const ball = new Ball(200, 160, 20, 2, 2, 'red');

// Animation function to update and redraw the ball continuously
function animate() {
    // Clear the canvas before each redraw
    context.clearRect(0, 0, canvas.width, canvas.height);
    // Draw the ball
    ball.draw(context);
    // Update the ball's position
    ball.update(canvas);
    // Request the next animation frame
    requestAnimationFrame(animate);
}

// Start the animation
animate();
