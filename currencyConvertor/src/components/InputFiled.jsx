import React,{useId} from "react"

function InputFiled(
    label,
    amount,
    convAmount,
    convertType,
    options,
    selected = "usd"
) {
    let amountId = useId();
     return(
     <div className={`bg-white p-3 rounded-lg text-sm flex `}>
            <div className="w-1/2">
                <label  className="text-black/40 mb-2 inline-block">
                    lable
                </label>
                <input
                    id={amountId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    value={amount}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    value={convertType}
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                >
                    
                        <option value={options}>
                            usd
                        </option>
                
                </select>
            </div>
        </div>
     )
}

export default InputFiled
