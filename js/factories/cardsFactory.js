/**
 * Created by Serge on 03.06.2017.
 */
app.factory("cardsFactory", function () {
    var service = {};
    var cards = [
        {
            card_id: 0,
            card_name: "Card's name",
            column_id: "0",
            board_id: "0"
        },
        {
            card_id: 1,
            card_name: "Card's name",
            column_id: "0",
            board_id: "0"
        },
        {
            card_id: 2,
            card_name: "Card's name",
            column_id: "1",
            board_id: "1"
        }
    ];
    service.getCards = function (column, boardId) {
        return _.filter(cards, {column_id: column.column_id, board_id: boardId}); // по массиву cards выбрать карточки у которых column_id
        // равняется column_id колонки в массиве column
    };
    service.addCard = function (column, card_name, boardId) {
        cards.push(
            {
                card_id: _.uniqueId('card_'),
                card_name: card_name,
                column_id: column.column_id,
                board_id: boardId
            }
        );
    };
    service.remCard = function (card) {
        _.pull(cards, card);
    };
    return service;
});