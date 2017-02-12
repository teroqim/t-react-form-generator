
function Field(name, defaultVal){
  this.name = name;
  this.value = defaultVal;
  this.shouldHighlight = false;
  this.update = function(newVal){
    this.shouldHighlight = false;
    this.value = newVal;
  };
}

function Validator(validatorFunc, errorMessage, fields){
  this.validatorFunc = validatorFunc;
  this.errorMessage = errorMessage;
  this.fields = fields;
  this.validate = function(highlight){
    // Get field values
    var fieldValues = this.fields.map(function(field){
      return field.value;
    });
    // Validate
    this.isValid = this.validatorFunc.apply(null, fieldValues);
    if (!this.isValid && highlight) {
      for (var i = 0; i < this.fields.length; i++) {
        this.fields[i].shouldHighlight = true;
      }
    }
    return this.isValid;
  };
}

function FormValidator(enabled){
  /**If not enabled, form is valid by default*/
  var _enabled = enabled;
  var _validators = [];
  var _fields = [];

  var _sortValidators = function(){
    return _validators.sort(function(a, b){
      return a.fields.length - b.fields.length;
    });
  };

  this.setEnabled = function(val){
    _enabled = val;
  };

  this.addField = function(name, defaultVal){
    this[name] = new Field(name, defaultVal);
    _fields.push(this[name]);
    return this[name];
  };

  this.addValidator = function(){ /**Arguments to fieldvalidator*/
    var fields = Array.prototype.slice.call(arguments, 2).map(function(fieldName){
      return this[fieldName];
    }.bind(this));
    var validator = new Validator(arguments[0], arguments[1], fields);
    _validators.push(validator);
  };

  this.validate = function(highlight){
    if (!_enabled) {
      // If not enabled, nothing should be highlighted regardless
      for (var i = 0; i < _fields.length; i++) {
        _fields[i].shouldHighlight = false;
      }
      this.isValid = true;
      return this.isValid;
    }

    // Highlight fields with errors by default
    highlight = typeof highlight !== 'undefined' ? highlight : true;

    // Sort validators according to number of fields validated
    var sortedValidators = _sortValidators();
    // Validate in order, any validator invalid = form invalid
    this.isValid = true;
    for (var i = 0; i < sortedValidators.length; i++) {
      // Note: Order of args to the '&&' operator matters. validate() must be called for all validators.
      this.isValid = sortedValidators[i].validate(highlight) && this.isValid;
    }
    return this.isValid;
  };

  this.getErrorMessage = function(){
    if (!_enabled) {
      return "";
    }

    var sortedVals = _sortValidators();
    var errArray = [];
    for (var i = 0; i < sortedVals.length; i++) {
      var val = sortedVals[i];
      if (!val.isValid && val.errorMessage) {
        errArray.push(val.errorMessage);
      }
    }
    return errArray.join(', ');
  }
}

module.exports = FormValidator;
module.exports.Validator = Validator;
module.exports.Field = Field;
