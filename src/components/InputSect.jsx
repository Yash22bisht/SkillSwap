
const InputSect = (props) => {
    return (
        <div className={`${props.for}  flex items-center  w-[75%] `} >
            <img src={props.src} alt="" className="relative left-10 w-8 h-8" />
            <input
                type={props.type}
                placeholder={props.placeholder}
                className="w-full px-14 py-2  rounded-lg text-lg font-semibold border-2 border-gray-300 shadow-md shadow-teal-500 focus:outline-none text-gray-500"
            />
        </div>
    )
}

export default InputSect
