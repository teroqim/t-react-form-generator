import React from 'react'
import InputField from 't-react-input-field'
import FormValidator from './form-validator.js'
import clamp from './clamp.js'

function FormGenerator(buttonText) {
  var _val = new FormValidator(false);
  var _fields = [];
  var _bText = buttonText;
  this.setButtonText = function(text){
    _bText = text;
  };

  this.addField = function(name,
                          defaultValue,
                          placeholder,
                          helpText,
                          autoFocus,
                          isPassword,
                          preText){
    _fields.push({
      name: name,
      placeholder: placeholder,
      autoFocus: autoFocus,
      helpText: helpText,
      isPassword: isPassword,
      preText: preText,
    });
    _val.addField(name, defaultValue);
  };
  this.addValidator = function(){
    _val.addValidator.apply(_val, arguments);
  };
  this.generate = function(){
    var genClass = React.createClass({
      componentDidMount: function(){
        clamp(this.refs.errMsg, {clamp: 2});
      },

      getInitialState: function(){
        return {
          validator: _val,
        };
      },

      onSubmit: function(){
        this.state.validator.setEnabled(true);
        if (this.state.validator.validate(true)) {
          this.props.onSubmit(this.state.validator);
        }
        else{
          this.forceUpdate();
        }
      },

      render: function(){
        var inputFields = _fields.map(function(field){
          var func = function(e){
            this.state.validator[field.name].update(e.target.value);
            this.state.validator.validate(false);
            this.forceUpdate();
          }.bind(this);
          return (
            <InputField
              key={field.name}
              autoFocus={field.autoFocus}
              className={field.name}
              onChange={func}
              onEnter={this.onSubmit}
              password={field.isPassword}
              preText={field.preText}
              placeholder={field.placeholder}
              infoBubbleText={field.helpText}
              showError={this.state.validator[field.name].shouldHighlight}
              value={this.state.validator[field.name].value}
              />
          );
        }.bind(this));

        var errMsg = this.state.validator.getErrorMessage();
        if (this.props.extErrMsg) {
          if (errMsg) {
            errMsg = this.props.extErrMsg + ", " + errMsg;
          }
          else {
            errMsg = this.props.extErrMsg;
          }
        }

        return (
          <div className="form-wrapper">
            <div className="input-wrapper">
              {inputFields}
              <div className="err-msg" ref={"errMsg"}>{errMsg}</div>
            </div>
            <button className="action-button" onClick={this.onSubmit}>{_bText}</button>
          </div>
        );
      },
    });

    return genClass;
  };
}

module.exports = FormGenerator;
