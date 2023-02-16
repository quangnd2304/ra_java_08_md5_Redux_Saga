function* loveFlow() {
    console.log("Yêu lần 1");
    yield "Thất tình lần 1";
    console.log("Yêu lần 2");
    yield "Thất tình lần 2";
    console.log("Yêu lần 3");
    yield "Thầy Dũng cưới rồi";
}
let mrDung = loveFlow();
console.log(mrDung.next());
console.log(mrDung.next());
console.log(mrDung.next());
console.log(mrDung.next());