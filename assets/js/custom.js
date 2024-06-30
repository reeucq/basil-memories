const quotes = [
  "Welcome to white space. You've been living here for as long as you can remember.",
  "Bangs, you should always try your best at everything, how else will people know how awesome you are?",
  "These are sunflowers. They're called that because they always face towards the sun. That's how I want to be like… someone who always sees the bright side of things.",
  "These flowers are called lily of the valley, It's said that they're able to ward off evil spirits and help people see a brighter future… I guess they always remind me of MARI. I can always count on her to help me stay positive.",
  "Pink roses symbolize admiration… Orange roses symbolize passion… Yellow roses symbolize friendship… and the list goes on. Hero doesn't remind me of any rose in particular, I think hero's like all roses, because he's versatile and universally loved!",
  "These are a type of flower called the gladiolus, also known as sword flower.They represent strength of character. Someone who is honest, with strong moral values… Someone who stands by their convictions… The gladiolus reminds me of AUBREY, because she's always true to herself.",
  "Cacti are very sturdy and resilient plants by nature. They don't need much care and can survive in seemingly impossible conditions. I guess what I am saying is, even you could take care of a cactus, Kel…",
  "And these? These are white tulips, tulips aren't very flashy plants. They're not too big or small, not too elaborate or flamboyant. If I could say in another way… I guess I would say that… they're comfortable. Simple, Modest & Perfect.",
  "Look at all of us... These are all of our memories together... They're a little sad now... But we should be happy that they happened at all... Let's make some new memories together, okay?",
  "That's one small step for Kel, and one large step for KELKIND!!",
  "You know what I always say… You just gotta wake up and smell the roses!",
  "Hey, you kids! We're looking for a high-profile and very expensive rogue planet named PLUTO. He's a big circular grayish guy with huge, bulging muscles. My name is PLUTO and I'm a rogue planet, a vagabond if you will. I do apologise for causing everyone so much trouble.",
  "Like I always say… Feelings are for Losers!!!",
  "Everyone… I know it's tough right now, but we have to stay positive! We all should try to be like BASIL! Even when BASIL is upset, he always manages to smile.",
  "I miss him talking about all the stuff that he's into… like all the flower stuff… and the photo stuff… and the art stuff… and the reading stuff…",
  "Welcome to lost forest, where you find things you never knew were lost in the first place… Or perhaps they're forgotten for a reason.",
  "Trying to lose yourself? Or have you accomplished that already? Either way, this is the right place for you. Perhaps that's why you've come here… to finish the job.",
  "Morals are lost on the wicked. How does one define malice without intent? Why do you continue down this path when it's most certainly not the right way?",
  "There is an old saying about wasting time when living a life that is not your own. Dreams can feel like that, like this forest.",
  "Sometimes when we hide things from ourselves, we create different truths and eventually forget our way. Have you found yours yet, or are you still lost?",
  "In the beginning, there existed only two… the DREAMER and his room. The DREAMER grew weary of his room and created a door that led to many different worlds. Walking the path as a visitor to these worlds, the DREAMER would come and go as he pleased.",
  "Slips and falls, tumbles and drops… the DREAMER's curiosity and clumsy exploration eventually led him to a certain world. One not like the others… One painted with chaos and bathed in darkness. The DREAMER slowly became filled with dread.",
  "Quiet as they may have been, words of malice crept into his mind. Whispering lies, secrets, and truths.",
  "Powerless to silence the noise, the DREAMER manifested benevolent entities in his different worlds… Then he compounded his worlds above the dark realm… seeing it with their combined might. Yet despite his valiant efforts, the darkness's presence never abated.",
  "Even with new allies, the darkness continued to scrape and scratch at the back of DREAMER's mind. The DREAMER could run and bury away his fears, but one still has to face his own reflection. The DREAMER's own power was his greatest adversary.",
  "Knowledge… or the absence of it, would become the DREAMER's greatest gift. To truly escape the perils of is own faculty and ascend to a blissful state of ignorance… Only then would the noise cease to agitate the DREAMER's sanity.",
  "So… The DREAMER took on another name… and chose to forget himself. From that time on the DREAMER has lived amongst us… simply as an inhabitant of this world… Travelling along blissfully, ignorant of his own fabrication.",
  "As with all the things that are born in and out of this world, an end will threaten this one too. Though the DREAMER may have subdued the inexorable, the darkness grows still. No bandage can stifle an eternal wound… and there will be a time when its influence will bleed through.",
  "Forget the DREAMER may be of this peril, a peril never forgets to be. Yet, the end of this world may be an inevitability.",
  "It's sunset, A strange statue watches over the hidden lake. It might have meant something significant in the past but time has made it's engravings illegible. Our Dearest Mari, The sun shined brighter when she was here.",
  "Don't forget it's in the toy box.",
  "One by one they fell asleep on the car ride home. It was a long day at the beach, after all, and everyone was exhausted.",
  "As the sun set over faraway, his head accidentally drops onto his shoulders. The sudden jolt wakes him but he doesn't dare open his eyes. He pretends to be asleep and steadies his breathing. He listens to the sound of the road.",
  "He feels the soft sun resting on his skin, and the slight tinge of pain on his nose from tomorrow's sunburn. He is happy… very very happy… and he makes a vow to himself that no matter what, he will remember this moment forever.",
  "Try your best to keep in touch, Friends are harder to make the older you get!",
  "Blank: Your memories are not free, To gain a memory, another must be shrouded. And yet… All memories will eventually fade. Perhaps you've already noticed the curse of Deeper Well.",
  "Mute: An unhallowed burden has been placed upon you. You have the power to change the future. What will you do DREAMER? What will you do?",
  "Minus: It is selfish to dream for so long when there are those who are expecting you.",
  "Decay: Time will always move forward. Eventually the truth will become clear… You know this well… don't you, DREAMER?",
  "Absent: The universe is full of questions that you will never answer. Yet… there are also ones that only you can answer. When the truth is revealed, what will you do?",
  "Null: Humans are bound creatures. Your limits are what define you. What makes you human?",
  "Empty : With time, what is important will change. You must choose what you'll keep and what you'll cast away.",
  "Parvenu : What if its up to you? What if its only up to you? Carry on DREAMER, you're the only one who can.",
  "Aught : When trouble shows itself, there's always the choice to run. But one day, you may very well find yourself running alone.",
  "Cipher : The sun shined brighter… when she was here…",
  "Branch Coral : Deeper layers of this world open up as DREAMER grows more desperate.",
  "Branch Coral: The friend you've lost in not in this world. The day he was removed, he was reborn elsewhere. Age has removed his conscience and he has evolved into a parasite within himself. He lives here, just beyond this cavern. He is special to you.",
  "A string of fate ties you two together. He cannot leave that place alone. To retrieve him, you'll have to remove yourself as well, but in a way that is natural for this world. FOR HEADSPACE.",
  "Before this world was created, there existed three creatures… the oldest, the wisest and the favorite.",
  "The wisest, against her reason, committed an act that opposed the DREAMER's will. It is an act that is not even known to me. As a result, she was stripped of her wisdom and banished to isolation… a special prison somewhere deep, deep down.",
  "To be in WHITE SPACE is to be nothing. WHITE SPACE is emptiness, a home without warmth. A place to survive, but not to live. Even still, your conscience can't be erased. It'll always find a way in.",
  "Even in WHITE SPACE, it will take the form… and if one wills it, something will be formed to subdue it. like a hanging black light bulb… the repression of an idea",
  "The last and favorite, the BIG YELLOW CAT, was chosen to watch over the DREAMER's most precious room.",
  "Void: How far will you go to save a friend?",
  "Death may be no danger here but the memories of them do not fade so easily. Many times, your Friends have met with an unfortunate fate.",
  "Your dear sister Mari with a bad knee… You could not bear for her to die again so she was given the safety of a picnic blanket.",
  "The souls assigned to your friends… They are fragile and must be protected. And so they must remain asleep.",
  "The end of this journey will lead to suffering… but if you do not face this, you cannot continue. Welcome to black space.",
  "The flower boy who is closest to the truth… whose eyes glow an eerie red. I have seen what you've done to him before… and pray that you don't find him again.",
  "This place has changed a great deal since you were last here. Will you be able to find your way back, or will you finally lose yourself?",
  "You may not be in control now… but do not lose hope, DREAMER. There are those who still believe in you.",
  "Why must you take that cursed form? It is indeed strong and can protect you… but if you rely on it too often… What you will sacrifice can never be reclaimed.",
  "These rooms… are full of broken things… but at least in here, I can see who you really are.",
  "The world that you created above this one… Did you make it to protect this place or hide it away? Either way, its become more powerful than you.",
  "Lost in this confusion lies the root of everything. The truth that you've looked away. You must find it no matter what. You have to… for the both of us. When you hid the truth, you sealed a part of me with it. He's been waiting for someone to save him all this time.",
  "Liar. Liar. Liar. Liar. Liar. Liar. Liar. Liar. Liar. Liar. Liar. Liar. One that day… When you became nothing… I was split in half. Which one do you think was more painful?",
  "Our friends have suffered because of us. Can we still call them friends? No matter how much I want it, things can't go back to the way they were before. But why does part of me still cling on? Is there still hope left for us, Sunny?",
  "You've been running from this for so long. But this time, we can face it together. Sunny, why did it end up like this? I'm… I'm so sorry. Will you forgive me? My best friend… Please it hurts, tell them to let go. Please tell them to stop. Help me!",
  "There have been a lot of things that were unsaid these past few years… and painful memories that we kept to ourselves. Maybe one day things can go back to the way they were before.",
  "Here's a lesson from your old man. As you get older, it's going to get harder and harder to make friends… So if you think you have a good one… its important to cherish them. Friends can be for life, you hear me!",
  "Yeah… last time we all made the mistake of leaving each other when we needed each other the most. This time… we'll stay together.",
  "Don't worry. Everything is going to be okay. Will you forgive me? My best friend… Please",
  "I've always dreamed that you'd come back for me… But maybe it's too late. The truth of that day will be hard to accept. When you see it… you've to be strong. Please… forgive me.",
  "You couldn't have done it, It was something behind you… wasn't it?",
  "I don't want to be alone… not again… You can't leave me again…",
  "Something behind you… I'll get rid of it once and for all…",
  "I'm scared too but this is for the best",
  "Is… going to be okay.",
  "You've caused so much suffering, yet you do nothing. And so you've earned nothing in return. Your friends will never forgive you. They'll abandon you like you did them… and that's what you deserve.",
  "You tell yourself that you don't want to burden others… But the truth is that you're selfish. You just don't want people to depend on you. When do you think about others? How long are you going to let people take care of you? You say you care but you're a liar.",
  "You've never done anything for anyone else. You're useless… less than useless… you're sick. People like you don't deserve to live. Your friends are wrong about you. The person they love isn't you at all. You let them believe in a lie to protect yourself.",
  "If they know the truth you'll never be able to regain their trust. No matter what you do, it'll be hopeless. All you'll do is make things worse. It would be better to just die. You killed her.",
  "There's no way out of this, is there?",
  "You know… Waltzes were always my favorite. That's why I chose this song for our last recital. But you always hated it, didn't you? How I'd lock myself away on the piano… All that practicing… playing that same song over and over.",
  "When you first picked up your new violin, u were so eager to play with me. But keeping up with something isn't so easy. I'm sorry… I just wanted it to be perfect. We never did get to play at the last recital. Do you want to play it with me now?",
  "The anxious feeling in your heart as you played the first note of your new violin. You didn't want to disappoint them. Because they were your friends.",
  "It's not just about memories… it's about us! I know that we'll be friends for a really long time. Goodbye… little brother.",
  "Our Dearest Mari, The sun shined brighter when she was here.",
  "You'll forgive yourself, won't you Sunny?",
  "I don't know if I've ever said this properly, but… I'm sorry for causing you so much trouble. When I gave you my photo album, I really did want you to have it.",
  "But somehow, whenever I help, I always end up burdening you instead. All this pain we've been feeling… The guilt in our hearts… The photos in our album… They're not just photos… They're real memories. Let's make some new memories together, okay?",
  "One more day, the sun reaches my bed. One more day to spend alone again. Morning starts without me. I seem to find it hard to wake up. Steadily my thoughts take hold of me. It's hard to stay awake or fall asleep. Memories of the past, Both the good and the bad. Overwhelm me.",
  "There's so much I wish I could take back. Sometimes I think maybe its too late. Though the pain remains, And though it may be hard, I'll carry on. Time to rise and shine. Good Morning!",
];

