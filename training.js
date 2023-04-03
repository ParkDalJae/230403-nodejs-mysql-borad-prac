function basicReturnObject (parameterString, parameterNumber, parameterObject){
  //data type check
  if(typeof(parameterString)!=='string'&& typeof(parameterNumber)!=='number' && typeof(parameterObject)!=='object'){
    throw new Error('파라미터 타입이 잘못되었습니다.')
  }
  // 로컬변수 객체 초기화
  let tempObject = {
    a: parameterString,
    b: parameterNumber,
    c: parameterObject
  }
  return tempObject
}

console.log(basicReturnObject('박달재',9133,{name:'박달재',age:20,email:'dv.over931@gmail.com'}))