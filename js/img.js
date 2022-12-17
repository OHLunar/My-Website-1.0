const track = document.getElementById("image-track");

window.onmousedown = e => {
    track.dataset.mouseDownAt = e.clientX;
}

window.onmouseup = () => {
    track.dataset.mouseDownAt = "0";
    track.dataset.pervPercentage = track.dataset.percentage; 
}

window.onmousemove = e => {
    if(track.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
    maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -50;
    nextPercentage = parseFloat(track.dataset.pervPercentage) + percentage;
    
    track.dataset.percentage = nextPercentage;


    track.style.transform = `translate(${nextPercentage}%, 0%)`; //  > 50 ? 0 : nextPercentage
}
