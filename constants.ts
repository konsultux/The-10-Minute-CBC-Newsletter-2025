import { Book, ReadingListItem, EventDetails } from './types';

export const INTRO_TEXT = `As we approach the close of the year, I am truly grateful for all of you who have joined us in the 10mincbc community, as we strive to grow in knowledge of God together, and thus deepen our faith and love for Him. We began this journey in May of this year and since then we have grown tremendously, both in the number of those who have joined the community and the books we have read. 
Here’s a look back at the four incredible books that carried us through our very first year together:`;

export const CLOSING_TEXT = `In closing, this has been a delightful adventure that we have been on, that even in the midst of our busy lives we have seen that ten minutes a day can spark a quiet revolution in our hearts. Though the reading is individual, it has been a blessing to go on this journey with all of you. I look forward to reading more books next year with more of you, drawing closer to Christ each day and growing in knowledge and love for our faith.
May the Infant Christ fill your hearts and homes with peace this Christmas, and may 2026 be a year full of blessings, joy and literary beauty.`;

export const SIGN_OFF = {
  line1: "With so much gratitude and love,",
  name: "Nyandia Maina",
  role: "Co-Founder & Moderator , The 10-Minute CBC."
};

export const PAST_BOOKS: Book[] = [
  {
    id: 1,
    title: "Searching For and Maintaining Peace: A Small Treatise on Peace of Heart",
    author: "Father Jacques Philippe",
    imagePlaceholderId: 10,
    quote: "Interior peace is not the absence of problems but the presence of confident abandonment to God.",
    description: `This tiny book was the spark that started it all. After my spiritual director handed it to me after going to him with my own anxieties about the future, I thought “well, here is a book everyone should read!”. And with tremendous encouragement and help from my husband, The 10minCBC was born!
    
Our age is characterized by an extraordinary amount of agitation and lack of peace. This tendency manifests itself in our spiritual as well as our secular life. In our search for God and holiness, in our relationships and work, a kind of restlessness and anxiety take the place of the confidence and peace which ought to be ours. What must we do to overcome the moments of fear and distress which assail us all too often in our lives? How can we learn to place all our confidence in God and abandon ourselves into his loving care? This is what is taught in this simple, yet profound little book.. Taking concrete examples from our everyday life, Fr. Jacques teaches us that interior peace is not the absence of problems but the presence of confident abandonment to God. He invites us to respond in a Gospel fashion to the unpleasant and uncertain situations we must all confront. Since peace of heart is a pure gift of God, it is something we should seek, pursue and ask from Him without ever ceasing.`,
    specialNote: "As a special gift, Fr. Jacques himself joined us live to speak on “Abandonment to God in Uncertain Times.”"
  },
  {
    id: 2,
    title: "Hail Holy Queen: The Mother of God in the Word of God",
    author: "Scott Hahn",
    imagePlaceholderId: 20,
    description: `Following our journey into inner peace, we run to the arms of our mother with Scott Hahn's Hail, Holy Queen: The Mother of God in the Word of God. As one of today's leading Catholic theologians and authors, and one of my personal favorites, Hahn offers a profound exploration of Mary's biblical roots, defending her as the Mother of God and our spiritual mother. Grounded deeply in Scripture, he draws connections between Old Testament typology and New Testament fulfillment to illuminate her central role in salvation history. He provides a compelling case for the Church's teachings on Mary, addressing challenges faced by Catholics and non-Catholics alike who grapple with Marian doctrines. His insights foster a renewed appreciation for her queenship, mediation, and exemplary discipleship, encouraging us to draw closer to Christ through her intercession. This accessible yet scholarly work serves as a valuable resource for deepening faith in the maternal heart of the Church and is the perfect book for anyone who has ever wondered, “But why do Catholics honor Mary so much?”`
  },
  {
    id: 3,
    title: "Pray For Us: 75 Saints who prayed, suffered and struggled on their Way to Holiness",
    author: "Meg-Hunter Kilmer",
    imagePlaceholderId: 30,
    description: `Sometimes when we read about Our Lady and her perfection, some Christians struggle to relate to her, and one of our readers commented as such. Here was a book that everyone could relate to. Telling the stories of 75 saints and blesseds’ Meg Hunter writes about ordinary people - Mothers and fathers, students and teachers, married and religious, young and old, the famous & the obscure - who grappled with sin, endured difficulties and navigated life’s complexities on their way to sanctity. The call to holiness remains for all of us. In our lives, in our unique situations, with our personality and temperament. Her book shows us that the Church is filled with saints vastly different from one another and they stand before us as witnesses to the fact that holiness is possible for everyone and no circumstance - addiction, family brokenness, timidity, anger, or disinclination to pray—renders holiness unattainable. Instead, these witnesses challenge us to pursue Christ relentlessly no matter how often we stumble.`,
    quote: "A fun fact - 6 of the blesseds written about in the book have been canonised by Pope Leo this year! Might you take a quick guess as to who they are? I’ll give you three, St. Carlos Acutis, Pier Giorgio & Bartolo Longo, the former satanist who became a saint!"
  },
  {
    id: 4,
    title: "Be Healed; A guide to Encountering the Powerful Love of Jesus in Your Life",
    author: "Dr. Bob Schuchts",
    imagePlaceholderId: 40,
    description: `We ended 2025 with a book that felt less like reading and more like an extended, guided retreat - Dr. Bob Schuchts’ book Be Healed; A Guide to Encountering the Powerful Love of Jesus in Your Life. If you’ve ever wondered why certain patterns (anger, control, shame, lust) keep showing up no matter how many times you go to confession or how hard you try to “be better,” this book hands you the map. Dr. Bob, a seasoned therapist and founder of the John Paul II Healing Center, writes with the rare combination of clinical precision and tender fatherly love. He explains that most of us carry hidden wounds from our families of origin, from trauma, or simply from living in a fallen world. Those wounds give rise to lies we believe about ourselves, God, and others. In an effort to protect ourselves we make unconscious inner vows (“I’ll never trust anyone again,” “I have to be perfect to be loved”), and those vows end up imprisoning us more than the original wound ever did. Together we traced the anatomy of our wounds and the repeating cycles so many of us live in: wound → false belief → vow → wound again.

The heart of the book is an invitation to bring every wounded place to Jesus and let Him speak the truth that heals. Chapter after chapter offers simple but profound insights, imaginative encounters with Christ, and guide questions that help us name the wound, renounce the lie, and forgive from the heart. Dr. Bob keeps returning to the three primary ways the Lord heals us today, exactly as He did in the Gospels: the sacraments (especially Reconciliation and the Eucharist), prayer, and the offering of our suffering in union with the Cross (redemptive suffering). There is no better way to end one year and begin another than by inviting Christ into the darkest, most wounded places of our souls and watching Him make all things new.`
  }
];

