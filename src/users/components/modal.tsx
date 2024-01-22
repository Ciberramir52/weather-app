import Modal from "react-modal"
import { useAppDispatch, useUIStore, useUsersStore } from "../../hooks"
import { useEffect, useState } from "react";

const customStyles = {
    content: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto',
        //top: '20%',
        //left: '20%',
        //right: 'auto',
        //bottom: 'auto',
        //marginRight: '-20%',
        //transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

function UserModal() {
    const { isUserModalOpen, startClosingModal } = useUIStore();

    const { activeUser } = useUsersStore();

    const dispatch = useAppDispatch();

    const [formSubmitted, setFormSubmitted] = useState(false);

    const [formValues, setFormValues] = useState({
        name: 'name',
        lat: 0,
        lon: 0,
        id: ''
    })

    useEffect(() => {
        setFormValues({...activeUser});
    }, [activeUser])

    const onInputChanged = ( event: React.ChangeEvent<HTMLInputElement> ) => {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value
        })
    }

    const onCloseUserModal = () => {
        dispatch( startClosingModal() )             
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
                <form onSubmit={ onCloseUserModal } className="formulario">
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

export default UserModal;