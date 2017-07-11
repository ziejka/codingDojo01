function Deck() {
    var me = this,
        _numberOfCardsInOneColor = 13,
        _handSize = 5,
        _cardsColors = ["s", "c", "d", "h"],
        _figures = ["2", "3", "4", "5", "6", "7", "8", "9", "10",
            "J", "Q", "K", "A"],
        _allCards = [];

    me.getNumberOfCardsInOneColor = function () {
        return _numberOfCardsInOneColor;
    };

    me.getColorsOfCards = function () {
        return _cardsColors;
    };

    me.getFigures = function () {
        return _figures;
    };

    me.getAllCards = function () {
        return _allCards;
    };

    me.getMyHand = function () {
        var id,
            hand = [];

        for (var i = 0; i < _handSize; i++) {
            id = Math.floor(Math.random() * _allCards.length);
            hand.push(_allCards[id]);
            _allCards.splice(id, 1);
        }

        return hand;
    };

    me.getOnePair = function (hand) {
        var figure,
            pair = [],
            currentFigures = {};

        hand.forEach(function (card) {
            figure = card[0];
            if (!currentFigures[figure]) {
                currentFigures[figure] = card;
            } else {
                pair = [currentFigures[figure], card];
            }
        });

        return pair;
    };

    me.getTwoPairs = function (hand) {
        var copyHand = hand.slice(),
            pairOne = this.getOnePair(copyHand),
            pairTwo;

        if (pairOne) {
            copyHand.splice(copyHand.indexOf(pairOne[0]), 1);
            copyHand.splice(copyHand.indexOf(pairOne[1]), 1);

            pairTwo = this.getOnePair(copyHand);

            if(pairTwo.length) {
                return pairTwo.concat(pairOne);
            }
        }

        return [];
    };

    function _createAllCards() {
        var figures = me.getFigures(),
            colors = me.getColorsOfCards();

        figures.forEach(function (figure) {
            colors.forEach(function (color) {
                _allCards.push(figure + color);
            })
        });
    }

    _createAllCards();
}

module.exports = Deck;