/* eslint-disable jsx-a11y/alt-text */
import './App.css';
import item from './bars-solid.svg';
import NavbarItem from './NavbarItem';

function App() {
  return (
    <>
    <NavbarItem icon={item} name="Feed"/>
    {/* <NavbarItem icon={item} name="Friends"/> */}
    </>
  );
}

export default App;
