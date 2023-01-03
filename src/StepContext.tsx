import axios from 'axios';
import React, { useState, createContext } from 'react'
import { object } from 'yup';
import SignUpPage from '../pages/signup';


interface ContextInterface {
    currentStep?: number;
    setStep?: React.Dispatch<React.SetStateAction<number>>;
    userData?: any[];
    setUserData?: React.Dispatch<React.SetStateAction<any[]>>;
    finalData?: any[];
    setFinalData?: React.Dispatch<React.SetStateAction<any[]>>;
    submitData?: () => void
}

export const multiStepContext = React.createContext({} as any)
const StepContext = () => {
    const [currentStep, setStep] = useState(1);
    const [userData, setUserData] = useState([]);
    const [finalData, setFinalData] = useState([]);
    const [redirect, setRedirect] = useState(false);


    const submitData = async () => {
        setFinalData(finalData => [...finalData, userData])
        console.log("here", finalData);

        const bodyFormData = new FormData()
        //ProfileVendorSignup
        bodyFormData.append('email', userData['email'])
        bodyFormData.append('firstName', userData['firstName'])
        bodyFormData.append('lastName', userData['lastName'])
        bodyFormData.append('mobile', userData['mobile'])
        bodyFormData.append('password', userData['password'])
        bodyFormData.append('confirm_password', userData['confirm_password'])
        bodyFormData.append('cin_number', userData['cin_number'])
        bodyFormData.append('national_identity_card', userData['cin_number'])

        bodyFormData.append('nameOfShop', userData['nameOfShop'])
        bodyFormData.append('raisonSocial', userData['raisonSocial'])
        bodyFormData.append('pays', userData['pays'])
        bodyFormData.append('gouvernorat', userData['gouvernorat'])
        bodyFormData.append('ville', userData['ville'])
        bodyFormData.append('address', userData['address'])
        bodyFormData.append('telephoneFixe', userData['telephoneFixe'])
        bodyFormData.append('pincode', userData['pincode'])
        bodyFormData.append('tax_name', userData['matriculeFiscale'])
        bodyFormData.append('tax_name_proof', userData['tax_name_proof'])
        bodyFormData.append('rne', userData['rne'])
        bodyFormData.append('rne_proof', userData['rne_proof'])
        
        bodyFormData.append('pan_number', userData['pan_number'])
        bodyFormData.append('pan_proof', userData['pan_proof'])
        bodyFormData.append('bank_name', userData['bank_name'])
        bodyFormData.append('bank_code', userData['bank_code'])


        const config = {
            headers: {
                'Authorization': "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NjQ0MDkwMjYsImlzcyI6ImVzaG9wIiwiZXhwIjoxNjY0NDEwODI2fQ.R9yCge_10pnDkSjL9aospCdvnRBGYFI4dsOsVaW7fkE",
                'Content-Type': "application/json",
                'Accept': "*/*"
            },
        }
        try {
        const response = await axios.post("http://5.135.194.236:8181/seller/app/v1/api/register", bodyFormData, config)
        const content = await response.data;
        console.log("🚀 ~ file: Signup.tsx ~ line 84 ~ submit ~ content", content);
        return content
        } catch (error) {
            console.log(error)

        }
    };

    if (redirect) {
        console.log("signup sucess")
    }

    return (
        <div>
            <multiStepContext.Provider value={{ currentStep, setStep, userData, setUserData, finalData, setFinalData, submitData }}>
                <SignUpPage />
            </multiStepContext.Provider>
        </div>
    )
}

export default StepContext