import App from "./App";
import {Link} from 'react-router-dom'
import {BrowserRouter} from 'react-router-dom'

export function Root(){
  return(
    <BrowserRouter>
        <Link to="Counter">Per il counter premi qua</Link>
      <App/>
    </BrowserRouter>
  )
}