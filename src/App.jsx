import React from "react";

function App(){
    const [expression,setExpression] = React.useState("");
    const [answer,setAnswer] = React.useState(0);

    const display = (symbol) => {
        setExpression((prev) => prev + symbol);
        if(expression[expression.length-1] == "="){
            if(/[0-9.]/.test(symbol)){
                setExpression(symbol)
            }else{
                setExpression(answer + symbol);
            }
        }
    };

    const calculate = () =>{
        setAnswer(eval(expression));
        setExpression((prev) => prev + "=");
    };

    const allClear = () => {
        setExpression("");
        setAnswer(0);
    };
    const clear = () => {
        setExpression((prev) => 
            prev
            .split("")
            .slice(0,prev.length-1)
            .join("")
        );
        setAnswer(0);
    };

    return(
        <div className ="container">
            <div className="box">
               <div className="dis">
                   <input type="text" value={expression} placeholder="0" disabled/>
                    <div className="total">{answer}</div>
               </div>
               <div onClick={clear}className="click-btns C red">C</div>
               <div onClick={allClear}className="click-btns AC red">AC</div>
               <div onClick={() =>display("/")}className="click-btns div">/</div>
               <div onClick={() =>display("*")}className="click-btns mult">x</div>
               <div onClick={() =>display("7")}className="click-btns seven dark">7</div>
               <div onClick={() =>display("8")}className="click-btns eight dark">8</div>
               <div onClick={() =>display("9")}className="click-btns nine dark">9</div>
               <div onClick={() =>display("-")}className="click-btns minus">-</div>
               <div onClick={() =>display("4")}className="click-btns four dark">4</div>
               <div onClick={() =>display("5")}className="click-btns five dark">5</div>
               <div onClick={() =>display("6")}className="click-btns six dark">6</div>
               <div onClick={() =>display("+")}className="click-btns add">+</div>
               <div onClick={() =>display("1")}className="click-btns one dark">1</div>
               <div onClick={() =>display("2")}className="click-btns two dark">2</div>
               <div onClick={() =>display("3")}className="click-btns three dark">3</div>
               <div onClick={calculate}className="click-btns equals blue">=</div>
               <div onClick={() =>display("0")}className="click-btns zero dark">0</div>
               <div onClick={() =>display(".")}className="click-btns dot dark">.</div>
               
            </div>
        </div>
    );
}



export default App;