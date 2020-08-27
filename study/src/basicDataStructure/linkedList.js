//链表
(function () {
  //比较链表中元素是否相等
  console.log(util.defaultEquals)
  class Node {
    constructor(element){
      this.element = element
      this.next = undefined
    }
  }
  class LinkedList {
    constructor(equalsFn = util.defaultEquals) {
      this.count = 0
      this.head = undefined
      this.equalsFn = equalsFn
    }
    //向尾部添加一个元素
    push(element){
      const node = new Node(element)
      let current
      if(this.head == null){
        this.head = node
      } else {
        current = this.head;
        while (current.next != null){
          current = current.next;
        }
        current.next = node
      }
      this.count ++ 
    }
    //向链表特定位置添加元素
    insert(element, index){
      if(index >= 0 && index <= this.count){
        const node = new Node(element)
        if(index === 0){
          let current = this.head
          node.next = current
          this.head = node
        }else{
          const previous = this.getElementAt(index - 1)
          const current = previous.next
          node.next = current
          previous.next = node
        }
        this.count ++
      }
      return false
    }
    //返回链表中特定位置元素
    getElementAt(index){
      if(index >= 0 && index <= this.count){
        let node = this.head
        for (let i = 0; i < index && node != null; i++) {
          node = node.next
        }
        return node
      }
      return undefined
    }
    //移除一个元素
    remove(element){
      const index = this.indexOf(element)
      return this.removeAt(index)
    }
    //返回元素位置
    indexOf(element){
      let current = this.head
      for (let i = 0; i < this.count && current != null; i++) {
        if(this.equalsFn(element, current.element)){
          return i
        }
        current = current.next
      }
      return -1
    }
    //移除特定位置的元素
    removeAt(index){
      if (index >=0 && index < this.count){
        let current = this.head
        if(index === 0){
          this.head = current.next
        }else {
          let previous = this.getElementAt(index - 1)
          current = previous.next
          previous.next = current.next
        }
        this.count -- ;
        return current.element
      }
    }
    //是否为空
    isEmpty(){
      return this.count === 0
    }
    //链表大小
    size(){
      return this.count
    }
    getHead(){
      return this.head
    }
    toString(){
      if(this.isEmpty()){
        console.log('null')
        return
      }
      let current = this.head
      for (let i = 0; i < this.size(); i++) {
        console.log(current)
        current = current.next
      }

    }
  }

  const linkedList = new LinkedList()
  let domName = 'linkenList'
  const initFunc = () => {
    console.log(domName)
    linkedList.push('111')
    linkedList.push('222')
    linkedList.push('333')
    linkedList.toString()
  }
  document.getElementById(domName).addEventListener('click', initFunc)

})()