import React from 'react';
import PropTypes from 'prop-types';
import { typo } from '../../../assets/helper';
import { MdArrowForward, MdArrowBack } from 'react-icons/md';

const propTypes = {
  /** Button color need to pass (color: primary, secondary) */
  btnColor: PropTypes.string,
  /** Button Size need to pass (small, normal, large) */
  btnSize: PropTypes.string,
  /** Btn Type is for diffrent Style of Buttons (link, solid, outline) */
  btnType: PropTypes.string.isRequired,
  /** Button need a text  */
  children: PropTypes.node.isRequired,
  /** you can pass extra classes (optional) */
  className: PropTypes.string,
  /** Disabled props for disabling the btn */
  disabled: PropTypes.bool,
  /** Btn Hover Pointer boolean */
  hasPointer: PropTypes.bool,
  /** Icon Layer boolean value */
  iconLayer: PropTypes.bool,
  /** is Loading property for loading the purpose */
  isLoading: PropTypes.bool,
  /** with Left arrow */
  leftArrow: PropTypes.bool,
  /** Click Function is Required */
  onBtnClick: PropTypes.func.isRequired,
  /** with right arrow */
  rightArrow: PropTypes.bool
};

const defaultProps = {
  className: '',
  btnSize: 'small',
  btnColor: '',
  disabled: false,
  isLoading: false,
  rightArrow: false,
  leftArrow: false,
  iconLayer: false
};

