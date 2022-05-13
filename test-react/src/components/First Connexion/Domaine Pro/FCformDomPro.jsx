import React, {useState} from 'react'

 const Form = () => {
  
    const [value,setValue] = useState('');
    const [val,setValuePro] = useState('');


    const handleSubmit = e => {
      e.preventDefault();
      console.log(value)
      console.log("activité pro:",val)
    }
    
  
  
  return (
    
    <div>
    <form id="formulaireDomPro" onSubmit={handleSubmit}>
      <fieldset>
        <legend>Etes vous étudiant ?</legend>
        <div>
          <input type="radio" id="oui" name="check" value="oui"/>
            <label for="oui">Oui</label>
            
          <input type="radio" id="non" name="check" value="non" checked/>
            <label for="non">Non</label>
        </div>
        <div>
          <label for="text1">Indiquer votre domaine d'activité</label><br/>
				      <input type="text" onChange={e => setValue(e.target.value)} name="activite" id="activite"/><br/>
			    <label for= "text2">Indiquer votre activité professionnelle</label><br/>
				      <input type="text" onChange={e => setValuePro(e.target.value)} name="pro" id="pro"/><br/>
        </div>  
        <div>
          <button>Suivant</button>
          
         
        </div>

      </fieldset>
         
    </form>

    </div>
  )
}
export default Form