//数组
(function(){
  let domName = 'array'
  
  const initFunc = () => {
    console.log(domName)
  }



  document.getElementById(domName).addEventListener('click', initFunc)
})()
// 数组的优缺点
// 构建非常简单
// 能在 O(1) 的时间里根据数组的下标（index）查询某个元素
// 而数组的缺点在于：
// 构建时必须分配一段连续的空间
// 查询某个元素是否存在时需要遍历整个数组，耗费 O(n) 的时间（其中，n 是元素的个数）
// 删除和添加某个元素时，同样需要耗费 O(n) 的时间
// 所以，当你在考虑是否应当采用数组去辅助你的算法时，请务必考虑它的优缺点，看看它的缺点是否会阻碍你的算法复杂度以及空间复杂度。
