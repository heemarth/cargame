class Form {
    constructor(){

    }

    display(){
        var title =createElement("h2");
        title.html("Heemarth's car racing game");
        title.position(120,0);

        var input = createInput("NAME");
        input.position(130,160);

        var button = createButton("Play");
        button.position(250,200);

        var greeting = createElement("h3");

        button.mousePressed(function(){
            input.hide();
            button.hide();

            var name = input.value();
            playerCount = playerCount+1;
            player.update(name);
            player.updateCount(player);

            greeting.html("Welcome " + name);
            greeting.position(130,160);

        })
    }
}