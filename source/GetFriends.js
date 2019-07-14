let getFriends;

(function (exports) {
  function getRemoteFriends(callback) {
    let req = new XMLHttpRequest();
    req.onreadystatechange = () => {
      if (req.readyState === 4) {
        let res = JSON.parse(req.response);
    
        if (req.status == 200)
          callback(res.friends);
        else
          console.error("Failed to load (HTTP error)");
      }
    };
    req.open('GET', './baby-steps.json');
    req.send();
  }

  if (typeof (exports) !== "undefined")
    exports.getFriends = getRemoteFriends;
  getFriends = getRemoteFriends;
})(this);