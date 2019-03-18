function cmp (a, b) {
    if (a.lastName < b.lastName) return -1;
    if (a.lastName > b.lastName) return 1;
    return 0;
}

$s = 0;
$().ready(function() {
    $('.navs a').click(function(e){
        e.preventDefault();

        $('.nav a').removeClass('active');

        $(this).addClass('active');

        var href = $(this).attr('href');

        $('.content').animate({
            scrollTop:  ((href.substr(3, 1) - 1) * 450)
        }, 500); 
    });

    $.ajax({
        url: 'baby-steps.json',
        success: function(d) {
            if(typeof(d != 'undefined') && typeof(d['friends'] != 'undefined') && (d['friends'].length > 0)) {
                bs = [];

                d['friends'].sort(cmp);

                for (i = 0; i < d['friends'].length; i++) {
                    if(typeof(bs[d['friends'][i]['babyStep']]) == 'undefined'){ 
                        bs[d['friends'][i]['babyStep']] = [];
                    }

                    bs[d['friends'][i]['babyStep']].push(d['friends'][i]);
                }

                for (i = 0; i < bs.length; i++) {
                    if (typeof(bs[i]) != 'undefined') {
                        if (bs[i].length > 3) {
                            $('#bs'+i+'_result').html("<a>" + bs[i][0]['firstName'] + " " + bs[i][0]['lastName'] + "</a>, <a>" + bs[i][1]['firstName'] + " " + bs[i][1]['lastName'] + "</a>, and " + (bs[i].length - 2) + " other friends are also in Baby Step " + i);
                        } else if (bs[i].length == 3) {
                            $('#bs'+i+'_result').html("<a>" + bs[i][0]['firstName'] + " " + bs[i][0]['lastName'] + "</a>, <a>" + bs[i][1]['firstName'] + " " + bs[i][1]['lastName'] + "</a>, and 1 other friend are also in Baby Step " + i);
                        } else if (bs[i].length == 2) {
                            $('#bs'+i+'_result').html("<a>" + bs[i][0]['firstName'] + " " + bs[i][0]['lastName'] + "</a> and <a>" + bs[i][1]['firstName'] + " " + bs[i][1]['lastName'] + "</a> are also in Baby Step " + i);
                        } else if (bs[i].length == 1) {
                            $('#bs'+i+'_result').html("<a>" + bs[i][0]['firstName'] + " " + bs[i][0]['lastName'] + "</a> is also in Baby Step " + i);
                        }
                    }
                }
            }
        },
        dataType: 'json'
    });
});
