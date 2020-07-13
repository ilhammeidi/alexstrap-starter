/**
 * Handle css class by using Media query
 * @alias xs, sm, md, lg, xl
 */

var mq = {
  smUp: "screen and (min-wdth: 600px)",
  mdUp: "screen and (min-width: 960px)",
  lgUp: "screen and (min-width: 1280px)",
  xlUp: "screen and (min-width: 1920px)",
  xsDown: "screen and (max-width: 599px)",
  smDown: "screen and (max-width: 959px)",
  mdDown: "screen and (max-width: 1279px)",
  lgDown: "screen and (max-width: 1919px)"
}

function mqAddClass(selectors) {
  $(selectors).each(function(){
    var classes = $(this).data('class');
    $(this).addClass(classes)
  })
}

function mqRemoveClass(selectors) {
  $(selectors).each(function(){
    var classes = $(this).data('class');
    $(this).removeClass(classes)
  })
}

// Define handler action
var handler_smUp = {
      match : function() { mqAddClass('.mq-sm-up')},
      unmatch : function() { mqRemoveClass('.mq-sm-up')}
    },
    handler_mdUp = {
      match : function() { mqAddClass('.mq-md-up')},
      unmatch : function() { mqRemoveClass('.mq-md-up')}
    },
    handler_lgUp = {
      match : function() { mqAddClass('.mq-lg-up')},
      unmatch : function() { mqRemoveClass('.mq-lg-up')}
    },
    handler_xlUp = {
      match : function() { mqAddClass('.mq-xl-up')},
      unmatch : function() { mqRemoveClass('.mq-xl-up')}
    },
    handler_xsDown = {
      match : function() { mqAddClass('.mq-xs-down')},
      unmatch : function() { mqRemoveClass('.mq-xs-down')}
    },
    handler_smDown = {
      match : function() { mqAddClass('.mq-sm-down')},
      unmatch : function() { mqRemoveClass('.mq-sm-down')}
    },
    handler_mdDown = {
      match : function() { mqAddClass('.mq-md-down')},
      unmatch : function() { mqRemoveClass('.mq-md-down')}
    },
    handler_lgDown = {
      match : function() { mqAddClass('.mq-lg-down')},
      unmatch : function() { mqRemoveClass('.mq-lg-down')}
    };

// Register to enquire.js
enquire
  .register(mq.smUp, handler_smUp)
  .register(mq.mdUp, handler_mdUp)
  .register(mq.lgUp, handler_lgUp)
  .register(mq.xlUp, handler_xlUp)
  .register(mq.xsDown, handler_xsDown)
  .register(mq.smDown, handler_smDown)
  .register(mq.mdDown, handler_mdDown)
  .register(mq.lgDown, handler_lgDown);
