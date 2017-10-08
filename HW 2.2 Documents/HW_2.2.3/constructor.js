var myArr = {};
function Find(name) {
    name = this.name;
    var arr = document.getElementsByClassName(name);
    var result = JSON.stringify(arr);
    alert (result);
};
myArr.findClass = new Find ('redButton');
window.onload = myArr.findClass();