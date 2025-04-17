const SezioniLaDiscalculia= (props)=>{
const isReverseColumns= props.reverseColumns
const isReverse= props.reverse
const isLastRevers= props.lastReverse
    return (
    
    <>

<div className= "ml-10  rounded-tl-4xl rounded-bl-4xl  mt-[-17 px]" style={{ backgroundColor: `#${props.bg}` }}>
<h2 className="p-3 text-white font-medium text-2xl">{props.title}</h2>
</div>

<div className={`relative flex mt-2 ${isReverseColumns ? "flex-col items-center" : isReverse ? "flex-row-reverse gap-6 mr-2.5": isLastRevers ? "pb-14" :"flex-row gap-7  "}`}>
<p className={`ml-3.5 text-[14px] pt-4 font-medium  ${isLastRevers ? "ml-24   " : ""}`}> {props.text} </p>
<img src={props.srcImg} alt="" className={` ${isLastRevers ? "w-30 absolute bottom-[-28px]" :"w-30 m-3.5 z-1"}`} />
</div>
        
</>

    )
}
export default SezioniLaDiscalculia;