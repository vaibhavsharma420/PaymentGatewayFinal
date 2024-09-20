import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import { Home } from "./Home";
import { PaymentSuccess } from "./PaymentSuccess";
import Form from "./Form";

const App = () => {
  return(
    <>
    <Router>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/paymentsuccess" element={<PaymentSuccess/>} />
            <Route path="/applicationform" element={<Form/>} />
        </Routes>
    </Router>
    </>
  )
}

export default App;
