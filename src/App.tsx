import { Provider } from 'react-redux'
import { store } from './redux/store'
import PostsList from './components/PostsList'
import AddPostForm from './components/AddPostForm'
import './styles/index.css'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center my-4">Posts App</h1>
        <AddPostForm />
        <PostsList />
      </div>
    </Provider>
  );
};

export default App
