import "./project.css"

const BtnNext = ({  text,demo }) => {
    const classBtnNext = 'control-btn control-btn--next';
    const classDisabledNext = 'control-btn control-btn--disabled-next';
  
    return (
    //   <button  className={page === 2 ? `${classDisabledNext}` : `${classBtnNext}`}>
     
     <a
      href={demo}
          target="_blank"
          rel="noopener noreferrer"
          
          >

     <button  className={classDisabledNext}>
        {text}
      </button>
     </a>
    );
  };
  
  const BtnPrevious = ({  text,href }) => {
    const classBtnPrevious = 'control-btn control-btn--previous';
    const classDisabledPrevious = 'control-btn control-btn--disabled-previous';
  
    return (
        <a
        href={href}
          target="_blank"
          rel="noopener noreferrer"
         
        >

      <button
        
        // className={page === 1 ? `${classDisabledPrevious}` : `${classBtnPrevious}`}>
        className={classBtnPrevious}>
        {text}
      </button>
        </a>
    );
  };
  
  export { BtnNext, BtnPrevious };
  