'use strict';

class Message {
  constructor(content, authorId, timestamp) {
    this.content = content;
    this.authorId = authorId;
    this.timestamp = timestamp;
  }
}

function genRandomMs() {
  // Returns a random number between 5 and 15 seconds, in milliseconds
  return Math.floor(Math.random() * 1e4) + 5000;
}

function prettifyDate(timestamp) {
  // Returns the date in hh:mm am/pm format
  const options = { hour: '2-digit', minute: '2-digit' };
  return new Date(timestamp).toLocaleTimeString('en-US', options);
}

$(() => {
  function showMessage(msg) {
    const { content, authorId, timestamp } = msg;
    const $HtmlMsg = $(`
      <div class="message ${authorId ? 'right' : 'left'}">
        <div class="message-text">${content}</div>
        <div class="message-time">${prettifyDate(timestamp)}</div>
      </div>
    `);
    const $messages = $('.messages-container');
    $messages.append($HtmlMsg);
    $HtmlMsg.css({ opacity: 0, visibility: "visible" }).animate({ opacity: 1.0 }, 700);
    $messages.animate({
      scrollTop: $messages[0].scrollHeight
    }, 1000);
  }


  $('#msg-form').on('submit', (e) => {
    e.preventDefault();
    const content = $('#text').val();
    if (content) {
      $('#text').val('');
      const msg = new Message(content, true, Date.now());
      showMessage(msg);
    }
  });

  function simulateIncomingMessages() {
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      const msg = new Message(quotes[randomIndex].quote, false, Date.now());
      showMessage(msg);
      simulateIncomingMessages();
    }, genRandomMs());
  }

  simulateIncomingMessages();


  const quotes = [
    {"author":"Bill Sempf","id":44,"quote":"QA Engineer walks into a bar. Orders a beer. Orders 0 beers. Orders 999999999 beers. Orders a lizard. Orders -1 beers. Orders a sfdeljknesv.","permalink":"http://quotes.stormconsultancy.co.uk/quotes/44"},
    {"author":"Phil Karlton","id":43,"quote":"There are only two hard things in Computer Science: cache invalidation, naming things and off-by-one errors.","permalink":"http://quotes.stormconsultancy.co.uk/quotes/43"},
    {"author":"Jeff Atwood","id":42,"quote":"In software, we rarely have meaningful requirements. Even if we do, the only measure of success that matters is whether our solution solves the customer\u2019s shifting idea of what their problem is.","permalink":"http://quotes.stormconsultancy.co.uk/quotes/42"},
    {"author":"Robert Sewell","id":41,"quote":"If Java had true garbage collection, most programs would delete themselves upon execution.","permalink":"http://quotes.stormconsultancy.co.uk/quotes/41"},
    {"author":"Gavin Russell Baker","id":40,"quote":"C++ : Where friends have access to your private members.","permalink":"http://quotes.stormconsultancy.co.uk/quotes/40"},
    {"author":"Bjarne Stroustrup","id":39,"quote":"In C++ it\u2019s harder to shoot yourself in the foot, but when you do, you blow off your whole leg.","permalink":"http://quotes.stormconsultancy.co.uk/quotes/39"},
    {"author":"Alan Kay","id":38,"quote":"Most software today is very much like an Egyptian pyramid with millions of bricks piled on top of each other, with no structural integrity, but just done by brute force and thousands of slaves.","permalink":"http://quotes.stormconsultancy.co.uk/quotes/38"},
    {"author":"Larry DeLuca","id":37,"quote":"I\u2019ve noticed lately that the paranoid fear of computers becoming intelligent and taking over the world has almost entirely disappeared from the common culture.  Near as I can tell, this coincides with the release of MS-DOS.","permalink":"http://quotes.stormconsultancy.co.uk/quotes/37"},
    {"author":"Mark Gibbs","id":36,"quote":"No matter how slick the demo is in rehearsal, when you do it in front of a live audience, the probability of a flawless presentation is inversely proportional to the number of people watching, raised to the power of the amount of money involved.","permalink":"http://quotes.stormconsultancy.co.uk/quotes/36"},
    {"author":"Henry Petroski","id":35,"quote":"The most amazing achievement of the computer software industry is its continuing cancellation of the steady and staggering gains made by the computer hardware industry.","permalink":"http://quotes.stormconsultancy.co.uk/quotes/35"},
    {"author":"Jeremy S. Anderson","id":34,"quote":"There are two major products that come out of Berkeley: LSD and UNIX.  We don\u2019t believe this to be a coincidence.","permalink":"http://quotes.stormconsultancy.co.uk/quotes/34"},
    {"author":"Sam Ewing","id":33,"quote":"Computers are like bikinis. They save people a lot of guesswork.","permalink":"http://quotes.stormconsultancy.co.uk/quotes/33"},
    {"author":"Jamie Zawinski","id":32,"quote":"Linux is only free if your time has no value.","permalink":"http://quotes.stormconsultancy.co.uk/quotes/32"},
    {"author":"Dick Brandon","id":31,"quote":"Documentation is like sex; when it's good, it's very, very good, and when it's bad, it's better than nothing.","permalink":"http://quotes.stormconsultancy.co.uk/quotes/31"},
    {"author":"Richard Moore","id":30,"quote":"The difference between theory and practice is that in theory, there is no difference between theory and practice.","permalink":"http://quotes.stormconsultancy.co.uk/quotes/30"},
    {"author":"Michael Sinz","id":29,"quote":"Programming is like sex: one mistake and you\u2019re providing support for a lifetime.","permalink":"http://quotes.stormconsultancy.co.uk/quotes/29"},
    {"author":"Bjarne Stroustrup","id":28,"quote":"There are only two kinds of programming languages: those people always bitch about and those nobody uses.","permalink":"http://quotes.stormconsultancy.co.uk/quotes/28"},
    {"author":"Donald Knuth","id":27,"quote":"Beware of bugs in the above code; I have only proved it correct, not tried it. ","permalink":"http://quotes.stormconsultancy.co.uk/quotes/27"},
    {"author":"Tom Van Vleck","id":26,"quote":"We know about as much about software quality problems as they knew about the Black Plague in the 1600s. We\u2019ve seen the victims\u2019 agonies and helped burn the corpses. We don\u2019t know what causes it; we don\u2019t really know if there is only one disease. We just suffer \u2014 and keep pouring our sewage into our water supply.","permalink":"http://quotes.stormconsultancy.co.uk/quotes/26"},
    {"author":"N.J. Rubenking","id":25,"quote":"Writing the first 90 percent of a computer program takes 90 percent of the time. The remaining ten percent also takes 90 percent of the time and the final touches also take 90 percent of the time.","permalink":"http://quotes.stormconsultancy.co.uk/quotes/25"},
    {"author":"C. A. R. Hoare","id":24,"quote":"There are two ways of constructing a software design; one way is to make it so simple that there are obviously no deficiencies, and the other way is to make it so complicated that there are no obvious deficiencies. The first method is far more difficult.","permalink":"http://quotes.stormconsultancy.co.uk/quotes/24"},
    {"author":"James O. Coplien","id":23,"quote":"You should name a variable using the same care with which you name a first-born child.","permalink":"http://quotes.stormconsultancy.co.uk/quotes/23"},
    {"author":"Fred Brooks","id":22,"quote":"Einstein argued that there must be simplified explanations of nature, because God is not capricious or arbitrary. No such faith comforts the software engineer.","permalink":"http://quotes.stormconsultancy.co.uk/quotes/22"},
    {"author":"Unknown","id":21,"quote":"XML is like violence \u2013 if it doesn\u2019t solve your problems, you are not using enough of it.","permalink":"http://quotes.stormconsultancy.co.uk/quotes/21"},
    {"author":"Unknown","id":20,"quote":"Saying that Java is good because it works on all platforms is like saying anal sex is good because it works on all genders.","permalink":"http://quotes.stormconsultancy.co.uk/quotes/20"},
    {"author":"Douglas Adams","id":19,"quote":"I love deadlines. I like the whooshing sound they make as they fly by.","permalink":"http://quotes.stormconsultancy.co.uk/quotes/19"},
    {"author":"Keith Bostic","id":18,"quote":"Perl \u2013 The only language that looks the same before and after RSA encryption.","permalink":"http://quotes.stormconsultancy.co.uk/quotes/18"},
    {"author":"Albert Einstein","id":17,"quote":"Two things are infinite: the universe and human stupidity; and I\u2019m not sure about the universe.","permalink":"http://quotes.stormconsultancy.co.uk/quotes/17"},
    {"author":"Yogi Berra","id":16,"quote":"In theory, theory and practice are the same. In practice, they\u2019re not.","permalink":"http://quotes.stormconsultancy.co.uk/quotes/16"},
    {"author":"E. W. Dijkstra","id":15,"quote":"It is practically impossible to teach good programming style to students that have had prior exposure to BASIC. As potential programmers, they are mentally mutilated beyond hope of regeneration.","permalink":"http://quotes.stormconsultancy.co.uk/quotes/15"},
    {"author":"E. W. Dijkstra","id":14,"quote":"If debugging is the process of removing software bugs, then programming must be the process of putting them in.","permalink":"http://quotes.stormconsultancy.co.uk/quotes/14"},
    {"author":"Mitch Ratcliffe","id":13,"quote":"A computer lets you make more mistakes faster than any other invention in human history, with the possible exceptions of handguns and tequila.","permalink":"http://quotes.stormconsultancy.co.uk/quotes/13"},
    {"author":"Bjarne Stroustrup","id":12,"quote":"I have always wished for my computer to be as easy to use as my telephone; my wish has come true because I can no longer figure out how to use my telephone.","permalink":"http://quotes.stormconsultancy.co.uk/quotes/12"},
    {"author":"Ovidiu Platon","id":11,"quote":"I don\u2019t care if it works on your machine! We are not shipping your machine!","permalink":"http://quotes.stormconsultancy.co.uk/quotes/11"},
    {"author":"Rich Cook","id":10,"quote":"Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning.","permalink":"http://quotes.stormconsultancy.co.uk/quotes/10"},
    {"author":"Rick Osborne","id":9,"quote":"Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.","permalink":"http://quotes.stormconsultancy.co.uk/quotes/9"},
    {"author":"Charles Babbage","id":8,"quote":"On two occasions I have been asked, \u2018Pray, Mr. Babbage, if you put into the machine wrong figures, will the right answers come out?\u2019 I am not able rightly to apprehend the kind of confusion of ideas that could provoke such a question.\u201d","permalink":"http://quotes.stormconsultancy.co.uk/quotes/8"},
    {"author":"Jon Ribbens","id":7,"quote":"PHP is a minor evil perpetrated and created by incompetent amateurs, whereas Perl is a great and insidious evil, perpetrated by skilled but perverted professionals.","permalink":"http://quotes.stormconsultancy.co.uk/quotes/7"},
    {"author":"Bill Gates","id":6,"quote":"Measuring programming progress by lines of code is like measuring aircraft building progress by weight.","permalink":"http://quotes.stormconsultancy.co.uk/quotes/6"},
    {"author":"Brian Kernighan","id":5,"quote":"Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.","permalink":"http://quotes.stormconsultancy.co.uk/quotes/5"},
    {"author":"Jamie Zawinski","id":4,"quote":"Some people, when confronted with a problem, think \u201cI know, I\u2019ll use regular expressions.\u201d Now they have two problems.","permalink":"http://quotes.stormconsultancy.co.uk/quotes/4"},
    {"author":"Hofstadter\u2019s Law","id":3,"quote":"It always takes longer than you expect, even when you take into account Hofstadter\u2019s Law.","permalink":"http://quotes.stormconsultancy.co.uk/quotes/3"},
    {"author":"Edward V Berard","id":2,"quote":"Walking on water and developing software from a specification are easy if both are frozen.","permalink":"http://quotes.stormconsultancy.co.uk/quotes/2"},
    {"author":"C. A. R. Hoare","id":1,"quote":"We should forget about small efficiencies, say about 97% of the time: premature optimization is the root of all evil.","permalink":"http://quotes.stormconsultancy.co.uk/quotes/1"}]
});
