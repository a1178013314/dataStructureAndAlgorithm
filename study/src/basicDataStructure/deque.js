//双端队列
(function () {
  let domName = 'dqueue'

  
  class Deque {
    constructor() {
      this.count = 0//控制队列大小
      this.lowestCount = 0//第一个元素的key
      this.items = {}//数据保存对象
    }
    //在双端队列前添加元素
    addFront(element) {
      if(this.isEmpty()){
        this.addBack(element)
      }else if(this.lowestCount > 0 ){
        this.lowestCount--;
        this.items[this.lowestCount] = element
      }else{
        for (let i = this.count; i > 0; i--) {
          this.items[i] = this.items[ i-1 ]
        }
      }

      this.count++
      this.lowestCount = 0
      this.items[0] = element
    }
    //在双端队列后添加元素
    addBack(element) {
      this.items[this.count] = element
      this.count++
    }
    //移除第一个元素
    removeFront() { }
    //移除最后一个元素
    removeBack() {
      if (this.isEmpty()) {
        return undefined
      }
      const result = this.items[this.lowestCount]
      delete this.items[this.lowestCount]
      this.count--
      this.lowestCount ++ 
      return result
    }
    //返回队列第一个元素
    peekFront() {
      if (this.isEmpty()) {
        return undefined
      }
      return this.items[this.count - 1]
    }
    //返回队列最后元素
    peekBack() { 
      if (this.isEmpty()) {
        return undefined
      }
      return this.items[this.lowestCount]
    }
    //是否为空
    isEmpty() {
      return this.size() === 0
    }
    //返回队列个数
    size(){
      return this.count - this.lowestCount
    }
    toString(){
      console.log(this.items)
    }

  }
  const deque = new Deque()

  const initFunc = () => {
    deque.addBack('aaa')
    deque.addFront('bbb')
    deque.addBack('ccc')
    deque.addFront('ddd')
    deque.addBack('eee')
    deque.addFront('fff')
    deque.addBack('ggg')
    deque.toString()
    deque.removeBack()
    deque.toString()
  }




  document.getElementById(domName).addEventListener('click', initFunc)
})()