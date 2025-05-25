var list1 = [[2,4],[3,9],[4,16],[5,25],[6,36]];
var len1 = list1.length;
var len2=0;
for(var j=0;j<len1;j++){
  len2 = list1[j].length
  for(var i=0;i<len2;i++){
    console.log(list1[j][i]);
  }
}
