import React, { useEffect} from "react";
import Form from "../formulario/Formulario";
import AOS from "aos";
import 'aos/dist/aos.css';

import "../header/header.css";

export default function Header() {

  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <div className="background">
        <div className="formulario">
          <Form />
        </div>
      </div>
      
    </>
      
    

    
  )
}