/**
 * Created by JMP on 8/11/16.
 */
/**
 * Created by JMP on 8/4/16.
 */
// Generated by CoffeeScript 1.9.3
(function() {
    var blocks, currSession;
    jQuery(function() {
        $("body").on('click', 'button', function(event) {
            return currSession.buttonClick(event.target);
        });
        return currSession.start();
    });

    blocks = [new BART.run(),new BART.run()];

    currSession = new common.Session(blocks);

    currSession.start();

}).call(this);

