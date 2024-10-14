import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";
import ReposList from "./components/ReposList";

function App() {
  const [formularioEstaVisivivel, setFormularioEstaVisivel];
  const [nomeUsuario, setNomeUsuario] = useState('');
    return(
    <>
    <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)}/>
    <>
    <Perfil nomeUsuario={nomeUsuario}/>
    <ReposList nomeUsuario={nomeUsuario}/>
    </>
    {/*<Formulario/>*/}
    </>
  )
}

export default App
