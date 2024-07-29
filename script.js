const container = document.getElementById("container");
const circle_numbers = 100;
const speed = 0.5;

function random_number(max) {
    return Math.floor(Math.random() * max);
}

for (let i = 0; i < circle_numbers; i++) {
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");

    random_x = random_number(1880)+20;
    random_y = random_number(1000)+20;

    circle.setAttribute("r", "2");
    circle.setAttribute("cx", random_x.toString());
    circle.setAttribute("cy", random_y.toString());
    circle.setAttribute("stroke-width", "3");
    circle.setAttribute("fill", "white");
    circle.setAttribute("class", "circle");

    container.appendChild(circle);
}

var circles = document.getElementsByClassName("circle");

for (let i = 0; i < circle_numbers; i++) {
    cx = parseInt(container.children[i].getAttribute("cx"));
    cy = parseInt(container.children[i].getAttribute("cy"));
    closest = 1920;
    closestx = 0;
    closesty = 0;

    for (let v = 0; v < circle_numbers; v++) {
        if (i == v)
            continue;
        
        ccx = parseInt(container.children[v].getAttribute("cx"));
        ccy = parseInt(container.children[v].getAttribute("cy"));

        distance = Math.sqrt(((ccx-cx)**2) + ((ccy-cy)**2));

        if (distance < closest) {
            closest = parseInt(distance);
            closestx = ccx;
            closesty = ccy;
        }
    }
    var line = document.createElementNS("http://www.w3.org/2000/svg","line");

    line.setAttribute("x1", cx);
    line.setAttribute("y1", cy);
    line.setAttribute("x2", closestx);
    line.setAttribute("y2", closesty);
    line.setAttribute("stroke", "white");

    container.append(line);
}
