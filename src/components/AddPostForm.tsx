import { useState } from 'react'
import { useAddPostMutation } from '../redux/apiSlice'
import Modal from './Modal'

const AddPostForm: React.FC = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [modalMessage, setModalMessage] = useState('')
  const [addPost] = useAddPostMutation()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (title && body) {
      try {
        const response = await addPost({ title, body, userId: 1 }).unwrap() // userId as 1 and unwrap to handle errors
        setModalMessage(`Post added successfully with ID: ${response.id}`)
        setShowModal(true)
        setTitle('')
        setBody('')
      } catch (err) {
        setModalMessage('Failed to add post.')
        setShowModal(true)
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-m font-bold mx-4 mb-4">Add New Post</h2>
        <div className="mx-4 mb-4">
          <label className="block mb-2 font-semibold">Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border p-2 w-full"
          />
        </div>
        <div className="mx-4 mb-4">
          <label className="block mb-2 font-semibold">Body:</label>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="border p-2 w-full"
          ></textarea>
        </div>
        <button
          type="submit"
          className="mx-4 bg-blue-500 text-black px-4 py-2 w-full mb-4"
        >
          Add Post
        </button>
      </form>

      {showModal && (
        <Modal
          message={modalMessage}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default AddPostForm
