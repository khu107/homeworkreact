
import './App.css';
import Content from './content';
import rasm1 from '../src/asset/home-image-1.jpg'
import rasm2 from '../src/asset/home-image-2.jpg'
import rasm3 from '../src/asset/home-image-1.jpg'
import rasm4 from '../src/asset/user-image-1.jpg'
import rasm5 from '../src/asset/user-image-2.jpg'
import rasm6 from '../src/asset/user-image-3.jpg'

const data = [
  {id:1, img:{rasm1}, avatarimg:{rasm4} },
  {id:1, img:{rasm2}, avatarimg:{rasm5} },
  {id:1, img:{rasm3}, avatarimg:{rasm6} }
]
console.log(data);



function App() {
  return (
    <div className="App">
      <div  className='headtitle'>
      <h1>Recommended</h1>
      <p>Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</p>
      </div>
      <div>{
        data.map((v,i)=>{
          return(
            <Content  data={v.img}/>
          )
        })
      }
      {/* <Content img={rasm1} /> */}
      </div>
      
    </div>
  );
}

export default App;