function Button(props) {
  const { children, className, btnType, btnSize, btnColor, hasPointer, rightArrow,leftArrow, onBtnClick, disabled, isLoading, iconLayer } = props;

  return (
    <React.Fragment>
      <button
        className={`${className} btn-${btnType}-${btnSize} --${btnColor} ${!disabled && hasPointer ? 'pointer': ''}`}
        disabled={disabled}
        onClick={onBtnClick}
      > {
          leftArrow && iconLayer && btnType === 'outline' ?
            <div className={`icon-outline-btn-layer left ${btnColor === 'primary'? 'primary-layer': btnColor === 'secondary' && 'secondary-layer'} no-border`}>
              {isLoading ? 
                <div className={`lds-ring ${btnSize} mr-2`}><div /><div /><div /><div /></div> 
                : 
                <MdArrowBack fontSize="24px" />
              }
            </div>
            :
            leftArrow &&
            <div className={`${iconLayer ? btnSize === 'large' && 'icon-btn--layer left': 'mr-2'} ${disabled ? 'no-border': btnColor === 'primary'? 'primary-border': 'secondary-border'}  `}>{isLoading ? <div className={`lds-ring ${btnSize} mr-2`}><div /><div /><div /><div /></div>:<MdArrowBack />}</div>
        } 
        <span className={`${iconLayer && rightArrow && 'mr-4'} ${iconLayer && leftArrow && 'ml-4'}`}>{children}</span>
        {rightArrow && iconLayer && btnType === 'outline' ?
          <div className={`icon-outline-btn-layer ${btnColor === 'primary'? 'primary-layer': btnColor === 'secondary' && 'secondary-layer'} no-border`}>{isLoading ? <div className={`lds-ring ${btnSize} ml-2`}><div /><div /><div /><div /></div>:<MdArrowForward fontSize="24px" />}</div>
          :rightArrow &&
          <div className={`${iconLayer ? btnSize === 'large' && 'icon-btn--layer': 'ml-2'} ${disabled ? 'no-border': btnColor === 'primary'? 'primary-border': 'secondary-border'}  `}>{isLoading ? <div className={`lds-ring ${btnSize} ml-2`}><div /><div /><div /><div /></div>:<MdArrowForward />}</div>
        }
      </button>
      <style
        global
        jsx
      >{typo}</style>
      <style jsx>{`
        button.btn-solid-small {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 2px;
          background: #FFD200;
          padding: 8px 16px;
          font-weight: bold;
          font-size: 14px;
          line-height: 18px;
          font-family: inherit;
          border: none;
          outline: none;
        }
        button.btn-solid-small.--primary {
          background: #FFD200;
          color: #333;
        }
        button.btn-solid-small.--secondary {
          background: #007BFF;
          color: #FFF;
        }
        button.btn-solid-normal {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 2px;
          background: #FFD200;
          padding: 12px 30px;
          font-weight: bold;
          font-size: 16px;
          line-height: 20px;
          font-family: inherit;
          border: none;
          outline: none;
        }
        button.btn-solid-normal.--primary {
          background: #FFD200;
          color: #333;
        }
        button.btn-solid-normal.--secondary {
          background: #007BFF;
          color: #FFF;
        }
        button.btn-solid-large {
          width: 100%;
          height: 54px;
          position: relative;
          background: #FFD200;
          padding: 14px 0;
          border-radius: 2px;
          font-weight: bold;
          font-size: 16px;
          line-height: 20px;
          font-family: inherit;
          border: none;
          outline: none;
        }
        button:disabled {
          color: #6F6F6F !important;
          background-color: #BDBDBD !important;
        }
        button.btn-solid-large.--primary {
          background: #FFD200;
          color: #333;
        }
        button.btn-solid-large.--secondary {
          background: #007BFF;
          color: #FFF;
        }
        
        .icon-btn--layer {
          right: 0;
          position: absolute;
          padding: 0 16px;
          top: 0;
          background: rgba(0, 0, 0, 0.2);
          height: 54px;
          width: 54px;
          font-size: 24px;
          color: #fff;
          display: flex;
          align-items: center;
        }
        .icon-btn--layer.left {
          left: 0;
          position: absolute;
          padding: 0 16px;
          top: 0;
          background: rgba(0, 0, 0, 0.2);
          height: 54px;
          width: 54px;
          font-size: 24px;
          color: #fff;
          display: flex;
          align-items: center;
        }
        .icon-btn--layer.no-border {
          border: none;
        }
        .icon-btn--layer.primary-border {
          border: 1px solid #FFD200;
        }
        .icon-btn--layer.secondary-border {
          border: 1px solid #007BFF;
        }

        button.btn-link-normal {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 2px;
          background: #FFF;
          padding: 12px 22px;
          font-weight: bold;
          font-size: 16px;
          line-height: 20px;
          font-family: inherit;
          border: none;
          outline: none;
        }
        button.btn-link-normal.--primary {
          color: #333;
        }
        button.btn-link-normal.--primary div {
          color: #FFD200;
        }
        button.btn-link-normal.--secondary {
          color: #007BFF;
        }
        button.btn-link-large {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 2px;
          background: #FFF;
          padding: 12px 22px;
          font-weight: bold;
          font-size: 24px;
          line-height: 30px;
          font-family: inherit;
          border: none;
          outline: none;
        }
        button.btn-link-large.--primary {
          color: #333;
        }
        button.btn-link-large.--primary div {
          color: #FFD200;
        }
        button.btn-link-large.--secondary {
          color: #007BFF;
        }
        button.btn-outline-normal {
          width: 100%;
          height: 44px;
          position: relative;
          border-radius: 2px;
          background: #FFF;
          border: 1px solid #BDBDBD;
          padding: 12px 24px;
          font-weight: normal;
          font-size: 16px;
          line-height: 20px;
          font-family: inherit;
          outline: none;
        }
        button.btn-outline-normal.--primary {
          border: 1px solid #FFD200;
        }
        button.btn-outline-normal.--secondary {
          border: 1px solid #007BFF;
        }
        .icon-outline-btn-layer.left {
          left: 0;
          position: absolute;
          top: 0;
          padding: 0 10px;
          background: #BDBDBD;
          margin: 0 15px 0 0;
          height: 42px;
          width: 42px;
          font-size: 24px;
          color: rgba(0, 0, 0, 0.54);
          display: flex;
          align-items: center;
        }
        .icon-outline-btn-layer {
          right: 0;
          position: absolute;
          top: 0;
          padding: 0 10px;
          margin: 0 0 0 15px;
          background: #BDBDBD;
          height: 42px;
          width: 42px;
          font-size: 24px;
          color: rgba(0, 0, 0, 0.54);
          display: flex;
          align-items: center;
        }
        .icon-outline-btn-layer.primary-layer {
          background: #FFD200;
        }
        .icon-outline-btn-layer.secondary-layer {
          background: #007BFF;
        }
      
      `}</style>
    </React.Fragment>

  );
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
