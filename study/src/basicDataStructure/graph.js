(function () {
  const Colors = {
    WHITE: 0,//该顶点没有被访问
    GREY: 1,//被访问但是并未被探索
    BLACK: 2//访问并且完全探索
  }
  //初始化color
  const initializeColor = vertices => {
    const color = {}
    for (let i = 0; i < vertices.length; i++) {
      color[vertices[i]] = Colors.WHITE

    }
    return color
  }
  //算法结果打印
  const printVertex = (value) => console.log('value,value', value)
  //广度优先搜索算法
  const breadthFirstSearch = (graph, startVertex, callback) => {
    //获取节点集合
    const vertices = graph.getVeritices()
    //获取关系集合
    const adjList = graph.getAdjList()
    //初始化颜色
    const color = initializeColor(vertices)
    //创建队列
    const queun = new Queun()
    //入口节点入队列
    queun.enqueue(startVertex)
    //如果非空
    while (!queun.isEmpty()) {
      //出队列
      const u = queun.dequeue()
      //获取移除节点的邻居节点
      const neighbors = adjList.get(u)
      //标记该节点为灰色
      color[u] = Colors.GREY
      //遍历邻居节点
      for (let i = 0; i < neighbors.length; i++) {
        const w = neighbors[i]//获得邻居节点
        if (color[w] === Colors.WHITE) {//如果未被访问
          color[w] = Colors.GREY//设置成灰色
          queun.enqueue(w)//移除队列
        }

      }
      //遍历完相邻节点后 设置成黑
      color[u] = Colors.BLACK
      if (callback) {
        callback(u)
      }
    }

  }
  //深度优先算法
  const depthFirstSearch = (graph, callback) => {
    //获取节点集合
    const vertices = graph.getVeritices()
    //获取关系集合
    const adjList = graph.getAdjList()
    //初始化颜色
    const color = initializeColor(vertices)

    for (let i = 0; i < vertices.length; i++) {
      if(color[vertices[i]] === Colors.WHITE){
        //如果节点是白色为访问，调用私有递归函数
        depthFirstSearchVisit(vertices[i], color, adjList,callback)
      }
    }
  }
  //私有递归函数
  const depthFirstSearchVisit = (u, color, adjList, callback) => {
    // 访问节点 标记为灰色
    color[u] = Colors.GREY
    //调用回调函数
    if(callback){
      callback(u)
    }
    // 获得邻居
    const neighbors = adjList.get(u)
    //遍历邻居 如果是白色为访问递归
    for (let i = 0; i < neighbors.length; i++) {
      
      const w = neighbors[i];
      if(color[w] === Colors.WHITE){
        depthFirstSearchVisit(w, color, adjList, callback)
      }
    }
    color[u] = Colors.BLACK
  }

  class Graph {
    constructor(isDirected = false) {
      this.isDirected = isDirected //是否有向
      this.vertices = []//顶点存储数组
      this.adjList = new Map()
    }

    //向数组存储对象中加入顶点
    addVertex(v) {
      //判重
      if (!this.vertices.includes(v)) {
        //插入
        this.vertices.push(v)
        //邻接表
        this.adjList.set(v, [])
      }
    }
    //存入顶点，建立链接 传入两个顶点
    addEdge(v, w) {
      //如果为空添加进 顶点存储数组
      if (!this.adjList.get(v)) {
        this.addVertex(v)
      }
      //如果为空添加进 顶点存储数组
      if (!this.adjList.get(w)) {
        this.addVertex(w)
      }
      //添加V到W的边
      this.adjList.get(v).push(w)
      //如果有向 反向添加边
      if (!this, this.isDirected) {
        this.adjList.get(w).push(v)
      }
    }

    getVeritices() {
      return this.vertices
    }
    getAdjList() {
      return this.adjList
    }




    toString() {
      console.log(this.vertices)
      Array.from(this.adjList.keys()).forEach(adjkey => {
        console.log(`${adjkey} --> ${this.adjList.get(adjkey).join(',')}`)
      });
    }
  }
  function initFunc() {
    console.log(domName)
    const graph = new Graph(true)
    graph.addEdge('A', 'B')
    graph.addEdge('A', 'C')
    graph.addEdge('A', 'D')
    graph.addEdge('C', 'D')
    graph.addEdge('C', 'G')
    graph.addEdge('D', 'G')
    graph.addEdge('D', 'H')
    graph.addEdge('B', 'E')
    graph.addEdge('B', 'F')
    graph.addEdge('B', 'I')
    // console.log(initializeColor(graph.vertices))
    graph.toString()
    let myVertices = graph.getVeritices()
    // breadthFirstSearch(graph, myVertices[0], printVertex)
    depthFirstSearch(graph, printVertex)


  }
  let domName = 'graph'
  document.getElementById(domName).addEventListener('click', initFunc)

  //队列
  class Queun {
    constructor() {
      this.count = 0//控制队列大小
      this.lowestCount = 0//第一个元素的key
      this.items = {}//数据保存对象
    }
    //像队列尾部添加数据
    enqueue(element) {
      this.items[this.count + this.lowestCount] = element
      this.count++
    }
    //移除队列第一项
    dequeue() {
      if (this.isEmpty()) {
        console.log(this.items)
        return undefined
      }
      const result = this.items[this.lowestCount]
      delete this.items[this.lowestCount]
      this.lowestCount++
      this.count--
      return result
    }

    //返回队列中第一个元素
    peek() {
      if (this.isEmpty()) {
        return undefined
      }
      return this.items[this.lowestCount]
    }
    //队列是否为空
    isEmpty() {
      return this.size() === 0
    }
    //返回队列个数
    size() {
      return this.count
    }
    //清空队列
    clear() {
      this.count = 0//控制队列大小
      this.lowestCount = 0//TODO
      this.items = {}//数据保存对象
    }
    //toString
    toString() {
      console.log(JSON.stringify(this.items))
    }
  }



})()