// Function to get a random quote
function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

// Typewriter function
function typeWriter(text, i, fnCallback) {
  if (i < text.length) {
    document.getElementById("quote").innerHTML =
      text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

    setTimeout(function () {
      typeWriter(text, i + 1, fnCallback);
    }, 50);
  } else if (typeof fnCallback == "function") {
    setTimeout(fnCallback, 700);
  }
}

// Function to start the typewriter effect
function startTypewriter() {
  let quote = getRandomQuote();
  typeWriter(quote, 0, function () {
    // Callback after typing is complete
  });
}

// Event listener for the  click
document.addEventListener("click", function () {
  document.getElementById("quote").innerHTML = "";
  startTypewriter();
});

// Initial call to display the first quote
startTypewriter();

document.addEventListener("mousemove", function (e) {
  var trail = document.createElement("div");
  trail.className = "trail";
  trail.style.left = e.pageX + "px";
  trail.style.top = e.pageY + "px";
  document.body.appendChild(trail);
  setTimeout(() => {
    document.body.removeChild(trail);
  }, 500);
});

function shakeScreen() {
  document.body.style.animation = "shake 0.5s";
  setTimeout(() => {
    document.body.style.animation = "";
  }, 500);
}

setInterval(() => {
  if (Math.random() < 0.1) {
    shakeScreen();
  }
}, 20000);
