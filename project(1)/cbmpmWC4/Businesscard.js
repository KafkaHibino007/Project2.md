import React from "react"
import Pfp from "./Project2/Pfp"
import Button from "./Project2/Button"
import Paragraph from"./Project2/Paragraph"
import Intrests from "./Project2/Intrests"
import Foot from "./Project2/Foot"



export default function businesscard(){
             return(
                 <div>
                 <fieldset className="field">
                 <Pfp />
                 <Button />
                 <Paragraph />
                 <Intrests />
                 <Foot /> 
                 </fieldset>
                 </div>
                      
          )
      }
