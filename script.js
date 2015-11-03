$(document).ready(_ => {
  $(window).on('scroll', _ => {
    var scrollHeight = window.pageYOffset;

    if (scrollHeight >= $("#submissions").offset().top-50) {
      $('body').attr('class', 'submissions');
    } else if (scrollHeight >= $('#registration').offset().top-50) {
      $('body').attr('class', 'registration');
    } else if (scrollHeight >= $('#schedule').offset().top-50) {
      $('body').attr('class', 'schedule');
    } else if (scrollHeight >= $("#about").offset().top-50) {
      $('body').attr('class', 'about');
    } else {
      $('body').attr('class', '');
    }
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

