import './sudoku.css';
import { Square } from './SudokuSquare';
export const Sudoku = () => {
  return (
    <div className={['sudoku-grid']}>
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
    </div>
  );
};
