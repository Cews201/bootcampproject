import logo from './logo.svg';
import './App.css';
import Perfil from './components/perfil';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Mis desarrolladores favoritos son: </h1>
        <Perfil
        nombre= 'Brais Moure'
        pais='España'
        imagen='brais'
        cargo='Ingeniero de Software'
        empresa='MoureDev'
        perfil='Es un youtuber español, especializado en desarrollo web,  de desarrollo de software MoureDev'

        />
        <Perfil
        nombre= 'Facundo'
        pais='España'
        imagen='facundo'
        cargo='Ingeniero de Software'
        empresa='MoureDev'
        perfil='Es un youtuber español, especializado en desarrollo web,  de desarrollo de software MoureDev'

        />
        <Perfil
        nombre= 'Midudev'
        pais='España'
        imagen='midu'
        cargo='Ingeniero de Software'
        empresa='MiduDev'
        perfil='Ingeniero de Software & JavaScript
        ⭐ GitHub Star · Google Dev Expert · Microsoft MVP
        🔴 Twitch Partner: http://twitch.tv/midudev
        🗣️ Discord: http://discord.gg/midudev'

        />
      </div>
    </div>
  );
}

export default App;
