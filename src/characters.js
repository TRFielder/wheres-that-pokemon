class Character {
    constructor(xmin, xmax, ymin, ymax) {
        this.xmin = xmin;
        this.xmax = xmax;
        this.ymin = ymin;
        this.ymax = ymax;
    }

    checkIfValidX = (x) => {
        if((x >= this.xmin) && (x <= this.xmax)) return true;
    }

    checkIfValidY = (y) => {
        if((y >= this.ymin) && (y <= this.ymax)) return true;
    }
}

export default Character;