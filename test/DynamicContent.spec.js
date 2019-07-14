let should = require('chai').should();
const babysteps = require('../App/baby-steps.json').friends;
let FriendBuilder = require('../source/FriendsBuilder');

function buildStep(step) {
    let currentFriends = babysteps.filter(obj => obj.babyStep == step);
    return FriendBuilder.generateFriendListByBabyStep(step, currentFriends);
}

describe('Dynamic Content Tests', function() {
  let Message;

  beforeEach(()=>{
    Message="Msg";
  });

  it('Should not show a message if nobody is on a step', () =>{
    Message = buildStep(1);
    Message.should.not.be.an("undefined");
    Message.should.equal('');
  });

  it('If 1 friend then should show\"X is also in step Y\"',()=>{
    Message = buildStep(2);
    Message.should.equal("<a href=\"\" class=\"friend-link\">Paul Taylor</a> is also in Baby Step 2");
  });

  it('If Two friends, then should show \"x and y are also in Baby Step Z\"',() =>{
    Message = buildStep(3);
    Message.should.equal("<a href=\"\" class=\"friend-link\">Sharon Thomas</a> and <a href=\"\" class=\"friend-link\">Thomas Harris</a> are also in Baby Step 3");
  });

  it('If More than Two friends then should show \"X,Y, and Z other friends are also in Baby Step A\"', () => {
    Message = buildStep(4);
    Message.should.equal("<a href=\"\" class=\"friend-link\">Deborah Lee</a>, <a href=\"\" class=\"friend-link\">Mark Young</a>, and 1 other friend are also in Baby Step 4");
    Message = buildStep(5);
    Message.should.equal("<a href=\"\" class=\"friend-link\">Joseph Lee</a>, <a href=\"\" class=\"friend-link\">Mary White</a>, and 2 other friends are also in Baby Step 5");
    Message = buildStep(6);
    Message.should.equal("<a href=\"\" class=\"friend-link\">Larry Robinson</a>, <a href=\"\" class=\"friend-link\">Kimberly Lopez</a>, and 3 other friends are also in Baby Step 6");
    Message = buildStep(7);
    Message.should.equal("<a href=\"\" class=\"friend-link\">Dorothy Moore</a>, <a href=\"\" class=\"friend-link\">Jose Jackson</a>, and 4 other friends are also in Baby Step 7");
  });
});
