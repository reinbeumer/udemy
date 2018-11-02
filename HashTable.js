function Hashtabel(size) {
    this.buckets = Array(size);
    this.numBusckets = this.buckets.length;
}

var myHT = new Hashtabel(30);
console.log(myHT);
console.log();