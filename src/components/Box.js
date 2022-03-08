import './Box.css';

function Box({ color, number, handleClick }) {
  return (
    <div className="box" style={{ backgroundColor: color }} onClick={handleClick}>
      {number}
    </div>
  );
}

export default Box;
