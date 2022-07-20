import { createPortal } from "react-dom";

const Modal = ({isOpened, children, onClose}) => {

  if (!isOpened) {
    return null
  }

  return createPortal(
    <div className='overlay'>
      <div className="modal">
        <div>
          <span className="close-button" onClick={onClose}>X</span>
        </div>
        <div className="contenedor">
          {children}
        </div>
      </div>
    </div>,
    document.getElementById('modal')
  )
}

export default Modal