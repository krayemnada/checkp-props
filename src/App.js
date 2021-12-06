import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Profile from './profile/Profile'
import 'bootstrap/dist/css/bootstrap.min.css';
import imageInSrc from "./img.jpg"
import Header from './header/Header';
import First from './first/First';

function App() {

  let Data ={
    FullName :"Nada Kraiem",
    Bio : "Welcome Everyone",
    Profession :"Full Stack Developer",
    src:{imageInSrc},
    alt :"profile_img",
  }
  return (
    <div className="App" >
      <Header/>
      <First/>
       <Profile FullName={Data.FullName} Bio={Data.Bio} Profession={Data.Profession}>
        
        <img src={Data.src} alt={Data.alt} style={{borderRadius:"50%",width:90,height:90, roundedCircle }}/>
        
        </Profile>
      
      
    </div>
  );
}

export default App;

