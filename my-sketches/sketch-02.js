const canvasSketch = require("canvas-sketch");
const math = require("canvas-sketch-util/math");
const random = require("canvas-sketch-util/random");

const settings = {
  dimensions: [1080, 1080],
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

    const num = 15;
    const radius = width * 0.3;

    for (let i = 0; i < num; i++) {
      const slice = math.degToRad(360 / num);
      const angle = slice * i;

      x = cx + radius * Math.sin(angle);
      y = cy + radius * Math.cos(angle);

      context.save();
      context.translate(x, y);
      context.rotate(-angle);
      context.scale(random.range(3, 1), 1), random.range(0.3, 0.1);

      context.beginPath();
      context.rect(w * 0, 5, random.range(0, -h * 0.5), w, h);
      context.fill();
      context.restore();

      context.save();
      context.translate(cx, cy);
      context.rotate(-angle);

      context.lineWidth = random.range(3, 22);

      context.beginPath();
      context.arc(
        0,
        0,
        radius * random.range(0.5, 1.4),
        slice * 0.3,
        slice * -0.8
      );
      context.stroke();

      context.restore();
    }
  };
};

canvasSketch(sketch, settings);
