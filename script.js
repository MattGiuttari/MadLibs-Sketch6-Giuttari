$(document).ready(function() {

    var nounArr = ["clown", "Xbox", "Cheeze-It", "water bottle", "donut"];

    $("button").click(function() {
        $(".noun").each(function() {
            var randomIndex = Math.floor(Math.random() * nounArr.length);
            $(this).text(nounArr[randomIndex]);
        });
        
    });
    var adjectiveArr = ["excited", "thoughtful", "stupid", "famous", "needy"];

    $("button").click(function() {
        $(".adjective").each(function() {
            var randomIndex = Math.floor(Math.random() * adjectiveArr.length);
            $(this).text(adjectiveArr[randomIndex]);
        });

      });
  
      var verbArr = ["climbed", "lifted", "emptied", "filled", "relaxed"];

      $("button").click(function() {
          $(".verb").each(function() {
              var randomIndex = Math.floor(Math.random() * verbArr.length);
              $(this).text(verbArr[randomIndex]);
          });
  
        });
});
    

