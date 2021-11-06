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

function findKthLastNode(headNode,k){
    let listPosition = linkedListLength(headNode) - k;
    if(listPosition<0){
        return false;
    }

    let node = headNode;
    for(var i=0;i<listPosition;i++){
        if(i==listPosition){
            break;
        }else{
            node = node.next;
        }
    }
    return node;
}

function linkedListLength(head){
    let node = head;
    let length = 0;
    while(node!=null){
        length++;
        node = node.next;
    }
    return length;
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



console.log(findKthLastNode(list.head,99));

console.log(findKthLastNode(list.head,3));

console.log(findKthLastNode(list.head,6));