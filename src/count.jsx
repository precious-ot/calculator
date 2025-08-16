
import { useState } from "react";

export default function Count(){
    const [value, setValue] = useState('');
    const handleClear = () => {
        setValue('');
    }

    const handPercent = () => {
      setValue(value / 100);
    }
   
  return(
    <div className="">
      <div className="">
        <input className="w-full px-10 text-white py-10 pe-5 text-2xl font-semibold pt-25 pb-5 text-end" type="text" value={value}/>
      </div>
        
        <div className="fixed bottom-0 w-full grid-rows-4  mt-10 bg-neutral-900 divide-y-1 divide-neutral-950  text-white grid rounded-xl">
          <div className="grid grid-cols-4 text-2xl text-semibold divide-x-1 divide-neutral-950 place-items-center">
            <button  className="py-10 w-full bg-neutral-800 active:bg-neutral-950" type="button" value="c" onClick={handleClear} >c</button>
           <button className="py-10 w-full bg-neutral-800 active:bg-neutral-950" type="button" value="%" onClick={handPercent} >%</button>
           <button className="py-10 w-full bg-neutral-800 active:bg-neutral-950" type="button" value="d" onClick={e => setValue(value.slice(0, -1))} >d</button>
           <button className="py-10 w-full bg-neutral-800 active:bg-neutral-950" type="button" value="/" onClick={e => setValue(value + e.target.value)} >/</button>
          </div>
          <div className="grid text-2xl text-semibold grid-cols-4 divide-x-1 divide-neutral-950">
            <button className="py-10 w-full active:bg-neutral-800" type="button" value="7" onClick={e => setValue(value + e.target.value)} >7</button>
           <button className="py-10 w-full active:bg-neutral-800" type="button" value="8" onClick={e => setValue(value + e.target.value)} >8</button>
           <button className="py-10 w-full active:bg-neutral-800" type="button" value="9" onClick={e => setValue(value + e.target.value)} >9</button>
           <button className="py-10 w-full bg-neutral-800 active:bg-neutral-950" type="button" value="*" onClick={e => setValue(value + e.target.value)} >x</button>
          </div>
           <div className="grid grid-cols-4 text-2xl text-semibold divide-x-1 divide-neutral-950">
            <button className="py-10 w-full active:bg-neutral-800" type="button" value="4" onClick={e => setValue(value + e.target.value)} >4</button>
           <button className="py-10 w-full active:bg-neutral-800" type="button" value="5" onClick={e => setValue(value + e.target.value)} >5</button>
           <button className="py-10 w-full active:bg-neutral-800" type="button" value="6" onClick={e => setValue(value + e.target.value)} >6</button>
           <button className="py-10 w-full bg-neutral-800 active:bg-neutral-950" type="button" value="-" onClick={e => setValue(value + e.target.value)} >-</button>
           </div>
           <div className="grid grid-cols-4 text-2xl text-semibold divide-x-1 divide-neutral-950">
            <button className="py-10 w-full active:bg-neutral-800" type="button" value="1" onClick={e => setValue(value + e.target.value)} >1</button>
           <button className="py-10 w-full active:bg-neutral-800" type="button" value="2" onClick={e => setValue(value + e.target.value)} >2</button>
           <button className="py-10 w-full active:bg-neutral-800" type="button" value="3" onClick={e => setValue(value + e.target.value)} >3</button>
           <button className="py-10 w-full bg-neutral-800 active:bg-neutral-950" type="button" value="+" onClick={e => setValue(value + e.target.value)} >+</button>
           </div>
           <div className="grid grid-cols-4 text-2xl text-semibold divide-x-1 divide-neutral-950">
            <button className="py-10 w-full active:bg-neutral-800" type="button" value="00" onClick={e => setValue(value + e.target.value)} >00</button>
           <button className="py-10 w-full active:bg-neutral-800" type="button" value="0" onClick={e => setValue(value + e.target.value)} >0</button>
           <button className="py-10 w-full active:bg-neutral-800" type="button" value="." onClick={e => setValue(value + e.target.value)} >.</button>
           <button className="py-10 w-full bg-neutral-800 active:bg-neutral-950" type="button" value="=" onClick={e => setValue(eval(value))} >=</button>
           </div>
        </div>
    </div>
  );
}