/**
链表节点结构
**/
function LinkedNode(data){
  this.data = data;
  this.next = null;
}
/**
链表结构
**/

function LinkedList(){
  this.head = new LinkedNode("head");
  this.find = find;
  this.insert = insert;
  this.remove = remove;
  this.display = display;
  this.findPrevious = findPrevious;

}

/**
查找某个值为item的节点
*/
function find(item){
  var curNode = this.head;
  while(curNode.data !== item){
    curNode = curNode.next;
  }
  return curNode;
}
/**插入节点**/
function insert(newData, item){

  var newNode = new LinkedNode(newData);
  var current = this.find(item);

  newNode.next = current.next;
  current.next = newNode;

}

/*
查找到前一个节点
*/
function findPrevious(item){
  var curNode = this.head;
  while(!(curNode.next == null) && (curNode.data != item)){
    curNode = curNode.next;
  }
  return curNode;
}
/*删除节点*/
function remove(item){
  var pre = findPrevious(item);
  if(pre !== null){
    pre.next = pre.next.next;
  }
}

/**
显示链表内容
**/
function display(){

  var cur = this.head;
  var res = "";
  while(cur.next !== null){
    res += cur.data + "->";
    cur = cur.next;
  }

  s = res.substring(0,res.length-2);
  console.log(s);
}
function randomNode(data){
  this.data = data;
  this.next = null;
  this.randomNext = null;
}

//主程序
var cites = new LinkedList();
cites.insert("a","head");
cites.insert("b","a");
cites.insert("c","b");
cites.insert("d","c");

cites.display();
