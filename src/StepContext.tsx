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
        bodyFormData.append('email', userData['email'])
        // bodyFormData.append('firstName', userData['firstName'])
        // bodyFormData.append('lastName', userData['lastName'])
        bodyFormData.append('mobile', userData['mobile'])
        bodyFormData.append('password', userData['password'])
        bodyFormData.append('confirm_password', userData['confirm_password'])
        bodyFormData.append('name', userData['RaisonSocial'])
        bodyFormData.append('tax_name', userData['MatriculeFiscale'])
        // bodyFormData.append('tax_name_proof', "Low Resolution Logo - White Background.png")
        bodyFormData.append('rne', userData['rne'])
        // bodyFormData.append('rne_proof', "Low Resolution Logo - White Background.png")
        bodyFormData.append('addresse', userData['addresse'])
        bodyFormData.append('pincode', userData['pincode'])
        bodyFormData.append('pan_number', userData['pan_number'])
        // bodyFormData.append('pan_proof', "Low Resolution Logo - White Background.png")
        bodyFormData.append('bank_name', userData['bank_name'])
        bodyFormData.append('bank_code', userData['bank_code'])
        bodyFormData.append('cin_number', userData['cin_number'])
        // bodyFormData.append('national_identity_card', "Low Resolution Logo - White Background.png")


        const config = {
            headers: {
                'Authorization': "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NjQ0MDkwMjYsImlzcyI6ImVzaG9wIiwiZXhwIjoxNjY0NDEwODI2fQ.R9yCge_10pnDkSjL9aospCdvnRBGYFI4dsOsVaW7fkE",
                'Content-Type': "application/json",
                'Accept': "*/*"
            },
        }
        // try {
        const response = await axios.post("http://5.135.194.236:8181/seller/app/v1/api/register", bodyFormData, config)
        // body: JSON.stringify({
        //     email: userData['email'],
        //     // first_name: userData['firstName'],
        //     // last_name: userData['lastName'],
        //     mobile: userData['mobile'],
        //     password: userData['password'],
        //     confirm_password: userData['confirm_password'],
        //     name: userData['RaisonSocial'],
        //     tax_name: userData['MatriculeFiscale'],
        //     // tax_name_proof: userData['tax_name_proof'],
        //     rne: userData['rne'],
        //     // rne_proof: userData['rne_proof'],
        //     adresse: userData['addresse'],
        //     pincode: userData['pincode'],
        //     pan_number: userData['pan_number'],
        //     // pan_proof: userData['pan_proof'],
        //     bank_name: userData['bank_name'],
        //     bank_code: userData['bank_code'],
        //     cin_number: userData['cin_number'],
        //     // national_identity_card: userData['national_identity_card'],
        // }),
        // });
        const content = await response.data;
        console.log("🚀 ~ file: Signup.tsx ~ line 84 ~ submit ~ content", content);
        return content
        // } catch (error) {
        //     console.log(error)

        // }
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