import "./buttons-card.css"


const BtnNext = ({ handler, text, page }) => {
    const classBtnNext = 'control-btn control-btn--next';
    const classDisabledNext = 'control-btn control-btn--disabled-next';
  
    return (
      <button onClick={handler} className={page === 2 ? `${classDisabledNext}` : `${classBtnNext}`}>
        {text}
      </button>
    );
  };
  
  const BtnPrevious = ({ handler, text, page }) => {
    const classBtnPrevious = 'control-btn control-btn--previous';
    const classDisabledPrevious = 'control-btn control-btn--disabled-previous';
  
    return (
      <button
        onClick={handler}
        className={page === 1 ? `${classDisabledPrevious}` : `${classBtnPrevious}`}>
        {text}
      </button>
    );
  };
  
  export { BtnNext, BtnPrevious };
  