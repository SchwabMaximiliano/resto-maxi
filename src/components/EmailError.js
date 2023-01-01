import React from "react";
import './emailError.css'

export const EmailError = () => {
  return (
    <html>
        <div className="card">
            <div className="successE">
                <i className="checkmarkE">🗙</i>
            </div>
            <h1 className="h1mailE">Error</h1>
            <p className="pmailE">No se ha podido validar tu Email</p>
        </div>
    </html>
  )
};