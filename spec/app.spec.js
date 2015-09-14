/*jshint esnext: true */


describe("App", function() {
  beforeEach(function() {
            ReactTestUtils = React.addons.ReactTestUtils;
        });

        it("Check if App renders", function () {
                    var label = <Label>Some Text We Need for Test</Label>;
                    ReactTestUtils.renderIntoDocument(app);
                    expect(label.refs.p.props.children).toBe("Some Text We Need for Test")
                });
            });
