

const root = document.getElementById('root')

// function tagMaker(tag,parents,id,callback){
//   let element = document.createElement(tag)
//   element.setAttribute("id",id)
//   parents.appendChild(element)
  
// }
function tagMaker(tag, parents, id, callback) { // callback으로 element를 반환
  const element = document.createElement(tag);
    element.id = id;
    parents.appendChild(element);
  if (callback) {
    callback(element);
  }
  return element;
}

//생성 +getElementByid 같이
const rootHeader = tagMaker("div",root,"header") 

console.dir(rootHeader) // div#header
rootHeader.appendChild(document.createElement('form')) // 생성
