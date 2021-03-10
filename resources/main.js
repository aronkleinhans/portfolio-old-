//init
let item = document.getElementsByClassName('item');
let inner = document.getElementsByClassName('thumbnail');

let mEnter = (event) => {
    update(event);
};
let mLeave = (event) => {
    inner.style = "";
};
let mMove = (event) => {
    if (timeToUpdate()) {
        update(event);
    };
};

item.onmousenter = mEnter;
item.onmousleave = mLeave;
item.onmousemove = mMove;

//mouse
let mouse = {
    _x: 0,
    _Y: 0,
    x: 0,
    y: 0,
    updatePos: function(event){
        let e = event || window.event;
        this.x = e.clientX - this._x;
        this.y = (e.clientY - this._y) * -1;
    },
    setOrigin: function(e){
        this._x = e.offsetLeft + Math.floor(e.offsetWidth/2);
        this._y = e.offsetTop + Math.floor(e.offsetHeight/2);
    },
    show: function(){
        return '(' + this.x + ', ' + 'this.y' + ')'
    }
}
mouse.setOrigin(item);

function update(){
    let counter = 0;
    let updateRate = 10;
    return counter++ % updateRate === 0;
}