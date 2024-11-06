import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap';
const PageNotFound=()=>{
    return(
        <Card>
            <h1 className='d-flex justify-content-center text-danger'>
                Error, pagina no encontrada
            </h1>
        </Card>
    )
}
export default PageNotFound