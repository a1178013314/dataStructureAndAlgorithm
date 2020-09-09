(function(){
  let domName = 'mergeSort'

  function merge(left, right){
    let i = 0
    let j = 0
    const result = []
    while(i<left.length && j<right.length){
      result.push(
        left[i] < right[j]? left[i++] : right[j++]
      )
    }

    return result.concat(i < left.length? left.slice(i):right.slice(j))
  }

  function mergeSort(array){
    if(array.length > 1){
      const { length } = array
      const middle = Math.floor(length / 2)
      const left =  mergeSort(array.slice(0, middle))
      const right =  mergeSort(array.slice(middle,length))
      array = merge(left, right)
    }

    return array
  }

  function initFunc(){
    console.log(domName)
    let array = [2,4,1,8,3,0,12,9]
    console.log(mergeSort(array))
  }


  document.getElementById(domName).addEventListener('click', initFunc)
})()