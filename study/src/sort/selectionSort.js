(function(){
  let domName = 'selectionSort'

  function swap(array, a, b){
    [array[a], array[b]] = [array[b], array[a]]
  }

  function selectionSort(array){
    const { length } = array
    let indexMin
    for (let i = 0; i < length - 1; i++) {
      indexMin = i
      for (let j = i; j < length; j++) {
        if(array[indexMin] > array[j]){
          indexMin = j
        }
      }
      if(i !== indexMin){
        swap(array, i, indexMin)
      }

    }

    return array
  }

  function initfunc(){
    console.log(domName)
    let array = [2,4,1,8,3,0,12,9]
    console.log(selectionSort(array))
  }

  document.getElementById(domName).addEventListener('click', initfunc)
})()