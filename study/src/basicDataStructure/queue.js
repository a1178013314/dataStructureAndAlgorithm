//队列
(function(){
  let domName = 'queue'
  
  const initFunc = () => {
    console.log(domName)
  }
  class Queun {
    constructor(){
      this.count = 0//控制队列大小
      this.lowestCount = 0//第一个元素的key
      this.items = {}//数据保存对象
    }
    //像队列尾部添加数据
    enqueue(element){
      this.items[this.count] = element
      this.count++
    }
    //移除队列第一项
    dequeue(){
      if(this.isEmpty()){
        return undefined
      }
      const result = this.items[this.lowestCount]
      delete this.items[this.lowestCount]
      this.lowestCount ++ 
      this.count -- 
      return result
    }
    
    //返回队列中第一个元素
    peek(){
      if(this.isEmpty()){
        return undefined
      }
      return this.items[this.lowestCount]
    }
    //队列是否为空
    isEmpty(){
      return this.size() === 0
    }
    //返回队列个数
    size(){
      return this.count - this.lowestCount
    }
    //清空队列
    clear(){
      this.count = 0//控制队列大小
      this.lowestCount = 0//TODO
      this.items = {}//数据保存对象
    }
    //toString
    toString(){
      console.log(JSON.stringify(this.items))
    }
  }


  document.getElementById(domName).addEventListener('click', initFunc)
})()
//