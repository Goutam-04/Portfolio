import "./project.css"

const BtnNext = ({  text }) => {
    const classBtnNext = 'control-btn control-btn--next';
    const classDisabledNext = 'control-btn control-btn--disabled-next';
  
    return (
    //   <button  className={page === 2 ? `${classDisabledNext}` : `${classBtnNext}`}>
      <button  className={classDisabledNext}>
        {text}
      </button>
    );
  };
  
  const BtnPrevious = ({  text }) => {
    const classBtnPrevious = 'control-btn control-btn--previous';
    const classDisabledPrevious = 'control-btn control-btn--disabled-previous';
  
    return (
      <button
        
        // className={page === 1 ? `${classDisabledPrevious}` : `${classBtnPrevious}`}>
        className={classBtnPrevious}>
        {text}
      </button>
    );
  };
  
  export { BtnNext, BtnPrevious };
  