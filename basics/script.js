// const heading = React.createElement('h1', {}, React.createElement('div', {}, React.createElement('div', {}, [React.createElement('h1', {key:1}, "I am h1 Element"), React.createElement('h2', {key:2}, "i am h2 element")])))
// const root = ReactDOM.createRoot(document.getElementById("root"))
// console.log(root)
// root.render(heading)

let y = {}
let x = ()=>{console.log(this)}

x(); //window

y.y.x = x

y.y.x();



