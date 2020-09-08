(function(){
  let domName = 'bubbleSort'

  function bubbleSort(array){
    const { length } = array
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length; j++) {
        if(array[j] > array[j + 1]){
          [array[j], array[j+1]] = [array[j+1], array[j]]
        }
      }
    }

    return array
  }


  function initFunc(){
    console.log(domName)
    let array = [2,4,1,8,3,0,12,9]
    console.log(bubbleSort(array))
    
  }

  document.getElementById('bubbleSort').addEventListener('click', initFunc)
})()