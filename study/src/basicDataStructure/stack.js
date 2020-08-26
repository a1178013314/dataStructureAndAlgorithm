(function(){
  const domName = 'Stack'
  const initFunc = () => {
    console.log(domName)
  }
  class Stack {
    constructor(){
      this.items = []
    }
    //添加一个或者多个
    push(element){
      this.items.push(element)
    }
    //移除栈顶元素并返回
    pop(){
      this.items.pop()
    }
    //返回栈顶元素
    peek(){
      return this.items[this.items.length]
    }
    //判空
    isEmpty(){
      return this.items.length === 0
    }
    //清除数组
    clear(){
      this.items = []
    }
    //返回元素个数
    size(){
      return this.items.length
    }
  }
  document.getElementById(domName).addEventListener('click', initFunc)
})()