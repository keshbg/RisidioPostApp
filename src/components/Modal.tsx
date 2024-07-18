// Modal for displaying success or failure result

interface ModalProps {
  message: string
  onClose: () => void
}

const Modal: React.FC<ModalProps> = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="bg-gray p-6 rounded shadow-md z-10">
        <p className="mb-4">{message}</p>
        <button
          onClick={onClose}
          className="bg-blue-500 text-black px-4 py-2 rounded"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default Modal
