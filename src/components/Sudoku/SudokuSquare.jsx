import './sudoku.css';

export const Square = () => {
  return (
    <>
      <div className={['sudoku-square']}>
        <div className={['sudoku-row']}>
          <input className={['sudoku-input']}></input>
          <input className={['sudoku-input']}></input>
          <input className={['sudoku-input']}></input>
        </div>
        <div className={['sudoku-row']}>
          <input className={['sudoku-input']}></input>
          <input className={['sudoku-input']}></input>
          <input className={['sudoku-input']}></input>
        </div>
        <div className={['sudoku-row']}>
          <input className={['sudoku-input']}></input>
          <input className={['sudoku-input']}></input>
          <input className={['sudoku-input']}></input>
        </div>
      </div>
    </>
  );
};
