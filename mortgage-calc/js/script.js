function calculate() {
    let pr = document.getElementById('pr').value;
    let ra =  document.getElementById('ra').value;
    let t =  document.getElementById('t').value;
    let mp = document.getElementById('mp').value;


    let pr = Number(pr)
    let ra = Number(ra)/100
    let t = Number(t)
    let mp = Number(mp)


    let b = 0;
    let b = (pr*(1 + ra/12)**(12*t)) - mp*((1 + ra/12)**(12*t)-1)/(ra/12);
    document.getElementById('ba').value = "$" + b.toFixed(2);

}
