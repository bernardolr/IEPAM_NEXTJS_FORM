import Navbar from '../components/navBar'
import Form from './form'
//import image from '../images/iepamLogo.png'

export default function Home() {
  return (
    <div class="bg-gray-50">
      <div class="container ">
        <div id="iepamLogo" class="text-center">
          <img src='../images/iepamLogo.png'/>
        </div>
        <div class="col-sm-12">
          <div class='card' >
            <h5 class='card-header'>Formulario</h5>
            <div class='card-body'>
              <Form />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
