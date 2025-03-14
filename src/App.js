import React, { useReducer } from 'react';
import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';
import reducer, { initialState } from './reducers/index';
// import { addOne } from './actions/index';
import { applyNumber, changeOperation, clearDisplay, memoryAdd, memoryRecall, memoryClear } from './actions/index';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

/*  const handleAddOneClick = () => {
    dispatch(addOne());
};
*/
const handleApplyNumberClick = (num) => {
  dispatch(applyNumber(num));
};
const handleChangeOperation = (operator) => {
  dispatch(changeOperation(operator));
};
const handleClearDisplay = () => {
  dispatch(clearDisplay());
};
const handleMemoryAdd = () => {
  dispatch(memoryAdd());
};

const handleMemoryRecall = () => {
  dispatch(memoryRecall());
};

const handleMemoryClear = () => {
  dispatch(memoryClear());
};
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">

            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>

            <div className="row">
              <CalcButton value={"M+"} onClick={handleMemoryAdd}/>
              <CalcButton value={"MR"} onClick={handleMemoryRecall}/>
              <CalcButton value={"MC"} onClick={handleMemoryClear}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={() => handleApplyNumberClick(1)}/>
              <CalcButton value={2} onClick={() => handleApplyNumberClick(2)}/>
              <CalcButton value={3} onClick={() => handleApplyNumberClick(3)}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => handleApplyNumberClick(4)}/>
              <CalcButton value={5} onClick={() => handleApplyNumberClick(5)}/>
              <CalcButton value={6} onClick={() => handleApplyNumberClick(6)}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => handleApplyNumberClick(7)}/>
              <CalcButton value={8} onClick={() => handleApplyNumberClick(8)}/>
              <CalcButton value={9} onClick={() => handleApplyNumberClick(9)}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={() => handleChangeOperation("+")}/>
              <CalcButton value={"*"} onClick={() => handleChangeOperation("*")}/>
              <CalcButton value={"-"} onClick={() => handleChangeOperation("-")}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={handleClearDisplay}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
