
class BitVector{
    constructor(numBits) {
        numBits = numBits || 32;
        this.vec = new Uint32Array(Math.ceil(numBits / 32))
    }

    clear(pos){
        let highIndex = Math.floor(pos / 32);
        let lowdIndex = pos % 32;
        this.vec[highIndex] &= ~(1 << lowdIndex);
    }
    get(pos){
        let highIndex = Math.floor(pos / 32);
        let lowdIndex = pos % 32;
        let result = this.vec[highIndex] & (1 << lowdIndex);
        return result != 0;
    }
    set(pos){
        let highIndex = Math.floor(pos / 32);
        let lowdIndex = pos % 32;
        this.vec[highIndex] |= (1 << lowdIndex);
    }
}

let vector = new BitVector(64);
vector.set(34);
vector.set(21)
vector.clear(21)
console.log(vector.get(34),vector.get(21));
