class CommonCode {
  constructor(domId){
    document.getElementById(domId).addEventListener('click', this.initFunc)
  }
  initFunc(){
    console.log(111)
  }
}