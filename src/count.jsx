
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
    <div>
      <div>
        <input className="w-full px-10 active:border-0 text-white focus:outline-none py-10 pe-5 text-3xl font-semibold pt-25 pb-5 text-end" type="text" readOnly value={value}/>
      </div>
        
        <div className="fixed bottom-0 w-full px-5 mb-5 grid-rows-4 gap-8 mt-10 text-white grid rounded-xl">
          <div className="grid grid-cols-4 text-2xl text-semibold place-items-center">
            <button  className=" md:w-25 md:h-25 w-20 h-20 border-e-1 border-fuchsia-200  rounded-full bg-radial from-fuchsia-400 from-40% to-fuchsia-950 active:bg-bg-black" type="button" value="c" onClick={handleClear} >C</button>
           <button className=" md:w-25 md:h-25 w-20 h-20 border-e-1 border-fuchsia-200  rounded-full bg-radial from-fuchsia-400 from-40% to-fuchsia-950 active:bg-black" type="button" value="d" onClick={e => setValue(value.slice(0, -1))} >DEL</button>
           <button className=" md:w-25 md:h-25 w-20 h-20 border-e-1 border-fuchsia-200  rounded-full bg-radial from-fuchsia-400 from-40% to-fuchsia-950 active:bg-black" type="button" value="%" onClick={handPercent} >%</button>
           <button className=" md:w-25 md:h-25 w-20 h-20 border-e-1 border-fuchsia-200  rounded-full bg-radial from-fuchsia-400 from-40% to-fuchsia-950 active:bg-black" type="button" value="/" onClick={e => setValue(value + e.target.value)} >/</button>
          </div>
          <div className="grid text-2xl text-semibold grid-cols-4 place-items-center">
            <button className=" md:w-25 md:h-25 w-20 h-20 border-e-1 border-fuchsia-200  rounded-full bg-radial from-pink-400 from-40% to-fuchsia-700 active:bg-bg-black" type="button" value="7" onClick={e => setValue(value + e.target.value)} >7</button>
           <button className=" md:w-25 md:h-25 w-20 h-20 border-e-1 border-fuchsia-200  rounded-full bg-radial from-pink-400 from-40% to-fuchsia-700 active:bg-black" type="button" value="8" onClick={e => setValue(value + e.target.value)} >8</button>
           <button className=" md:w-25 md:h-25 w-20 h-20 border-e-1 border-fuchsia-200  rounded-full bg-radial from-pink-400 from-40% to-fuchsia-700 active:bg-black" type="button" value="9" onClick={e => setValue(value + e.target.value)} >9</button>
           <button className=" md:w-25 md:h-25 w-20 h-20 border-e-1 border-fuchsia-200  rounded-full bg-radial from-fuchsia-400 from-40% to-fuchsia-950 active:bg-black" type="button" value="*" onClick={e => setValue(value + e.target.value)} >x</button>
          </div>
           <div className="grid grid-cols-4 text-2xl text-semibold place-items-center">
            <button className=" md:w-25 md:h-25 w-20 h-20 border-e-1 border-fuchsia-200  rounded-full bg-radial from-pink-400 from-40% to-fuchsia-700 active:bg-black" type="button" value="4" onClick={e => setValue(value + e.target.value)} >4</button>
           <button className=" md:w-25 md:h-25 w-20 h-20 border-e-1 border-fuchsia-200  rounded-full bg-radial from-pink-400 from-40% to-fuchsia-700 active:bg-black" type="button" value="5" onClick={e => setValue(value + e.target.value)} >5</button>
           <button className=" md:w-25 md:h-25 w-20 h-20 border-e-1 border-fuchsia-200  rounded-full bg-radial from-pink-400 from-40% to-fuchsia-700 active:bg-black" type="button" value="6" onClick={e => setValue(value + e.target.value)} >6</button>
           <button className=" md:w-25 md:h-25 w-20 h-20 border-e-1 border-fuchsia-200  rounded-full bg-radial from-fuchsia-400 from-40% to-fuchsia-950 active:bg-black" type="button" value="-" onClick={e => setValue(value + e.target.value)} >-</button>
           </div>
           <div className="grid grid-cols-4 text-2xl text-semibold place-items-center">
            <button className=" md:w-25 md:h-25 w-20 h-20 border-e-1 border-fuchsia-200  rounded-full bg-radial from-pink-400 from-40% to-fuchsia-700 active:bg-black" type="button" value="1" onClick={e => setValue(value + e.target.value)} >1</button>
           <button className=" md:w-25 md:h-25 w-20 h-20 border-e-1 border-fuchsia-200  rounded-full bg-radial from-pink-400 from-40% to-fuchsia-700 active:bg-black" type="button" value="2" onClick={e => setValue(value + e.target.value)} >2</button>
           <button className=" md:w-25 md:h-25 w-20 h-20 border-e-1 border-fuchsia-200  rounded-full bg-radial from-pink-400 from-40% to-fuchsia-700 active:bg-black" type="button" value="3" onClick={e => setValue(value + e.target.value)} >3</button>
           <button className=" md:w-25 md:h-25 w-20 h-20 border-e-1 border-fuchsia-200  rounded-full bg-radial from-fuchsia-400 from-40% to-fuchsia-950 active:bg-black" type="button" value="+" onClick={e => setValue(value + e.target.value)} >+</button>
           </div>
           <div className="grid grid-cols-4 text-2xl text-semibold place-items-center">
            <button className=" md:w-25 md:h-25 w-20 h-20 border-e-1 border-fuchsia-200  rounded-full bg-radial from-pink-400 from-40% to-fuchsia-700 active:bg-black" type="button" value="00" onClick={e => setValue(value + e.target.value)} >00</button>
           <button className=" md:w-25 md:h-25 w-20 h-20 border-e-1 border-fuchsia-200  rounded-full bg-radial from-pink-400 from-40% to-fuchsia-700 active:bg-black" type="button" value="0" onClick={e => setValue(value + e.target.value)} >0</button>
           <button className=" md:w-25 md:h-25 w-20 h-20 border-e-1 border-fuchsia-200  rounded-full bg-radial from-pink-400 from-40% to-fuchsia-700 active:bg-black" type="button" value="." onClick={e => setValue(value + e.target.value)} >.</button>
           <button className=" md:w-25 md:h-25 w-20 h-20 border-e-1 border-fuchsia-200  rounded-full bg-radial from-fuchsia-400 from-40% to-fuchsia-950 active:bg-black" type="button" value="=" onClick={e => setValue(eval(value))} >=</button>
           </div>
        </div>
    </div>
  );
}