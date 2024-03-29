import Modal from "react-modal"
import { useAppDispatch, useUIStore, useUsersStore } from "../../hooks"
import React, { useEffect, useState } from "react";
import { userNull } from "../../store";

const customStyles = {
    content: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto',
    },
};

Modal.setAppElement('#root');

export function UserModal() {
    const { isUserModalOpen, startClosingModal, isAdding, isEditing } = useUIStore();

    const { activeUser, startAddingUser, startUpdatingUser } = useUsersStore();

    const dispatch = useAppDispatch();

    const [formValues, setFormValues] = useState( userNull );

    useEffect(() => {
        setFormValues({...activeUser});
    }, [isUserModalOpen])

    const onInputChanged = ( event: React.ChangeEvent<HTMLInputElement> ) => {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value
        })
    }

    const onCloseUserModal = () => {
        dispatch( startClosingModal() );        
    }

    const handleSubmit = ( event: React.SyntheticEvent ) => {
        event.preventDefault();

        const { name, lat, lon } = formValues;
    
        if (!name || isNaN( lat ) || isNaN( lon ) ) {
          alert('Todos los campos son obligatorios');
          return;
        }

        if ( isAdding ) dispatch( startAddingUser( formValues ) );
        if ( isEditing ) dispatch( startUpdatingUser( formValues ) );
        onCloseUserModal();
    }

    return ( 
        <Modal
        isOpen={ isUserModalOpen }
        onRequestClose={ onCloseUserModal }
        style={ customStyles }
        className='modal'
        overlayClassName='modal-fondo'
        closeTimeoutMS={ 200 }
        >
            <div className="modalContent">
                <form onSubmit={ handleSubmit } autoComplete="off" className="formulario">
                    <h2>Modal User</h2>
                    <div className="form-group">
                        <label htmlFor="name"><h3>Name</h3></label>
                        <input type="text" id="name" name="name" value={ formValues.name } onChange={ onInputChanged } />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="lat"><h3>Latitude</h3></label>
                        <input type="text" id="lat" name="lat" value={ formValues.lat } onChange={ onInputChanged } />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lon"><h3>Longitude</h3></label>
                        <input type="text" id="lon" name="lon" value={ formValues.lon } onChange={ onInputChanged } />
                    </div>
                    <div className="submit-button">
                        <input type="submit" value="Save" />
                    </div>
                </form>
            </div>
        </Modal>
     );
}