var setBackgroundColor = _ => {
  var scrollHeight = window.pageYOffset;

  if (scrollHeight >= $("#submissions").offset().top-100) {
    $('body').attr('class', 'submissions');
  } else if (scrollHeight >= $('#registration').offset().top-100) {
    $('body').attr('class', 'registration');
  } else if (scrollHeight >= $('#schedule').offset().top-100) {
    $('body').attr('class', 'schedule');
  } else if (scrollHeight >= $("#about").offset().top-100) {
    $('body').attr('class', 'about');
  } else {
    $('body').attr('class', '');
  }

  if (scrollHeight >= $('#sun-spacer').offset().top && scrollHeight <= $('#registration').offset().top-100) {
    $('#sun-spacer #sun-section').attr('class', 'active');

    var scheduleHeight = $('#schedule').height() - $('#schedule .content-header').outerHeight(true) - 45;
    var topHeight = $('#sun-spacer').offset().top;
    var midHeight = topHeight + scheduleHeight/2;
    var endHeight = topHeight + scheduleHeight;
    var sun = 70;
    if (scrollHeight > midHeight) {
      sun = 25 + 120 * ((scrollHeight - midHeight) / (scheduleHeight/2));
    } else {
      sun = 70 - 45 * ((scrollHeight - topHeight) / (scheduleHeight/2));
    }
    $('#sun').css({
      'margin-top': sun + 'px'
    });
  } else {
    $('#sun-spacer #sun-section').attr('class', '');
  }
};

$(document).ready(_ => {
  setBackgroundColor();

  $(window).on('scroll', _ => {
    setBackgroundColor();
  });

  $("#about-circle").click(_ => {
    $('html,body').animate({ scrollTop: $("#about").offset().top+1 }, 600);
  });
  $("#schedule-circle").click(_ => {
    $('html,body').animate({ scrollTop: $("#schedule").offset().top+1 }, 600);
  });
  $("#registration-circle").click(_ => {
    $('html,body').animate({ scrollTop: $("#registration").offset().top+1 }, 600);
  });
  $("#submissions-circle").click(_ => {
    $('html,body').animate({ scrollTop: $("#submissions").offset().top+1 }, 600);
  });
});

