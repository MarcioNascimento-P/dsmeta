import { BASE_URL } from '../../../utils/request'
import icon from '../../img/Vector.svg'
import './styles.css'
import axios from 'axios'


type Props = {
saleId:number
}

function handleClick(id:number){
  axios(`${BASE_URL}/sales/${id}/notification`)
  .then(response =>{
    console.log ("Sucesso")
  })
}

function NotificationButton({saleId}:Props) {
  return (
    <>
      <div className="dsmeta-red-btn" onClick={()=>handleClick(saleId) }>
        <img src={icon} alt="logo" />
      </div>
      
    </>
  )
}

export default NotificationButton