function calculate() {
    let pr = document.getElementById('pr').value;
    let ra =  document.getElementById('ra').value;
    let t =  document.getElementById('t').value;
    let mp = document.getElementById('mp').value;


    pr = Number(pr)
    ra = Number(ra)/100
    t = Number(t)
    mp = Number(mp)


    b = 0;
    b = (pr*(1 + ra/12)**(12*t)) - mp*(Math.abs((1 + ra/12)**(12*t)-1)/(ra/12));
    b = b.toFixed(2)
    document.getElementById('ba').value = "$" + b;

}