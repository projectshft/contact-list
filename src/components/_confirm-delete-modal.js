export default function ConfirmDeleteModal({show, onClose}) {
    if(!show){
        return null;
    }

    return (
        <div 
        onClick={onClose}
        className="confirm-delete-modal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"
        >
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Confirm Delete</h5>
                    <button onClick={onClose} type="button" className="close btn btn-light" aria-label="Close">
                    <span
                    >&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <p>Are you sure you want to delete  from your contacts?</p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" 
                    onClick={onClose}
                    >Close</button>

                    <button type="button" className="btn btn-danger">Delete Contact</button>
                </div>
                </div>
            </div>
        </div>
    );
  }