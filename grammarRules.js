/*
 ENGLISH LEARNING STUDIO
 COMPLETE ENGLISH GRAMMAR MASTER DATABASE
 Covers Beginner, Intermediate, Advanced, SSC, NDA,
 UPSC, Spoken English and General English.
*/

export const grammarRules = [
  {
    id: "parts-of-speech",
    title: "Parts of Speech",
    level: "Beginner",
    rules: [
      ["Noun", "A noun names a person, place, thing, or idea.", "Honesty is the best policy."],
      ["Pronoun", "A pronoun replaces a noun.", "She is my sister."],
      ["Verb", "A verb expresses an action or state.", "They play football."],
      ["Adjective", "An adjective modifies a noun or pronoun.", "She is intelligent."],
      ["Adverb", "An adverb modifies a verb, adjective, or another adverb.", "He runs quickly."],
      ["Preposition", "A preposition shows relationships between words.", "The book is on the table."],
      ["Conjunction", "A conjunction connects words, phrases, or clauses.", "Ram and Shyam are friends."],
      ["Interjection", "An interjection expresses a sudden emotion.", "Hurrah! We won."]
    ]
  },
  {
    id: "noun",
    title: "Noun Rules",
    level: "Beginner",
    rules: [
      ["Proper Noun", "Proper nouns begin with capital letters.", "India is a great country."],
      ["Collective Noun", "Collective nouns name groups.", "The team is ready."],
      ["Uncountable Noun", "Uncountable nouns generally do not take plural forms.", "I need some information."],
      ["Plural Formation", "Most nouns form plurals by adding -s or -es.", "Books, boxes."],
      ["Irregular Plurals", "Some nouns have irregular plural forms.", "Child → children."],
      ["Possessive Case", "Use apostrophe-s to show possession.", "Rita's book."],
      ["Double Possessive", "A double possessive can express a relationship.", "A friend of mine."],
      ["Material Nouns", "Material nouns generally do not take articles when used generally.", "Gold is precious."],
      ["Abstract Nouns", "Abstract nouns name qualities, states, or ideas.", "Wisdom is valuable."],
      ["Compound Nouns", "Compound nouns combine two or more words.", "Mother-in-law."]
    ]
  },
  {
    id: "pronoun",
    title: "Pronoun Rules",
    level: "Beginner to Advanced",
    rules: [
      ["Personal Pronouns", "Use subject forms as subjects and object forms as objects.", "She helped him."],
      ["Possessive Pronouns", "Possessive pronouns show ownership and stand independently.", "This book is mine."],
      ["Reflexive Pronouns", "Use reflexive pronouns when subject and object refer to the same person.", "He hurt himself."],
      ["Emphatic Pronouns", "Emphatic pronouns add emphasis.", "I myself completed it."],
      ["Each and Every", "Each and every normally take singular nouns and singular verbs.", "Each student is ready."],
      ["Either and Neither", "Either and neither are generally singular when used alone.", "Neither is correct."],
      ["One of", "One of is followed by a plural noun and normally a singular verb.", "One of the boys is absent."],
      ["Relative Pronouns", "Who refers to people; which generally refers to things.", "The boy who won is my friend."],
      ["Who and Whom", "Who is a subject form; whom is an object form.", "Whom did you meet?"],
      ["Pronoun Agreement", "Pronouns should agree with their antecedents in number and meaning.", "The students brought their books."],
      ["Reciprocal Pronouns", "Each other and one another express mutual relationships.", "They helped each other."],
      ["Indefinite Pronouns", "Someone, everyone and nobody generally take singular verbs.", "Everyone is welcome."]
    ]
  },
  {
    id: "articles-determiners",
    title: "Articles and Determiners",
    level: "Beginner to Advanced",
    rules: [
      ["A", "Use a before a consonant sound.", "A university."],
      ["An", "Use an before a vowel sound.", "An honest man."],
      ["The", "Use the when referring to a specific or identifiable noun.", "The book on the table."],
      ["Unique Objects", "Use the with unique objects in ordinary contexts.", "The sun."],
      ["Superlatives", "The is generally used before superlative adjectives.", "The best student."],
      ["Musical Instruments", "The is generally used when speaking about playing instruments.", "She plays the piano."],
      ["Zero Article", "Do not normally use an article before plural or uncountable nouns used generally.", "Books are useful."],
      ["Some and Any", "Some is common in affirmative statements; any is common in questions and negatives.", "I have some books. Do you have any?"],
      ["Much and Many", "Much is used with uncountable nouns; many with countable plural nouns.", "Much water; many books."],
      ["Few and Little", "Few is used with countable nouns; little with uncountable nouns.", "Few students; little time."],
      ["Fewer and Less", "Fewer is normally used with countable nouns; less with uncountable quantities.", "Fewer mistakes; less water."],
      ["Each and Every", "Each focuses on individual members; every considers all members individually.", "Every student must attend."]
    ]
  },
  {
    id: "adjective",
    title: "Adjective Rules",
    level: "Intermediate",
    rules: [
      ["Attributive Adjective", "An attributive adjective appears before a noun.", "A beautiful flower."],
      ["Predicative Adjective", "A predicative adjective follows a linking verb.", "The flower is beautiful."],
      ["Comparative Degree", "Use the comparative form to compare two entities.", "Ram is taller than Mohan."],
      ["Superlative Degree", "Use the superlative form for the highest degree in a group.", "She is the tallest girl."],
      ["As...As", "Use the positive degree between as and as.", "He is as tall as Ram."],
      ["Too...To", "Too can express excess that prevents an action.", "He is too weak to walk."],
      ["So...That", "So can introduce a result clause.", "He was so tired that he slept."],
      ["Senior and Junior", "Senior and junior are generally followed by to, not than.", "He is senior to me."],
      ["Prefer", "Prefer is commonly followed by to when comparing two nouns or gerunds.", "I prefer tea to coffee."],
      ["Double Comparatives", "Avoid non-standard double comparative forms.", "Use better, not more better."],
      ["Order of Adjectives", "Adjectives commonly follow an order such as opinion, size, age, shape, colour, origin, material and purpose.", "A beautiful small old house."]
    ]
  },
  {
    id: "adverb",
    title: "Adverb Rules",
    level: "Intermediate",
    rules: [
      ["Adverb of Manner", "Adverbs of manner commonly describe how an action happens.", "She speaks politely."],
      ["Adverb of Frequency", "Frequency adverbs generally precede main verbs but follow forms of be.", "He always works. He is always busy."],
      ["Adverb of Time", "Adverbs of time commonly appear at the beginning or end of a clause.", "I met him yesterday."],
      ["Adverb of Place", "Adverbs of place indicate where an action occurs.", "Come here."],
      ["Hard and Hardly", "Hard means with effort; hardly means almost not.", "He works hard."],
      ["Late and Lately", "Late means not on time; lately means recently.", "He arrived late."],
      ["Enough", "Enough generally follows an adjective or adverb but precedes a noun.", "Strong enough; enough money."],
      ["Too", "Too generally precedes an adjective or adverb.", "Too difficult."],
      ["Only", "The position of only can change the meaning of a sentence.", "Only he called me."]
    ]
  },
  {
    id: "subject-verb-agreement",
    title: "Subject Verb Agreement",
    level: "Advanced / SSC Important",
    rules: [
      ["Basic Agreement", "A singular subject generally takes a singular verb.", "He plays cricket."],
      ["Plural Subject", "A plural subject generally takes a plural verb.", "They play cricket."],
      ["And", "Two subjects joined by and generally take a plural verb.", "Ram and Shyam are friends."],
      ["One Subject", "When two nouns refer to one person or one combined idea, a singular verb may be used.", "The poet and philosopher is here."],
      ["Each and Every", "Each and every before a subject normally take a singular verb.", "Every boy is present."],
      ["Either...Or", "With either...or, the verb generally agrees with the nearer subject.", "Either Ram or his friends are coming."],
      ["Neither...Nor", "With neither...nor, the verb generally agrees with the nearer subject.", "Neither the boys nor Ram is ready."],
      ["As Well As", "The verb agrees with the main subject before as well as.", "Ram, as well as his friends, is coming."],
      ["Along With", "Along with does not normally change the number of the main subject.", "The teacher, along with students, is here."],
      ["One of", "One of + plural noun generally takes a singular verb.", "One of my friends is a doctor."],
      ["A Number Of", "A number of + plural noun normally takes a plural verb.", "A number of students are absent."],
      ["The Number Of", "The number of + plural noun normally takes a singular verb.", "The number of students is increasing."],
      ["Many a", "Many a + singular noun normally takes a singular verb.", "Many a student has failed."],
      ["More Than One", "More than one + singular noun generally takes a singular verb.", "More than one student is absent."],
      ["Collective Nouns", "Collective nouns can take singular or plural verbs depending on whether the group is viewed as a unit or as individuals.", "The team is winning."],
      ["Uncountable Nouns", "Uncountable nouns generally take singular verbs.", "The furniture is expensive."],
      ["News", "News is normally treated as singular.", "The news is good."],
      ["Mathematics", "The name of a subject ending in -s normally takes a singular verb.", "Mathematics is difficult."],
      ["Scissors", "Some paired nouns take plural verbs unless used with a pair of.", "The scissors are sharp."],
      ["There Is / There Are", "The verb agrees with the real subject that follows.", "There are two books."],
      ["Time and Money", "A sum or period considered as one unit takes a singular verb.", "Ten years is a long time."],
      ["Relative Pronouns", "The verb in a relative clause agrees with the antecedent.", "She is one of the students who work hard."],
      ["None", "None can take a singular or plural verb depending on meaning and context.", "None of the water is left."],
      ["Each of", "Each of + plural noun/pronoun normally takes a singular verb.", "Each of them is ready."],
      ["Titles", "Titles of books, films and works are generally singular.", "The Arabian Nights is a famous work."]
    ]
  },
  {
    id: "tenses",
    title: "All 12 Tenses",
    level: "Beginner to Advanced",
    rules: [
      ["Present Simple", "Subject + V1(s/es)", "She writes daily."],
      ["Present Continuous", "Subject + am/is/are + V-ing", "She is writing."],
      ["Present Perfect", "Subject + has/have + V3", "She has written."],
      ["Present Perfect Continuous", "Subject + has/have been + V-ing", "She has been writing for an hour."],
      ["Past Simple", "Subject + V2", "She wrote yesterday."],
      ["Past Continuous", "Subject + was/were + V-ing", "She was writing."],
      ["Past Perfect", "Subject + had + V3", "She had written before I arrived."],
      ["Past Perfect Continuous", "Subject + had been + V-ing", "She had been writing for an hour."],
      ["Future Simple", "Subject + will + V1", "She will write."],
      ["Future Continuous", "Subject + will be + V-ing", "She will be writing."],
      ["Future Perfect", "Subject + will have + V3", "She will have written."],
      ["Future Perfect Continuous", "Subject + will have been + V-ing", "She will have been writing for an hour."],
      ["Since", "Since identifies the starting point of a period.", "Since Monday."],
      ["For", "For identifies the duration of a period.", "For two hours."],
      ["Stative Verbs", "Stative verbs are not normally used in continuous forms when they express a state.", "I know him."],
      ["Present for Future", "Present simple can describe fixed schedules.", "The train leaves tomorrow."],
      ["Future Time Clauses", "Use present forms rather than will in ordinary future time clauses.", "I will call when I arrive."]
    ]
  },
  {
    id: "auxiliary-modals",
    title: "Auxiliary and Modal Verbs",
    level: "Intermediate",
    rules: [
      ["Be", "Be forms are used in continuous and passive constructions.", "She is reading."],
      ["Have", "Have forms are used in perfect constructions.", "He has finished."],
      ["Do", "Do-support is used in many questions and negatives.", "Do you know him?"],
      ["Can", "Can expresses ability or possibility.", "I can swim."],
      ["Could", "Could expresses past ability, polite requests or possibility.", "Could you help me?"],
      ["May", "May expresses permission or possibility.", "May I come in?"],
      ["Might", "Might expresses possibility.", "It might rain."],
      ["Must", "Must expresses strong obligation or logical deduction.", "You must follow the rules."],
      ["Should", "Should expresses advice or expectation.", "You should study."],
      ["Ought To", "Ought to expresses duty or advice.", "You ought to respect others."],
      ["Need", "Need can function as a main verb or, in some constructions, a modal.", "You need not worry."],
      ["Dare", "Dare can function as a main verb or, in some constructions, a modal.", "Dare he question me?"],
      ["Would", "Would is used for polite requests, hypothetical situations and past habits.", "Would you help me?"],
      ["Used To", "Used to describes past habits or states that no longer apply.", "I used to play cricket."],
      ["Had Better", "Had better is followed by the base form.", "You had better leave."]
    ]
  },
  {
    id: "verb-patterns",
    title: "Verb Forms and Verb Patterns",
    level: "Advanced",
    rules: [
      ["V1 V2 V3", "Learn the base, past and past participle forms of irregular verbs.", "Go, went, gone."],
      ["Transitive Verb", "A transitive verb takes a direct object.", "She opened the door."],
      ["Intransitive Verb", "An intransitive verb does not take a direct object.", "The baby slept."],
      ["Linking Verb", "Linking verbs connect the subject to a complement.", "She seems happy."],
      ["Finite Verb", "A finite verb shows tense or agreement.", "He works."],
      ["Verb + Gerund", "Some verbs are followed by gerunds.", "Avoid making mistakes."],
      ["Verb + Infinitive", "Some verbs are followed by to-infinitives.", "I want to learn."],
      ["Bare Infinitive", "Modal verbs are followed by the bare infinitive.", "She can sing."],
      ["Make and Let", "Make and let are commonly followed by an object and bare infinitive in active clauses.", "Let him go."],
      ["Help", "Help can be followed by a bare infinitive or a to-infinitive.", "Help me (to) learn."],
      ["Perception Verbs", "See, hear and watch can take an object followed by a bare infinitive or an -ing form.", "I saw him cross the road."],
      ["Causative Have", "Have can express arranging for someone to do something.", "I had my hair cut."]
    ]
  },
  {
    id: "non-finite",
    title: "Non-Finite Verbs",
    level: "Advanced",
    rules: [
      ["Infinitive", "The infinitive is the base form, often with to.", "To read is useful."],
      ["Bare Infinitive", "The bare infinitive appears without to.", "You must work."],
      ["Gerund", "A gerund is an -ing verb form functioning as a noun.", "Swimming is enjoyable."],
      ["Present Participle", "The present participle is an -ing form used in continuous constructions or as a modifier.", "The crying baby."],
      ["Past Participle", "The past participle is used in perfect and passive constructions.", "The broken window."],
      ["Perfect Infinitive", "To have + V3 can refer to an earlier action.", "He seems to have left."],
      ["Perfect Gerund", "Having + V3 can express an earlier action.", "He regretted having lied."],
      ["Dangling Participle", "A participial phrase should clearly relate to the correct noun or pronoun.", "Walking home, I saw a bird."]
    ]
  },
  {
    id: "prepositions",
    title: "Prepositions",
    level: "Advanced / SSC Important",
    rules: [
      ["At", "At is used for precise times and specific points.", "At 6 o'clock."],
      ["On", "On is used for days, dates and surfaces.", "On Monday."],
      ["In", "In is used for months, years, long periods and enclosed spaces.", "In 2026."],
      ["By", "By can indicate a deadline or means.", "Finish it by Monday."],
      ["Until", "Until indicates continuation up to a point in time.", "Wait until evening."],
      ["Between", "Between is commonly used for two distinct entities.", "Between Ram and Mohan."],
      ["Among", "Among is commonly used for members of a group.", "Among the students."],
      ["Beside", "Beside means next to.", "Sit beside me."],
      ["Besides", "Besides means in addition to.", "Besides English, I study Hindi."],
      ["Since", "Since identifies a starting point.", "Since 2020."],
      ["For", "For identifies duration.", "For five years."],
      ["Despite", "Despite is followed by a noun, pronoun or gerund.", "Despite the rain, we went out."],
      ["In Spite Of", "In spite of is followed by a noun, pronoun or gerund.", "In spite of being tired, he worked."],
      ["Prefer To", "Prefer is commonly followed by to when comparing preferences.", "I prefer tea to coffee."],
      ["Good At", "Good is commonly followed by at for skills.", "Good at mathematics."],
      ["Interested In", "Interested is followed by in.", "Interested in science."],
      ["Accused Of", "Accused is followed by of.", "Accused of theft."],
      ["Composed Of", "Composed is followed by of.", "Composed of five members."]
    ]
  },
  {
    id: "conjunctions",
    title: "Conjunctions",
    level: "Advanced",
    rules: [
      ["Coordinating Conjunctions", "FANBOYS connect grammatically equal elements.", "For, And, Nor, But, Or, Yet, So."],
      ["Subordinating Conjunctions", "Subordinating conjunctions introduce dependent clauses.", "Although he was tired, he worked."],
      ["Either Or", "Use either...or to present alternatives.", "Either Ram or Mohan will come."],
      ["Neither Nor", "Use neither...nor to connect negative alternatives.", "Neither Ram nor Mohan came."],
      ["Both And", "Both...and connects two related elements.", "Both Ram and Mohan came."],
      ["Not Only But Also", "Not only...but also adds emphasis to two related elements.", "She is not only clever but also hardworking."],
      ["Although and But", "In standard constructions, avoid using although and but together to express the same contrast.", "Although he was ill, he worked."],
      ["Because and So", "Avoid using because and so together for the same cause-result relationship in a simple construction.", "Because it rained, we stayed home."],
      ["No Sooner", "No sooner is commonly followed by than and inversion.", "No sooner had he arrived than it rained."],
      ["Hardly and Scarcely", "Hardly and scarcely are commonly followed by when.", "Hardly had he arrived when it rained."],
      ["Lest", "Lest is commonly followed by should or a bare subjunctive form.", "Work hard lest you should fail."],
      ["As Well As", "As well as joins related elements but does not always create a plural subject.", "Ram as well as Mohan is here."]
    ]
  },
  {
    id: "voice",
    title: "Active and Passive Voice",
    level: "Advanced / SSC Important",
    rules: [
      ["Present Simple", "Object + am/is/are + V3.", "He writes a letter → A letter is written by him."],
      ["Present Continuous", "Object + am/is/are being + V3.", "She is cooking food → Food is being cooked by her."],
      ["Present Perfect", "Object + has/have been + V3.", "He has completed the work → The work has been completed."],
      ["Past Simple", "Object + was/were + V3.", "She
