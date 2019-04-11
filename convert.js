//技術書典サイトよりダウンロードしたjsonファイルを用意してください
var json = require("./circle.json")

var { list } = json;

var circles = [];
list.forEach(element => {
  var obj = {};
  //インデックスを作成するときにはtypeプロパティはなくてもOK!
  // obj["type"] = "add";
  obj["id"] = element.id;
  obj["fields"] = {
    "name":element.name,
    "genre":element.genreFreeFormat,
    "tags":element.tags,
  }
  circles.push(obj);
});

var fs = require("fs");
try {
    fs.writeFileSync("circle_after.json", JSON.stringify(circles));
    console.log('write end');
  }catch(e){
    console.log(e);
}