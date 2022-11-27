
let btn = document.getElementsByTagName('button')[0];

btn.addEventListener('click', function (e) {
    e.preventDefault();
    var input = document.getElementById('input').value;
    let walk=Number(input)
    walk=((walk/3.6)*60).toFixed(2);
    walk=Math.round(walk)
    console.log(walk);
    let text1=document.getElementById('text1').innerHTML=walk;

    let velo=Number(input)
    velo=((velo/20.1)*60).toFixed(2);
    velo=Math.round(velo)
    console.log(velo);
    let text2=document.getElementById('text2').innerHTML=velo;

    let car=Number(input)
    car=((car/70)*60).toFixed(2);
    car=Math.round(car)
    console.log(car);
    let text3=document.getElementById('text3').innerHTML=car;

    let plane=Number(input)
    plane=((plane/800)*60).toFixed(2)
    console.log(plane);
    plane=Math.round(plane)
    let text4=document.getElementById('text4').innerHTML=plane;
})
