import React from 'react'
import InputField from 't-react-input-field'
import FormValidator from './form-validator.js'
import clamp from './clamp.js'

function generate(fields, val, bText, hideButton){
  return class extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        validator: val
      }
    }

    onSubmit(){
      this.state.validator.setEnabled(true)
      if (this.state.validator.validate(true)) {
        this.props.onSubmit(this.state.validator)
      }
      else {
        this.forceUpdate()
      }
    }

    render(){
      const inputFields = fields.map(field => {
        const func = e => {
          this.state.validator[field.name].update(e)
          this.state.validator.validate(false)
          this.forceUpdate()
        }
        return (
          <InputField
            key={field.name}
            autoFocus={field.autoFocus}
            className={field.name}
            onChange={func.bind(this)}
            onEnter={this.onSubmit.bind(this)}
            password={field.isPassword}
            preText={field.preText}
            placeholder={field.placeholder}
            infoBubbleText={field.helpText}
            showError={this.state.validator[field.name].shouldHighlight}
            value={this.state.validator[field.name].value}
            />
        );
      })

      var errMsg = this.state.validator.getErrorMessage()
      if (this.props.extErrMsg) {
        if (errMsg) {
          errMsg = this.props.extErrMsg + ", " + errMsg
        }
        else {
          errMsg = this.props.extErrMsg
        }
      }

      var btn = null
      if (!hideButton) {
        btn = <button className='action-button' onClick={this.onSubmit.bind(this)}>{bText}</button>
      }

      return (
        <div className='form-wrapper'>
          <div className='input-wrapper'>
            {inputFields}
            <div className='err-msg' ref={e => {if (e) {clamp(e, {clamp: 2})}}}>{errMsg}</div>
          </div>
          {btn}
        </div>
      )
    }

  }
}

class FormGenerator {
  constructor(buttonText, hideButton=false){
    this.hideButton = hideButton
    this.bText = buttonText
    this.val = new FormValidator(false)
    this.fields = []
  }

  setButtonText(text) {
    this.bText = text
  }

  addField(name,
            defaultValue,
            placeholder,
            helpText,
            autoFocus,
            isPassword,
            preText) {
    this.fields.push({
      name: name,
      placeholder: placeholder,
      autoFocus: autoFocus,
      helpText: helpText,
      isPassword: isPassword,
      preText: preText,
    })
    this.val.addField(name, defaultValue)
  }

  addValidator() {
    this.val.addValidator.apply(this.val, arguments)
  }

  generate() {
    return generate(this.fields, this.val, this.bText, this.hideButton)
  }
}

export default FormGenerator
