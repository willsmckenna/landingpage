import ReactDOM from 'react-dom';
import LandingPage from './components/LandingPage';

const App = () => {
    return (
        <div>
            <LandingPage />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));
