function Deck() {
    var _numberOfCardsInOneColor = 13,
        _cardsColors = ["s", "c", "d", "h"],
        _figures = ["2", "3", "4", "5", "6", "7", "8", "9", "10",
            "J", "Q", "K", "A"],
        _allCards = [];

    this.getNumberOfCardsInOneColor = _getNumberOfCardsInOneColor;
    this.getColorsOfCards = _getColorsOfCards;
    this.getFigures = _getFigures;
    this.getAllCards = _getAllCards;

    function _getNumberOfCardsInOneColor() {
        return _numberOfCardsInOneColor;
    }

    function _getColorsOfCards() {
        return _cardsColors;
    }

    function _getFigures() {
        return _figures;
    }

    function _getAllCards() {
        return _allCards;
    }

    function _createAllCards() {
        var figures = _getFigures(),
            colors = _getColorsOfCards();

        figures.forEach(function (figure) {
            colors.forEach(function (color) {
                _allCards.push(figure + color);
            })
        });
    }

    _createAllCards();
}

module.exports = Deck;