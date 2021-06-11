// $(document).ready(function() {
//   $("#formOne").submit(function() {
//     event.preventDefault();
//     const question1 = $("input#question1").val();
//     const question2 = $("input#question2").val();
//     const question3 = $("input#question3").val();
//     const question4 = $("input#question4").val();
//     const question5 = $("input#question5").val();

//     $(".question1").text(question1Input);
//     $(".question2").text(question2Input);
//     $(".question3").text(question3Input);
//     $(".question4").text(question4Input);
//     $(".question5").text(question5Input);

//     $("#result").show();
//   });
// });


$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const question1 = $("#question1").val();
    const question2 = $("#question2").val();
    const question3 = $("#question3").val();
    const question4 = $("#question4").val();
    const question5 = $("#question5").val();
      
    if (question1 === "no") {
      $("#result").show("result");
    } else if (question4 === "no") {
      $("#helpful").show("helpful");
    } else if (question5 === "yes") {
      $("#ruby").show("ruby");
    }
  });
});