export const UPCOMING_EVENT: EventDetails = {
  title: "Healing and Restoration: Bringing to Jesus the Wounded Places in Our Lives",
  speaker: "Dr. Bob Schuchts",
  date: "23rd JANUARY 2026",
  time: "9:00 PM",
  description: "Following the completion of our last book for the year, Dr. Bob Schutch will be giving us a talk. The event is free of charge and open to all.",
  registrationLink: "https://events.teams.microsoft.com/event/e1139611-df1e-49c1-ab6a-9192f028d939@baf93589-65ec-4bf1-a87a-46e1fc465d98"
};

export const READING_LIST_2026: ReadingListItem[] = [
  {
    title: "Jesus of Nazareth: From the Baptism in the Jordan to the Transfiguration",
    author: "Pope Benedict XVI",
    dates: "Mon 5th JAN - Friday 13th Feb",
    duration: "40 DAYS"
  },
  {
    title: "The Cries of Jesus from the Cross; A Fulton Sheen Anthology",
    dates: "16th Feb - 27th March",
    duration: "40 DAYS",
    note: "Begins 2 days to Lent"
  },
  {
    title: "Papal Encyclical: ECCLESIA DE EUCHARISTIA",
    author: "St. John Paul II",
    dates: "Sunday 29th March - Sunday 5th April",
    duration: "Holy Week"
  },
  {
    title: "He Leadeth me: An Extraordinary Testament of faith",
    author: "Walter J. Ciszek",
    dates: "Monday 6th April - Thursday 30th April",
    duration: "25 DAYS"
  },
  {
    title: "The Reed of God",
    author: "Caryll Houselander",
    dates: "May 4th Monday - 28th May Friday",
    duration: "25 DAYS",
    note: "Month of Our Lady"
  },
  {
    title: "Chastity: Reconciliation of the senses",
    author: "Bishop Erik Varden",
    dates: "June 1st - June 25th Sunday",
    duration: "25 DAYS"
  },
  {
    title: "The Catechism of The Catholic Church: Chapter on Prayer",
    dates: "Mon 6th July - Sat 10th Aug",
    duration: "35 DAYS"
  },
  {
    title: "The Screwtape Letters",
    author: "C.S Lewis",
    dates: "August 17th - 15th Sept",
    duration: "30 DAYS"
  },
  {
    title: "The Joy of God: Collected Writings",
    author: "Sr. Mary David",
    dates: "21st Sep - 15th Oct",
    duration: "25 DAYS"
  },
  {
    title: "The Power of Silence: Against the Dictatorship of Noise",
    author: "Cardinal Sarah",
    dates: "Mon 19th Oct - Sun 22 Nov",
    duration: "35 DAYS"
  },
  {
    title: "Joy to the World; How Christ's coming changed everything (and still does)",
    author: "Scott Hahn",
    dates: "Sun 29th Nov - 23rd Dec",
    duration: "25 DAYS"
  }
];

export const INTRO_2026_TEXT = `Next year, we hope to have many activities - from physical meetups to more webinars and forums for discussing the books we have already read or we are yet to read. 
Speaking of the books we will read, next year we are aiming to touch on different topics, including Marian books, books on the Saints, Papal Encyclicals, books on the Devout life and the CCC. A tip that I hope to apply in my reading next year to make me more consistent with the practice of spiritual reading is to put a fixed 10 minutes each day that will be dedicated to reading. Maybe you could apply the same 🙂

Note that I will be sharing a copy of each E-BOOK that we will be reading before starting the book, so you do not need to buy these books prior unless you wish to have your own physical copy.`;