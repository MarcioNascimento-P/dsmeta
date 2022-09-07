import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NotificationButton from '../NotificationButton'
import './styles.css'

function SalesCard() {
  return (

    <>
      <div className="dsmeta-card">
        <h2>Vendas</h2>
        <div>

          <div className="dsmeta-form-control-container ">
            <DatePicker
              selected={new Date()}
              onChange={(date: Date) => { }}
              className="dsmeta-form-control"
              dateFormat="dd/MM/yyyy"
            />
          </div>
          <div className="dsmeta-form-control-container ">
            <DatePicker
              selected={new Date()}
              onChange={(date: Date) => { }}
              className="dsmeta-form-control"
              dateFormat="dd/MM/yyyy"
            />
          </div>
        </div>
        <div>
          <table className="dsmeta-sales-table">
            <thead>
              <tr>
                <th className="show577">ID</th>
                <th className="show576">data</th>
                <th>Vendedor</th>
                <th className="show577">Visitas</th>
                <th className="show577">Vendas</th>
                <th>Total</th>
                <th>Notificar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="show577">#341</td>
                <td className="show576" >08/07/2022 </td>
                <td>Anakin</td>
                <td className="show577">15</td>
                <td className="show577">11</td>
                <td>R$ 55300.00</td>
                <td>
                  <div className="dsmeta-red-btn-container">

                    <NotificationButton />

                  </div>
                </td>
              </tr>
              <tr>
                <td className="show577">#341</td>
                <td className="show576">08/07/2022 </td>
                <td>Anakin</td>
                <td className="show577">15</td>
                <td className="show577">11</td>
                <td>R$ 55300.00</td>
                <td>
                  <div className="dsmeta-red-btn-container">

                    <NotificationButton />

                  </div>
                </td>
              </tr>
              <tr>
                <td className="show577">#341</td>
                <td className="show576">08/07/2022 </td>
                <td>Anakin</td>
                <td className="show577">15</td>
                <td className="show577">11</td>
                <td>R$ 55300.00</td>
                <td>
                  <div className="dsmeta-red-btn-container">

                    <NotificationButton />

                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>


    </>
  )
}

export default SalesCard
