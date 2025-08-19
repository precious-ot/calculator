
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
        <input className="w-full active:border-0 text-white focus:outline-none pe-5 text-3xl font-semibold pt-25 text-end" type="text" readOnly value={value}/>
      </div>
        
        <div className=" w-full px-5 mb-5 grid-rows-4 mt-10 gap-4 sm:gap-12 md:gap-4 text-white grid">
          <div className="grid grid-cols-4 text-2xl gap-1 text-semibold place-items-center">
            <button  className=" w-16 h-16  md:w-20 md:h-20 text-4xl font-semibold  border-e-1 border-fuchsia-200  rounded-full bg-radial from-fuchsia-400 from-40% to-fuchsia-950 active:bg-bg-black" type="button" value="c" onClick={handleClear} >C</button>
           <button className="  w-16 h-16  md:w-20 md:h-20 text-2xl font-semibold  border-e-1 border-fuchsia-200  rounded-full bg-radial from-fuchsia-400 from-40% to-fuchsia-950 active:bg-black" type="button" value="d" onClick={e => setValue(value.slice(0, -1))} >DEL</button>
           <button className="  w-16 h-16  md:w-20 md:h-20 text-4xl font-semibold  border-e-1 border-fuchsia-200  rounded-full bg-radial from-fuchsia-400 from-40% to-fuchsia-950 active:bg-black" type="button" value="%" onClick={handPercent} >%</button>
           <button className="  w-16 h-16  md:w-20 md:h-20 text-4xl font-semibold  border-e-1 border-fuchsia-200  rounded-full bg-radial from-fuchsia-400 from-40% to-fuchsia-950 active:bg-black" type="button" value="/" onClick={e => setValue(value + e.target.value)} >/</button>
          </div>
          <div className="grid text-2xl gap-2 text-semibold grid-cols-4 place-items-center">
            <button className="  w-16 h-16  md:w-20 md:h-20 text-4xl font-semibold  border-e-1 border-fuchsia-200  rounded-full bg-radial from-pink-400 from-40% to-fuchsia-700 active:bg-bg-black" type="button" value="7" onClick={e => setValue(value + e.target.value)} >7</button>
           <button className="  w-16 h-16  md:w-20 md:h-20 text-4xl font-semibold  border-e-1 border-fuchsia-200  rounded-full bg-radial from-pink-400 from-40% to-fuchsia-700 active:bg-black" type="button" value="8" onClick={e => setValue(value + e.target.value)} >8</button>
           <button className="  w-16 h-16  md:w-20 md:h-20 text-4xl font-semibold  border-e-1 border-fuchsia-200  rounded-full bg-radial from-pink-400 from-40% to-fuchsia-700 active:bg-black" type="button" value="9" onClick={e => setValue(value + e.target.value)} >9</button>
           <button className="  w-16 h-16  md:w-20 md:h-20 text-4xl font-semibold  border-e-1 border-fuchsia-200  rounded-full bg-radial from-fuchsia-400 from-40% to-fuchsia-950 active:bg-black" type="button" value="*" onClick={e => setValue(value + e.target.value)} >x</button>
          </div>
           <div className="grid grid-cols-4 text-2xl gap-2 text-semibold place-items-center">
            <button className="  w-16 h-16  md:w-20 md:h-20 text-4xl font-semibold  border-e-1 border-fuchsia-200  rounded-full bg-radial from-pink-400 from-40% to-fuchsia-700 active:bg-black" type="button" value="4" onClick={e => setValue(value + e.target.value)} >4</button>
           <button className="  w-16 h-16  md:w-20 md:h-20 text-4xl font-semibold  border-e-1 border-fuchsia-200  rounded-full bg-radial from-pink-400 from-40% to-fuchsia-700 active:bg-black" type="button" value="5" onClick={e => setValue(value + e.target.value)} >5</button>
           <button className="  w-16 h-16  md:w-20 md:h-20 text-4xl font-semibold  border-e-1 border-fuchsia-200  rounded-full bg-radial from-pink-400 from-40% to-fuchsia-700 active:bg-black" type="button" value="6" onClick={e => setValue(value + e.target.value)} >6</button>
           <button className="  w-16 h-16  md:w-20 md:h-20 text-4xl font-semibold  border-e-1 border-fuchsia-200  rounded-full bg-radial from-fuchsia-400 from-40% to-fuchsia-950 active:bg-black" type="button" value="-" onClick={e => setValue(value + e.target.value)} >-</button>
           </div>
           <div className="grid grid-cols-4 text-2xl gap-2 text-semibold place-items-center">
            <button className="  w-16 h-16  md:w-20 md:h-20 text-4xl font-semibold  border-e-1 border-fuchsia-200  rounded-full bg-radial from-pink-400 from-40% to-fuchsia-700 active:bg-black" type="button" value="1" onClick={e => setValue(value + e.target.value)} >1</button>
           <button className="  w-16 h-16  md:w-20 md:h-20 text-4xl font-semibold  border-e-1 border-fuchsia-200  rounded-full bg-radial from-pink-400 from-40% to-fuchsia-700 active:bg-black" type="button" value="2" onClick={e => setValue(value + e.target.value)} >2</button>
           <button className="  w-16 h-16  md:w-20 md:h-20 text-4xl font-semibold  border-e-1 border-fuchsia-200  rounded-full bg-radial from-pink-400 from-40% to-fuchsia-700 active:bg-black" type="button" value="3" onClick={e => setValue(value + e.target.value)} >3</button>
           <button className="  w-16 h-16  md:w-20 md:h-20 text-4xl font-semibold  border-e-1 border-fuchsia-200  rounded-full bg-radial from-fuchsia-400 from-40% to-fuchsia-950 active:bg-black" type="button" value="+" onClick={e => setValue(value + e.target.value)} >+</button>
           </div>
           <div className="grid grid-cols-4 text-2xl gap-2 text-semibold place-items-center">
            <button className="  w-16 h-16  md:w-20 md:h-20 text-4xl font-semibold  border-e-1 border-fuchsia-200  rounded-full bg-radial from-pink-400 from-40% to-fuchsia-700 active:bg-black" type="button" value="00" onClick={e => setValue(value + e.target.value)} >00</button>
           <button className="  w-16 h-16  md:w-20 md:h-20 text-4xl font-semibold  border-e-1 border-fuchsia-200  rounded-full bg-radial from-pink-400 from-40% to-fuchsia-700 active:bg-black" type="button" value="0" onClick={e => setValue(value + e.target.value)} >0</button>
           <button className="  w-16 h-16  md:w-20 md:h-20 text-4xl font-semibold  border-e-1 border-fuchsia-200  rounded-full bg-radial from-pink-400 from-40% to-fuchsia-700 active:bg-black" type="button" value="." onClick={e => setValue(value + e.target.value)} >.</button>
           <button className="  w-16 h-16  md:w-20 md:h-20 text-4xl font-semibold  border-e-1 border-fuchsia-200  rounded-full bg-radial from-fuchsia-400 from-40% to-fuchsia-950 active:bg-black" type="button" value="=" onClick={e => setValue(eval(value))} >=</button>
           </div>
        </div>
    </div>
  );
}