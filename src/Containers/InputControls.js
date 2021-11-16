import SliderInput from '../Components/SliderInput';
import ColorPicker from '../Components/ColorPicker';
import './InputControls.css';

function InputControls() {

  return (
    <div className="inputControls">
      <div className="inputControls__inputs">
        <div className="inputControls__inputs__sliders">
          <SliderInput label="x" />
          <SliderInput label="y"/>
          <SliderInput label="Blur"/>
          <SliderInput label="Spread"/>
        </div>
        <div className="inputControls__inputs__color">
          <ColorPicker/>
        </div>
    </div>
  </div>
);
}

export default InputControls;

