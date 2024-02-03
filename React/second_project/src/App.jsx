import { useState, useCallback,useEffect,useRef } from "react";

function App() {
  const [length, setLength] = useState(5);
  const [useNumber, setUseNumber] = useState(false);
  const [useChar, setUseChar] = useState(false);
  const [password, setPassword] = useState("");

  const passref =useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklnmopqrstuvwxyz";
    if (useNumber) str += "1234567890";
    if (useChar) str += "!@#$%^&*_-+={}[]~`";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, useNumber, useChar, setPassword]);

  const copyToclipbord=useCallback(()=>{
    passref.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator()
  },[length,useNumber,useChar,passwordGenerator])
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-5 py-8 text-orange-500 bg-gray-800">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className='className="flex shadow rounded-lg overflow-hidden mb-4"'>
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passref}
          />
          <button 
          onClick={copyToclipbord}
          className="outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0">
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex item-center gap-x-1">
            <input
              type="range"
              min={5}
              max={26}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>length: {length}</label>
          </div>
          <div className="flex item-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={useNumber}
              id="numberinput"
              onChange={() => {
                setUseNumber((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="fkex item-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={useChar}
              id="charInput"
              onChange={() => {
                setUseChar((prev) => !prev);
              }}
            />
            <label htmlFor="charinput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
