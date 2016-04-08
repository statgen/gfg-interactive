// Generated by CoffeeScript 1.9.3
(function() {
  var Debriefing, FinishInstructions, Questionnaire, dataHandler, mean;

  dataHandler = DataHandler(uniqueid, experimentname, sessionid);

  dataHandler.preloadPages(['postquestionnaire.html', experimentname + '/debriefing.html']);

  mean = function(numericArray) {
    var avg, sum;
    sum = numericArray.reduce(function(a, b) {
      return a + b;
    });
    avg = sum / numericArray.length;
    return avg;
  };

  Questionnaire = (function() {
    function Questionnaire() {}

    Questionnaire.prototype.start = function(exitTrial) {
      this.exitTrial = exitTrial;
      return $('body').html(dataHandler.getPage('postquestionnaire.html'));
    };

    Questionnaire.prototype.buttonClick = function() {
      var any_blank;
      any_blank = false;
      $("select").each(function(i, val) {
        if (this.value === "NONE") {
          return any_blank = true;
        }
      });
      if (any_blank) {
        console.log("Some blank");
        return $("#noqs").removeClass("hidden");
      } else {
        $("select").each(function(i, val) {
          return dataHandler.recordUnstructuredData(this.id, this.value);
        });
        dataHandler.recordUnstructuredData('openended', $('#openended').val());
        dataHandler.saveData();
        return this.exitTrial();
      }
    };

    return Questionnaire;

  })();

  Debriefing = (function() {
    function Debriefing() {}

    Debriefing.prototype.start = function(exitTrial) {
      this.exitTrial = exitTrial;
      return $('body').html(dataHandler.getPage(experimentname + '/debriefing.html'));
    };

    Debriefing.prototype.buttonClick = function() {
      return this.exitTrial();
    };

    return Debriefing;

  })();

  FinishInstructions = (function() {
    function FinishInstructions() {}

    FinishInstructions.prototype.start = function(exitBlock) {
      this.exitBlock = exitBlock;
      dataHandler.finishInstructions();
      return this.exitBlock();
    };

    return FinishInstructions;

  })();

  this.dataHandler = dataHandler;

  this.common = {
    Questionnaire: Questionnaire,
    Debriefing: Debriefing,
    FinishInstructions: FinishInstructions,
    mean: mean
  };

}).call(this);
