

const Input = ({label, type, name, placeholder, handleInput, value, labelStyle, disabled}) => {
  return (
    <div className="w-full">
        <label for={name} className={`block text-sm ${labelStyle} font-medium mb-2`}>{label}</label>
        <input  onChange={handleInput} type={type} id={name} name={name} disabled={disabled} value={value} className="py-2.5 px-4 block w-full border-[#D8E0F0] text-[#7D8592] outline-none border placeholder:text-[#7D8592] font-normal shadow-sm rounded-xl text-sm focus:border-[#D8E0F0] focus:ring-[#D8E0F0] disabled:opacity-50 disabled:pointer-events-none"  placeholder={placeholder}></input>
    </div>
  )
}

export default Input