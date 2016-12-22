(function($, window, document) {
  var songs = [
    {
      "title": "Santa Baby",
      "lyric": [
        "Santa baby, just slip a sable under the tree for me; <br> Been an awful good girl, Santa baby <br> and hurry down the chimney tonight",
        "Santa baby, a '54 convertible too, light blue <br> I'll wait up for you dear, Santa baby <br> and hurry down the chimney tonight",
        "Think of all the fun I've missed <br> Think of all the fellas that I haven't kissed <br> Next year I could be just as good... <br> if you'd check off my Christmas list"
      ]
    },
    {
      "title": "Let it Snow",
      "lyric": [
        "Oh the weather outside is frightful <br> But the fire is so delightful <br> And since we've no place to go <br> Let It Snow! Let It Snow! Let It Snow!",
        "It doesn't show signs of stopping <br> And I've bought some corn for popping <br> The lights are turned way down low <br> Let It Snow! Let It Snow! Let It Snow!",
        "When we finally kiss good night <br> How I'll hate going out in the storm! <br> But if you'll really hold me tight <br> All the way home I'll be warm"
      ]
    },
    {
      "title": "Jingle Bell Rock",
      "lyric": [
        "Jingle bell, jingle bell, jingle bell rock <br> Jingle bells swing and jingle bells ring <br> Snowing and blowing up bushels of fun <br> Now the jingle hop has begun",
        "Jingle bell, jingle bell, jingle bell rock <br> Jingle bells chime in jingle bell time <br> Dancing and prancing in Jingle Bell Square <br> In the frosty air.",
        "What a bright time, it's the right time <br> To rock the night away"
      ]
    },
    {
      "title": "It's Beginning to Look a Lot Like Christmas",
      "lyric": [
        "It's beginning to look a lot like Christmas <br> Ev'rywhere you go; <br> Take a look in the five-and-ten, glistening once again <br> With candy canes and silver lanes aglow.",
        "It's beginning to look a lot like Christmas, <br> Toys in ev'ry store, <br> But the prettiest sight to see is the holly that will be <br> On your own front door.",
        "A pair of hopalong boots and a pistol that shoots <br> Is the wish of Barney and Ben; <br> Dolls that will talk and will go for a walk <br> Is the hope of Janice and Jen; <br> And Mom and Dad can hardly wait for school to start again."
      ]
    },
    {
      "title": "Frosty the Snowman",
      "lyric": [
        "Frosty the Snowman, was a jolly happy soul, <br> With a corn cob pipe and a button nose, and two <br> eyes made of coal.",
        "Frosty the Snowman, is a fairytale, they say. <br> He was made of snow, but the children know he <br> came to life one day.",
        "There must have been some magic in that old silk <br> hat they found,",
        "For when they placed it on his head, he began to <br> dance around!"
      ]
    },
    {
      "title": "Here Comes Santa Claus",
      "lyric": [
        "Here comes Santa Claus, here comes Santa Claus, <br> Right down Santa Claus lane <br> Vixen and Blitzen and all his reindeer <br> Pullin' on the reins <br> Bells are ringin', children singin' <br> All is merry and bright <br> Hang your stockings and say your prayers <br> 'Cause Santa Claus comes tonight!",
        "Here comes Santa Claus, here comes Santa Claus, <br> Right down Santa Claus lane <br> He's got a bag that's filled with toys <br> For boys and girls again <br> Hear those sleigh bells jingle jangle, <br> Oh what a beautiful sight <br> So jump in bed and cover your head <br> 'Cause Santa Claus comes tonight!"
      ]
    },
    {
      "title": "It's The Most Wonderful Time of the Year",
      "lyric": [
        "It's the most wonderful time of the year <br> With the kids jingle belling <br> And everyone telling you 'Be of good cheer' <br> It's the most wonderful time of the year <br> It's the hap-happiest season of all <br> With those holiday greetings and gay happy meetings <br> When friends come to call <br> It's the hap- happiest season of all",
        "There'll be parties for hosting <br> Marshmallows for toasting <br> And caroling out in the snow <br> There'll be scary ghost stories <br> And tales of the glories of <br> Christmases long, long ago"
      ]
    },
    {
      "title": "Rudolph The Red Nosed Reindeer",
      "lyric": [
        "You know Dasher, and Dancer, and <br> Prancer, and Vixen, <br> Comet, and Cupid, and <br> Donder and Blitzen <br> But do you recall <br> The most famous reindeer of all",
        "Rudolph, the red-nosed reindeer <br> had a very shiny nose <br> and if you ever saw it <br> you would even say it glows."
      ]
    },
    {
      "title": "Silent Night",
      "lyric": [
        "Silent night, holy night! <br> All is calm, all is bright. <br> Round yon Virgin, Mother and Child. <br> Holy infant so tender and mild, <br> Sleep in heavenly peace, <br> Sleep in heavenly peace",
        "Silent night, holy night! <br> Shepherds quake at the sight. <br> Glories stream from heaven afar <br> Heavenly hosts sing Alleluia, <br> Christ the Savior is born! <br> Christ the Savior is born"
      ]
    },
    {
      "title": "Santa Claus is Coming to Town",
      "lyric": [
        "You better watch out <br> You better not cry <br> Better not pout <br> I'm telling you why <br> Santa Claus is coming to town",
        "He's making a list <br> And checking it twice <br> Gonna find out Who's naughty and nice <br> Santa Claus is coming to town",
        "He sees you when you're sleeping <br> He knows when you're awake <br> He knows if you've been bad or good <br> So be good for goodness sake!"
      ]
    },
    {
      "title": "We Wish You A Merry Christmas",
      "lyric": [
        "We wish you a Merry Christmas, <br> We wish you a Merry Christmas, <br> We wish you a Merry Christmas, <br> And a Happy New Year.",
        "Good tidings to you, <br> And all of your kin, <br> Good tidings for Christmas, <br> And a Happy New Year.",
        "We all know that Santa's coming, <br> We all know that Santa's coming, <br> We all know that Santa's coming, <br> And soon will be here."
      ]
    },
    {
      "title": "Jingle Bells",
      "lyric": [
        "Dashing through the snow <br> On a one horse open sleigh <br> O'er the fields we go, <br> Laughing all the way <br> Bells on bob tail ring, <br> making spirits bright <br> What fun it is to laugh and sing <br> A sleighing song tonight",
        "Oh, jingle bells, jingle bells <br> Jingle all the way <br> Oh, what fun it is to ride <br> In a one horse open sleigh <br> Jingle bells, jingle bells <br> Jingle all the way <br> Oh, what fun it is to ride <br> In a one horse open sleigh"
      ]
    }
  ];

  $(document).ready(function() {
    var songContainer = $('.christmas-carol');
    var songTitle     = $('.christmas-carol__title');
    var songLyric     = [];
    var songIndex     = ~~(Math.random() * songs.length);

    songTitle.text(songs[songIndex].title);

    $.each(songs[songIndex].lyric, function(index, val) {
      songLyric.push( '<p>' + val + '</p>' );
    });

    $(songLyric.join('')).appendTo(songContainer);
  });
}(window.jQuery, window, document));
