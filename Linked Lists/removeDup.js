class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;               
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head;
    }
}

function removeDups(listHead){
    let dataSet = new Set();
    let node = listHead;
    while(node != null){
        dataSet.add(node.data);
        node = node.next;
    }
    let prevNode = null;
    let head = true;
    let tempNode;
    let newData = Array.from(dataSet);
    newData.forEach((data)=>{
        if(head){
            listHead = new ListNode(data);
            prevNode = listHead;
            head = false;
        }else{
            tempNode = new ListNode(data);
            prevNode.next = tempNode;
            prevNode = tempNode;
        }
    });
    return new LinkedList(listHead);
}
function printList(listHead){
    let node = listHead;
    let nodeString = "head: ";
    while(node != null){
        nodeString += node.data;
        if(node.next != null){
            nodeString += " ->";
        }
        node = node.next;
    }
    console.log(nodeString);
}


let node1 = new ListNode(2);
let node2 = new ListNode(5);
let node3 = new ListNode(5);
let node4 = new ListNode(6);
let node5 = new ListNode(5);
let node6 = new ListNode(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;

let list = new LinkedList(node1);

// console.log(list.head.next.data); //returns 5
printList(list.head);
list = removeDups(list.head);
console.log("after remove");
printList(list.head);