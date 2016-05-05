var jQuery;
var QUnit;
var sinon;
var getDataFromJson;
var filterResults;
var formatData;
var display;

QUnit.test('Set Up Tests', function(assert) {
  assert.ok(filterResults, 'filterResults exists and is not undefined');
  assert.ok(formatData, 'formatData exists and is not undefined');
  assert.ok(display, 'display exists and is not undefined');
});

QUnit.test('Zero matching friends formatting', function(assert){
  var friendsOnStep = [];
  var myBabyStep = 1;
  assert.equal(formatData(friendsOnStep, myBabyStep), '');
});

QUnit.test('One matching friend formatting', function(assert){
  var friendsOnStep = ['Joe Smith'];
  var myBabyStep = 1;
  assert.equal(formatData(friendsOnStep, myBabyStep), '<p class=\"dynamic\"><span class=\"link\">Joe Smith</span> is also in Baby Step 1</p>');
});

QUnit.test('Two matching friends formatting', function(assert){
  var friendsOnStep = ['Joe Smith', 'Bob Smith'];
  var myBabyStep = 1;
  assert.equal(formatData(friendsOnStep, myBabyStep), '<p class=\"dynamic\"><span class=\"link\">Joe Smith</span> and <span class=\"link\">Bob Smith</span> are also in Baby Step 1</p>');
});

QUnit.test('Three matching friends formatting', function(assert){
  var friendsOnStep = ['Joe Smith', 'Bob Smith', 'Fred Smith'];
  var myBabyStep = 1;
  assert.equal(formatData(friendsOnStep, myBabyStep), '<p class=\"dynamic\"><span class=\"link\">Joe Smith</span>, <span class=\"link\">Bob Smith</span>, and 1 other friend are also in Baby Step 1</p>');
});

QUnit.test('Four matching friends formatting', function(assert){
  var friendsOnStep = ['Joe Smith', 'Bob Smith', 'Fred Smith', 'Jack Smith'];
  var myBabyStep = 1;
  assert.equal(formatData(friendsOnStep, myBabyStep), '<p class=\"dynamic\"><span class=\"link\">Joe Smith</span>, <span class=\"link\">Bob Smith</span> and 2 other friends are also in Baby Step 1</p>');
});

QUnit.test('Filtering results', function(assert){
  var myBabyStep = 2;
  var testData = {
    'friends': [
      {'firstName' : 'A', 'lastName' : 'Last', 'babyStep': 1},
      {'firstName' : 'B', 'lastName' : 'Last', 'babyStep': 2},
      {'firstName' : 'C', 'lastName' : 'Last', 'babyStep': 2},
      {'firstName' : 'D', 'lastName' : 'Last', 'babyStep': 3},
      {'firstName' : 'E', 'lastName' : 'Last', 'babyStep': 4},
      {'firstName' : 'F', 'lastName' : 'Last', 'babyStep': 5},
      {'firstName' : 'G', 'lastName' : 'Last', 'babyStep': 6},
      {'firstName' : 'H', 'lastName' : 'Last', 'babyStep': 7}
    ]
  };
  var expected = ['B Last', 'C Last'];
  assert.deepEqual(filterResults(testData, myBabyStep), expected);
});

QUnit.test('Displaying data', function(assert){
  var newElem = $( '#qunit-fixture' );
  var newContent = '<p>New data</p>';
  var oldContent = '<p>Old Data</p>';
  assert.equal( $( 'p', newElem ).length, 0, 'no current paragraphs' );
  newElem.append(oldContent);
  assert.equal( $( 'p', newElem ).length, 1, 'paragraph added successfully!' );
  assert.equal(newElem.html(), oldContent, 'old content added');
  display(newContent, newElem);
  assert.equal( $( 'p', newElem ).length, 1, 'still just one paragraph' );
  assert.equal(newElem.html(), newContent, 'old content replaced with new via display function');
});

QUnit.test('Getting data issues ajax request', function (assert) {
  var jQuerySpy = sinon.spy(jQuery, 'ajax');
  var testData = '../tests/testData.json';
  var step = 3;
  var element = $( '#qunit-fixture' );
  getDataFromJson(testData, step, element);

  assert.ok(jQuerySpy.calledOnce, 'ajax called');
  assert.equal(jQuery.ajax.getCall(0).args[0].url, '../tests/testData.json');
  assert.equal(jQuery.ajax.getCall(0).args[0].dataType, 'json');
});

QUnit.test('Fake server responds correctly', function (assert) {
  var callback = this.spy();

  var server = this.sandbox.useFakeServer();
  server.respondWith('GET', '../../baby-step.json',
                     [200, { 'Content-Type': 'application/json' },
                       '[{ "firstName": "A", "lastName": "B", "babyStep": 1 }]']);

  $.ajax({
    url: '../../baby-step.json',
    success: callback
  });

  server.respond();

  assert.ok(callback.calledOnce, 'Callback was called once');
  assert.ok(callback.calledWith([{ 'firstName': 'A', 'lastName': 'B', 'babyStep': 1 }]), 'Callback was called with correct arguments');
});
