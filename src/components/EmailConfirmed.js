import React from "react";
import './emailConfirmed.css'

export const EmailConfirmed = () => {
  return (
    <html>
        <div className="card">
            <div className="success">
                <i className="checkmark">✓</i>
            </div>
            <h1 className="h1mail">Success</h1>
            <p className="pmail">Has confirmado tu Email</p>
        </div>
    </html>
  )
};
