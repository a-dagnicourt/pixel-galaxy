var canvas = document.querySelector("canvas");

const common = 0;
const rare = 70;
const epic = 90;
const legendary = 98;

let rarity = 0;

const roll = Math.random() * 100;
console.log(roll);

if (roll > epic) {
    rarity = roll;
}

switch (true) {
    case roll > legendary:
        rarity = roll;
        break;
    case roll > epic:
        (rarity = roll) / 2;
        break;
    case roll > rare:
        (rarity = roll) / 3;
        break;
    case roll > common:
        (rarity = roll) / 4;
        break;
    default:
        break;
}

console.log(rarity);

if (canvas.getContext) {
    var ctx = canvas.getContext("2d");
    canvas.style = "background: white";

    // Constants
    ban_width = 1500;
    ban_height = 500;
    square = 10;

    // BG Gradient
    var grd = ctx.createLinearGradient(0, 0, 0, ban_height);
    if (roll > legendary) {
        grd.addColorStop(0, "rgb(64,32,128)");
        grd.addColorStop(0.64, "rgb(128,32,128)");
        grd.addColorStop(1, "rgb(255,128,2)");
    } else {
        grd.addColorStop(0, "rgb(0,0,8)");
        grd.addColorStop(0.64, "rgb(0,0,64)");
        grd.addColorStop(1, "rgb(0,0,128)");
    }

    // Fill with gradient
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, ban_width, ban_height);

    for (let i = 0; i < rarity; i++) {
        ctx.fillStyle = "rgb(255,255,255,0.5)";
        ctx.fillRect(
            Math.random() * ban_width,
            Math.random() * ban_height,
            square,
            square
        );
    }
} else {
    alert("Canvas non supporté par ce navigateur");
}
