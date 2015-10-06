/**
 * Logs the string surrounded by ****** 
 * (Makes it easier to see in a crowded console)
 *
 * @param {string} string
 * @returns {nothing}
 */
function logit(string) {
    console.log("****************" + string + "****************");
}

/**
 * console.log() shortcut
 * 
 * @param {string} string
 * @returns {nothing}
 */
function l(string) {
    console.log(string);
}

/**
 * alert() shortcut
 * 
 * @param {string} string
 * @returns {nothing}
 */
function a(string) {
    alert(string);
}

/**
 * Redirects a user to the url given
 *
 * @param {string} url
 * @returns {nothing}
 */
function redirect(url) {
    window.location = url;
}

/**
 * Displays friends for each baby step
 * 
 * @param {object} friends
 * @returns {string}
 */
function display_friends(friends) {
    var num_friends = friends.length;
    if (num_friends == 0) {
        return;
    } else if (num_friends == 1) {
        return "<p><a href='#'>" + friends[0].firstName + " " + friends[0].lastName + "</a> is also in Baby Step " + friends[0].babyStep + "</p>";
    } else if (num_friends == 2) {
        return "<p>\
                                <a href='#'>" + friends[0].firstName + " " + friends[0].lastName + "</a> and \
                                <a href='#'>" + friends[1].firstName + " " + friends[1].lastName + "</a> are also in Baby Step " + friends[0].babyStep + "\
                            </p>";
    } else if (num_friends == 3) {
        return "<p>\
                                <a href='#'>" + friends[0].firstName + " " + friends[0].lastName + "</a>, \
                                <a href='#'>" + friends[1].firstName + " " + friends[1].lastName + "</a>, \
                                and " + (friends.length - 2) + " other friend are also in Baby Step " + friends[0].babyStep + "\
                            </p>";
    } else if (num_friends > 3) {
        return "<p>\
                                <a href='#'>" + friends[0].firstName + " " + friends[0].lastName + "</a>, \
                                <a href='#'>" + friends[1].firstName + " " + friends[1].lastName + "</a>, \
                                and " + (friends.length - 2) + " other friends are also in Baby Step " + friends[0].babyStep + "\
                            </p>";
    }
}