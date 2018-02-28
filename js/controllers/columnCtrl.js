/**
 * Created by Serge on 03.06.2017.
 */
app.controller("columnCtrl", function ($routeParams, columnsFactory, cardsFactory) {
    this.remColumn = function (column) {
        columnsFactory.remColumn(column);
    };
    var boardId = $routeParams.boardId;
    //console.log("bId of columnCtrl", boardId);
    this.getCards = function (column) { // column - is a parameter that is caught from outside
         return cardsFactory.getCards(column, boardId); // boardId - is a parameter that is got form local variable
    };
    this.addCard = function (column) {
        cardsFactory.addCard(column, this.card_name, boardId);
        this.card_name = "";
    };
    this.remCard = function (card) {
        cardsFactory.remCard(card);
    };
});