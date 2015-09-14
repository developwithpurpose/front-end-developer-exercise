/*jshint esnext: true */


describe("App", function() {
  beforeEach(function() {
            ReactTestUtils = React.addons.ReactTestUtils;
        });

        it("Check if App renders", function () {
                    ReactTestUtils.renderIntoDocument(app);
                    expect(label.refs.p.props.children).toBe("Some Text We Need for Test")
                });
            });
