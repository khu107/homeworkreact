
import './App.css';
import Content from './content';
import rasm1 from '../src/asset/home-image-1.jpg'
import rasm2 from '../src/asset/home-image-2.jpg'
import rasm3 from '../src/asset/home-image-3.jpg'
import rasm4 from '../src/asset/user-image-1.jpg'
import rasm5 from '../src/asset/user-image-2.jpg'
import rasm6 from '../src/asset/user-image-3.jpg'

import sv from '../src/svg/Vector.svg'
import sv1 from '../src/svg/tualet.svg'
import sv2 from '../src/svg/car.svg'
import sv3 from '../src/svg/razmer.svg'

const data = [
  {id:1, img:rasm1, avatarimg: rasm4, like: sv, tualet: sv1, car: sv2, razmer: sv3},
  {id:2, img:rasm2, avatarimg: rasm5, like: sv, tualet: sv1, car: sv2, razmer: sv3},
  {id:3, img:rasm3, avatarimg: rasm6, like: sv, tualet: sv1, car: sv2, razmer: sv3}
]




function App() {
  return (
    <div className="App">
      <div  className='headtitle'>
      <h1>Recommended</h1>
      <p>Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</p>
      </div>
      <div className='con'>{
      data.map((v,i)=>{
          return(
            <Content  data={v}/>
          )
        })
      }
      {/* <Content img={rasm1} /> */}
      </div>
      
    </div>
  );
}

export default App;
