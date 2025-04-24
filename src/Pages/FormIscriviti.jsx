import Header from "../Components/Header"

const FormIscriviti= ()=>{

    return (
<>
<Header 
   centerIcon={ <p>Iscriviti</p>} 
    leftIcon={<img src="./immagini/icon/arrow-left.svg" className="w-[15px] ml-1" />}/>


<div>
<div className="px-6 mt-4  flex flex-col items-center gap-3 ">
<h1 className="text-[20px] ">Pronti a giocare con Nebula?</h1>
<h4 className="px-4 text-[12.8px]">Compila questo modulo e inizia l’avventura!</h4>
</div>


 <form className="">

<label htmlFor="name" className="mr-4 flex items-center mt-4 ml-9"  >Nome</label>
<input type="text" name="name" class="rounded-full py-2 ml-10 bg-neutral-300 mt-2" />

<label htmlFor="eta" className="mr-4 flex items-center mt-4 ml-9"  >Età</label>
<input type="text" name="eta" class="rounded-full py-2 ml-10 bg-neutral-300 mt-2" />

<label htmlFor="email" className="mr-4 flex items-center mt-4 ml-9"  >Email del genitore </label>
<input type="email" name="email" class="rounded-full px-10 py-2 ml-10 bg-neutral-300 mt-2" />

<label htmlFor="password" className="mr-4 flex items-center mt-4 ml-9"  >Password segreta </label>
<input type="password" name="password" class="rounded-full px-10 py-2 ml-10 bg-neutral-300 mt-2" /> <br />

<div className="flex gap-2 mt-10 ml-8">
  <input type="radio" className="w-10 h-10 mr-2" />
  <label htmlFor="radio" className="text-[15px]"> Ho il permesso del mio genitore per giocare con Nebula!</label>
</div>

</form> 

<div className="mt-10 flex justify-center">
  <button className="text-[16px] px-12 py-4 rounded-4xl bg-[#A7D6E0]" type="submit">
    Inizia l'avventura!
  </button>
</div>


<div className="text-[12px] w-[280px] mt-10 flex items-center mx-auto text-center"  >
<p>Niente pubblicità, niente stress, solo giochi e magia con Nebula!</p>
</div>

</div>
</>
)}


export default FormIscriviti