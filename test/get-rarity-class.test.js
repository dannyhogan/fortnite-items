const test = QUnit.test;

QUnit.module('rarity class');

test('gets rarity class from item data', assert => {
    //arrange
    const itemData = {
        item: { 
            rarity: 'epic' 
        }
    };

    const expected = 'epic';
    //act
    const result = getRarityClass(itemData);
    //assert
    assert.equal(result, expected);
});

function getRarityClass(itemData) {
    
    let rarityClass;

    if(itemData.item.rarity === 'legendary') {
        rarityClass = 'legendary';
    } else if(itemData.item.rarity === 'epic') {
        rarityClass = 'epic';
    } else if(itemData.item.rarity === 'rare') {
        rarityClass = 'rare';
    } else if(itemData.item.rarity === 'uncommon') {
        rarityClass = 'uncommon';
    } else if(itemData.item.rarity === 'common') {
        rarityClass = 'common';
    } else {
        rarityClass = '';
    }
 
    return rarityClass;
}