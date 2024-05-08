import React, { useState, useMemo } from 'react';
import '../../../Styling/ImageEditor.css';
import Slider from './Components/Slider';
import SideBar from './Components/SideBar';

const DEFAULT_OPTIONS = [
  {
    name: 'Brightness',
    property: 'brightness',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: 'Contrast',
    property: 'contrast',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: 'Saturation',
    property: 'saturate',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: 'Grayscale',
    property: 'grayscale',
    value: 0,
    range: {
      min: 0,
      max: 100
    },
    unit: '%'
  },
  {
    name: 'Sepia',
    property: 'sepia',
    value: 0,
    range: {
      min: 0,
      max: 100
    },
    unit: '%'
  },
  {
    name: 'Hue Rotate',
    property: 'hue-rotate',
    value: 0,
    range: {
      min: 0,
      max: 360
    },
    unit: 'deg'
  },
  {
    name: 'Blur',
    property: 'blur',
    value: 0,
    range: {
      min: 0,
      max: 20
    },
    unit: 'px'
  }
];

export default function ImageEditorPage() {
    const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
    const [options, setOptions] = useState(DEFAULT_OPTIONS);
    const selectedOption = options[selectedOptionIndex];
  
    function handleSliderChange({ target }) {
      setOptions(prevOptions => {
        return prevOptions.map((option, index) => {
          if (index !== selectedOptionIndex) return option;
          return { ...option, value: target.value };
        });
      });
    }
  
    const getImageStyle = useMemo(() => {
      const filters = options.map(option => {
        return `${option.property}(${option.value}${option.unit})`;
      });
  
      return { filter: filters.join(' ') };
    }, [options]);
  
    return (
      <div className='image-editor-container'>
        <div className="main-image" style={getImageStyle}></div>
        <div className='sidebar'>
            <div className='sidebar-box'>
            <h2 className='settings-header'>SETTINGS</h2>
            {options.map((option, index) => (
                <div key={index}>
                <SideBar 
                    name={option.name}
                    active={index === selectedOptionIndex}
                    handleClick={() => setSelectedOptionIndex(index)}
                />
                <Slider 
                    min={option.range.min}
                    max={option.range.max}
                    value={option.value}
                    handleChange={({ target }) => {
                    const newValue = target.value;
                    setOptions(prevOptions => {
                        return prevOptions.map((opt, idx) => {
                        if (idx !== index) return opt;
                        return { ...opt, value: newValue };
                        });
                    });
                    }}
                />
                </div>
            ))}
            </div>

        </div>
      </div>
    );
  }