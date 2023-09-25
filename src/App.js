import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="card">
        <div class="title">
          <h2>This is the Title of a Card</h2>
        </div>

        <div class="image">
          <img src="https://icon-library.com/images/default-user-icon/default-user-icon-13.jpg"
            alt="user icon"
            width="400"
          />
          <p>Description of the image above. Lorem ipsum dolor sit amet.</p>
        </div>
    
        <button class='details'>
          <a>Details</a>
        </button>
      </div>
    </div>
  );
}

export default App;
