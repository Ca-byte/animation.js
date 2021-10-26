const canvasSketch = require("canvas-sketch");
const math = require("canvas-sketch-util/math");
const random = require("canvas-sketch-util/random");

const settings = {
  dimensions: [1080, 1080],
  animate: true,
};
/*const degToRad = (degrees) => {
  return (degrees / 180) * Math.PI;
};
//const randomRange = (max, min) => {
  return Math.random() * (max - min) - min;
};*/

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);

    context.fillStyle = "black";

    let cx = width * 0.5;
    let cy = width * 0.5;

    let w = width * 0.01;
    let h = width * 0.1;

    let x, y;

    const num = 10;
    const radius = width * 0.4;

    for (let i = 0; i < num; i++) {
      const slice = math.degToRad(360 / num);
      const angle = slice * i;

      x = cx + radius * Math.sin(angle);
      y = cy + radius * Math.cos(angle);

      context.save();
      context.translate(x, y);
      context.rotate(-angle);
      context.scale(random.range(3, 1), 1), random.range(0.4, 0.5);

      context.beginPath();
      context.rect(0 * w * 0.6, random.range(0, -h * 0.7), w, h);
      context.fill();
      context.restore();

      context.save();
      context.translate(cx, cy);
      context.rotate(-angle);

      context.lineWidth = random.range(2, 7);

      context.beginPath();
      context.arc(
        0,
        0,
        radius * random.range(0.2, 1.5),
        slice * random.range(0.2, 0, 9),
        slice * random.range(-2, -8)
      );
      context.stroke();

      context.restore();
    }
  };
};

canvasSketch(sketch, settings);
