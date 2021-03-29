import './App.css';
import Profilecomponent from './profile/Profilecomponent'
import myimage from './profile/manel.jpeg'
function App() {
  function handleName(name){
    alert(`Hello my name is ${name}`)
  }

  return (
    <div className="App">
      <Profilecomponent
      fullName="Manel ALOUI"
      bio="Hi guys, I'm Manel ALOUI, an engineer who loves writing novels, You are welcome to visit my profile!!"
      profession="Junior data scientist and a full stack web developer"
      handleName={handleName}
      >
      <img 
      style={{borderRadius: "100%", width: "200px", height: "200px"}}
      src ={myimage}
      alt= "my_profile_picturee"
      />
      </Profilecomponent>
    </div>
  );
}

export default App;
