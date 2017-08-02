var chai = require('chai');
var nock = require('nock');
var expect = chai.expect;
var Deck = require('./../../src/Deck/deck');

describe('Deck', function () {

    var deck = new Deck();

    it('should return list of 13 cards in the same suit', function () {
        expect(deck.getNumberOfCardsInOneColor()).to.equal(13);
    });

    it('should return colors of cards', function () {
        expect(deck.getColorsOfCards()).to.deep.equal(["s", "c", "d", "h"]);
    });

    it('should return all figures', function () {
        expect(deck.getFigures()).to.deep.equal(["2", "3", "4", "5", "6", "7", "8", "9", "10",
            "J", "Q", "K", "A"]);
    });

    it('should return all deck', function () {
        var figures = deck.getFigures(),
            colors = deck.getColorsOfCards(),
            allCards = [];

        figures.forEach(function (figure) {
            colors.forEach(function (color) {
                allCards.push(figure + color);
            })
        });
        expect(deck.getAllCards()).to.deep.equal(allCards);
    });

    it('should take five cards from deck', function () {
        var myHand = deck.getMyHand();
        expect(myHand.length).to.equal(5);
    });

    it('should return one pair winCombination', function () {
        var myHand = ["2s", "2d", "3d", "6h", "Kc"];
        expect(deck.getOnePair(myHand)).to.deep.equal(["2s", "2d"]);
    });

    it('should return empty array if hand doesn\'t have one pair winCombination', function () {
        var myHand = ["2s", "4d", "3d", "6h", "Kc"];
        expect(deck.getOnePair(myHand)).to.deep.equal([]);
    });

    it('should return two pairs if hand has 2 pairs combination', function () {
        var myHand = ["2s", "2d", "4h", "4d", "5h"];
        expect(deck.getTwoPairs(myHand)).to.deep.equal(["2s", "2d", "4h", "4d"]);
    });

    it('should return empty array if hand doesn\'t have 2 pairs combination', function () {
        var myHand = ["2s", "2d", "4h", "6d", "5h"];
        expect(deck.getTwoPairs(myHand)).to.deep.equal([]);
    });

    it('should return three of a kind if hand has 3 cards combination', function () {
        var myHand = ["2s", "2d", "2h", "4d", "5h"];
        expect(deck.getThreeOfaKind(myHand)).to.deep.equal(["2s", "2d", "2h"]);
    });
    it('should return four of a kind if hand has 4 cards combination', function () {
        var myHand = ["2s", "2d", "2h", "2c", "5h"];
        expect(deck.getFourOfaKind(myHand)).to.deep.equal(["2s", "2d","2h","2c"]);
    });

});


