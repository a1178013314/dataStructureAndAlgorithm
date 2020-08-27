// export function defaultEquals(a, b){
//   return a === b
// }

(function () {
  function defaultEquals(a, b) {
    return a === b
  }


  window.util = {
    defaultEquals
  }
})(window)