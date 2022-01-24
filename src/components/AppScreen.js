
import {  useSelector } from 'react-redux';
import ValidationResult from './auth/ValidationResult';



import UsersScreen from './Private/users/UsersScreen';

export const AppScreen = ()=>{

  
    const { user } = useSelector( state=>state.auth );   
    
    const validation = user['validationResult'];


    return ( 
        <div>

            {
                validation === 0 &&  
                <ValidationResult />
            } 
            
            {    
               ( validation === 1  ) &&
               <UsersScreen /> 

            }
        </div>
    )


}