(function(){
  let domName = 'insertionSort'
  function initfunc(){
    console.log(domName)
    let array = [2,4,1,8,3,0,12,9]
    console.log(insertionSort(array))
  }

  function insertionSort(array){
    const { length } = array
    let temp
    for (let i = 0; i < length; i++) {
      let j = i
      temp = array[i]
      while(j > 0 && array[j-1] > temp){
        // debugger
        array[j] = array[j - 1]
        j--
      }
      array[j] = temp
      
    }
    return array
  }

  document.getElementById(domName).addEventListener('click', initfunc)
})()